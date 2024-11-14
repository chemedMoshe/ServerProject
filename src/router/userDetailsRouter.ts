import { Request, Response } from "express"
import { getMunitionsByUser, getDetailsOnMissiles } from "../Server/UserDetailsService"


export const getMunitionsByUserRouter = async (req: Request, res: Response) => {
    try {
        
        const details = await getMunitionsByUser(req.body)
        
        
        res.status(200).json({ data: details, message: "User details" })
    }
    catch (err) {
        res.status(400).json((err as Error).message)
    }
}

export const getDetailsMissilesRouter = async (req: Request, res: Response) => {
    try {
        const details = getDetailsOnMissiles(req.body)
        res.status(200).json({ data: details, message: "Missiles details" })
    }
    catch (err) {
        res.status(400).json((err as Error).message)
    }
}