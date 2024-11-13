import missilesDB from '../Models/DBModels/munitionsDB'
import detailsFromJson from '../../Data/missiles.json'
import { missilesEunm } from '../Models/enums/MissilesEnum';

export const getAmountMunitions = async ({ idUser }: { idUser: string }) => {
    const thisMissiles = await missilesDB.findOne({ userId: idUser }).lean()
    return thisMissiles?.munitions.map((item) => ({ name: item.name, amount: item.amount }));

}

export const getDetailsOnMissiles =({missiles: missilesEunm}: {missiles: missilesEunm}) =>{ 
   return detailsFromJson.find(x => x.name === missilesEunm)
}