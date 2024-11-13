import e from "express";
import {  OrganizationEnum } from "../enums/organizationEnum";
import { LocationsEnum } from "../enums/LocationEnum";

export default interface IUser extends Document {
    Name: string;
    Password: string;
    Organization: OrganizationEnum;
    Location?: LocationsEnum;
}

