import mongoose from "mongoose";
import missilesDB from "../Models/DBModels/munitionsDB";
import { missilesEunm } from "../Models/enums/MissilesEnum";
import dispatchHistoryDB from "../Models/DBModels/dispatchHistory";
import { StatusDispatchEnum } from "../Models/enums/StatusDispatchEnum";
import { LocationsEnum } from "../Models/enums/LocationEnum";

export interface IUpdateMissiles {
    id: mongoose.Types.ObjectId,
    missiles: missilesEunm,
    location: LocationsEnum
}
export interface IInterception {
    idDispatch: mongoose.Types.ObjectId
    idUser: mongoose.Types.ObjectId

}
export interface IGetDispatch {
    id: mongoose.Types.ObjectId
}

export interface IGetDispatchesByLocation {
    location: LocationsEnum
}

export const getDispatchesById = async ({ id }: IGetDispatch) => {
    try {
        const dispatchs = await dispatchHistoryDB.find({ userId: id })
        
        return dispatchs
    } catch (error) {
        throw error
    };
}


export const  getDispatchByLocation = async ({location}:IGetDispatchesByLocation) => {
    try {
        const dispatchs = await dispatchHistoryDB.find({location: location})
        return dispatchs
    } catch (error) {
        throw error
    };
}

const updateDispatchInDB = async ({ id, missiles, location }: IUpdateMissiles) => {
    try {
        
        const newDispatch = new dispatchHistoryDB({
            userId:id,
             name: missiles,
             status: StatusDispatchEnum.Launched,
             location  
        })
        await newDispatch.save()

        

    } catch (error) {
        throw error
    };
}

export const newDispatch = async ({ id, missiles, location }: IUpdateMissiles) => {
    try {
        const thisMissiles = await missilesDB.findOne({ userId: id })
        if (!thisMissiles) throw new Error("missiles not found");

        const amount = thisMissiles!.munitions.find(x => x.name == missiles)!.amount!
        if (amount == 0) throw new Error("not enough munitions");

        thisMissiles!.munitions.find(x => x.name == missiles)!.amount = amount - 1

        await thisMissiles!.save()

        await updateDispatchInDB({ id, missiles, location })

        return { message: "success", amount: amount - 1 }
    } catch (error) {
        throw error
    };
}


export const interception = async ({ idDispatch, idUser }: IInterception) => {
    try {
        const dispatchs = await dispatchHistoryDB.findOne({ userId: idUser })
       // dispatchs!.dispatches!.find(x => x._id == idDispatch)!
          //  .status = StatusDispatchEnum.Intercepted

        await dispatchs!.save()

        return { message: "success" }
    }
    catch (error) {
        throw new Error(error as string)
    }
}
