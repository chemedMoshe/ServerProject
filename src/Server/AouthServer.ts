import bcrypt from 'bcrypt'
import userDB from '../Models/DBModels/userDB'
import { IUserDTO } from '../Models/DBModels/DTO/IUserDTO'
import LoginDTO from '../Models/DBModels/DTO/LoginDTO'
import jwt from "jsonwebtoken";

export const createNewUserServer = async (user: IUserDTO) => {
    try {
        const encPass = await bcrypt.hash(user.Password, 10)
        user.Password = encPass
        const newUser = new userDB(user)
        await newUser.save()
        return { Name: newUser.Name, Message: 'User created successfully' }
    } catch (error) {
        console.log(error);
        throw new Error(error as string)
    }
}


export const loginServer = async (user: LoginDTO) => {
    try {
        const userFromDB = await userDB.findOne({ Name: user.Name }).lean()
        if (!userFromDB) throw new Error('User not found')
        const isMatch = await bcrypt.compare(user.Password, userFromDB.Password)
        if (!isMatch) throw new Error('Password is incorrect')
        const token = await jwt.sign({
            user_id: userFromDB._id,
            Name: userFromDB.Name,
            Organization: userFromDB.Organization,
            Location: userFromDB.Location || null

        }, process.env.JWT_SECRET!, {
            expiresIn: '10m'
        })

        return { Name: userFromDB.Name, token, password: '*******' }
    } catch (error) {
        throw new Error(error as string)
    }
}
