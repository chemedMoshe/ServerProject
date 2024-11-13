import { Request, Response } from "express"
import { IUpdateMissiles, updateMissiles } from "../Server/dispatchServer"

export const dispatchRouter = async (req: Request<IUpdateMissiles>, res: Response) => {
    try {
        const dispatch = await updateMissiles(req.body)
        res.status(200).json(dispatch)
    } catch (err) {
        res.status(400).json((err as Error).message)
    }
}