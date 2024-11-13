import {  OrganizationEnum } from "../enums/organizationEnum";
import { LocationsEnum } from "../enums/LocationEnum";
import mongoose from "mongoose";

export default interface IUser extends mongoose.Document {
    Name: string;
    Password: string;
    Organization: OrganizationEnum;
    Location?: LocationsEnum;
}

