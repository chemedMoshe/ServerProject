import jsonMissiles from '../../Data/missiles.json'
import { missilesEunm } from '../Models/enums/MissilesEnum'

export const getDetailsOnMissiles = (name:missilesEunm) => 
    jsonMissiles.find(x => x.name === name)

export const getTimeMissiesByName = (name:missilesEunm) =>
    jsonMissiles.find(x => x.name === name)?.speed