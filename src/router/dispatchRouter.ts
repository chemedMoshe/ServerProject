import { Request, Response } from "express"
import { getDispatchByLocation, getDispatchesById, IGetDispatch, interception, IUpdateMissiles, newDispatch } from "../Server/dispatchServer"

export const getDispatchesByIdRouter = async (req: Request<IGetDispatch>, res: Response) => {
    try {
        const dispatch = await getDispatchesById(req.body)
        res.status(200).json(dispatch)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
}


export const dispatchRouter = async (req: Request<IUpdateMissiles>, res: Response) => {
    try {
        console.log(req.body);
        
        const dispatch = await newDispatch(req.body)
        res.status(200).json(dispatch)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
}


export const interceptionRouter = async (req: Request, res: Response) => {
    try {
        const dispatch = await interception(req.body)
        res.status(200).json(dispatch)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
}


export const getDispatchesByLocationRouter = async (req: Request, res: Response) => {
    try {
        const dispatch = await getDispatchByLocation(req.body)
        res.status(200).json(dispatch)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
}