import missilesDB from '../Models/DBModels/munitionsDB'
import detailsFromJson from '../../Data/missiles.json'
import { missilesEunm } from '../Models/enums/MissilesEnum';

export const getMunitionsByUser = async ({ idUser }: { idUser: string }) => {
    console.log(idUser);
    const thisMissiles = await missilesDB.findOne({ userId: idUser }).lean()
    return thisMissiles?.munitions.map(
        (item) => ({ name: item.name, amount: item.amount })
    );

}

export const getDetailsOnMissiles = ({ missiles: missilesEunm }: { missiles: missilesEunm }) => {
    return detailsFromJson.find(x => x.name === missilesEunm)
}