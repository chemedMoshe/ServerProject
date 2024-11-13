import { LocationsEnum } from "../../enums/LocationEnum";
import { OrganizationEnum } from "../../enums/organizationEnum";

export interface IUserDTO{
    Name: string;
    Password: string;
    Organization: OrganizationEnum;
    Location?: LocationsEnum;
}