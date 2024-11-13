import { IUserDTO } from "../Models/DBModels/DTO/IUserDTO"
import { createNewUserServer, loginServer } from "../Server/AouthServer"
import { Request,Response } from "express"

export const loginRouter = async(req:Request,res:Response)=>{
    try {
        const dataFromServer = await loginServer(req.body)   
        res.status(200).json(dataFromServer)
      } catch (err) {
        res.status(400).json((err as Error).message)
      }
}



export const registerRouter = async(req:Request<IUserDTO>,res:Response)=>{
    try {
        
       const dataFromServer = await createNewUserServer(req.body)
      
       res.status(201).json(dataFromServer)
    } catch (error) {
        res.status(400).json(error)
    }
}