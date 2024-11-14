import bcrypt from 'bcrypt'
import userDB from '../Models/DBModels/userDB'
import { IUserDTO } from '../Models/DTO/IUserDTO'
import LoginDTO from '../Models/DTO/LoginDTO'
import jwt from "jsonwebtoken";
import { OrganizationEnum } from '../Models/enums/organizationEnum';
import { LocationsEnum } from '../Models/enums/LocationEnum';
import missiles from '../../Data/organizations.json'
import missilesDB from '../Models/DBModels/munitionsDB'
import dispatchHistory from '../Models/DBModels/dispatchHistory'

const checkRequest = (user: IUserDTO) => {
    const { Name, Password, Organization, Location } = user
    if (!Name || !Password || !Organization) {
        throw new Error('All fields are required')
    }
    if (!Object.values(OrganizationEnum).includes(Organization)) {
        throw new Error('Organization is invalid')
    }
    if (Organization === OrganizationEnum.IDF) {
        if (Location && !Object.values(LocationsEnum).includes(Location)) {
            throw new Error('Location is invalid')
        }
    }


}


const addMissilesByUser = (user: IUserDTO) => {
    return user.Organization !== OrganizationEnum.IDF ?
        missiles.find(x => x.name == user.Organization)?.resources :
        missiles.find(x => x.name === user.Location)?.resources
}

export const createNewUserServer = async (user: IUserDTO) => {
    try {
        checkRequest(user)
        const encPass = await bcrypt.hash(user.Password, 10)
        user.Password = encPass

        const newUser = new userDB(user)
        await newUser.save()

        const missilesForNewUser = addMissilesByUser(user)
        const newMissiles = new missilesDB({ userId: newUser._id, munitions: missilesForNewUser })
        await newMissiles.save()

       
        return {
            Name: user.Name,
            id: newUser._id,
            Message: 'User created successfully'
        }
    } catch (error) {

        throw error as Error
    }
}


export const loginServer = async (user: LoginDTO) => {
    try {
        
        const userFromDB = await userDB.findOne({ Name: user.username }).lean()
        
        if (!userFromDB) throw new Error('User not found')
        const isMatch = await bcrypt.compare(user.password, userFromDB.Password)
        if (!isMatch) throw new Error('Password is incorrect')
        const token = await jwt.sign({
            user_id: userFromDB._id,
            Name: userFromDB.Name,
            Organization: userFromDB.Organization,
            Location: userFromDB.Location || null

        }, process.env.JWT_SECRET!, {
            expiresIn: '10m'
        })

        return {Id: userFromDB._id, Name: userFromDB.Name, token, Organization: userFromDB.Organization}

    } catch (error) {
        throw new Error(error as string)
    }
}
