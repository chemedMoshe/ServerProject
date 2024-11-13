import mongoose from "mongoose";
import missilesDB from "../Models/DBModels/munitionsDB";
import { missilesEunm } from "../Models/enums/MissilesEnum";
import dispatchHistoryDB from "../Models/DBModels/dispatchHistory";
import { StatusDispatchEnum } from "../Models/enums/StatusDispatchEnum";

export interface IUpdateMissiles {
    id: mongoose.Types.ObjectId,
    missiles: missilesEunm
}


const updateDispatchInDB = async ({ id, missiles }: IUpdateMissiles) => {
    try {
        const dispatchs = await dispatchHistoryDB.findOne({ userId: id })
        dispatchs!.dispatches.push({ name: missiles, staus: StatusDispatchEnum.Hit })

        await dispatchs!.save()

    } catch (error) {
        throw error
    };
}

export const updateMissiles = async ({ id, missiles }: IUpdateMissiles) => {
    try {
        const thisMissiles = await missilesDB.findOne({ userId: id })
        if (!thisMissiles) throw new Error("missiles not found");

        const amount = thisMissiles!.munitions.find(x => x.name == missiles)!.amount!
        if (amount == 0) throw new Error("not enough munitions");

        thisMissiles!.munitions.find(x => x.name == missiles)!.amount = amount - 1

        await thisMissiles!.save()

        await updateDispatchInDB({ id, missiles })

        return { message: "success", amount: amount - 1 }
    } catch (error) {
        throw error
    };
}