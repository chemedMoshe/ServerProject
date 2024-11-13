import { Locations } from "../enums/LocationEnum";
import { Organization } from "../enums/organizationEnum";

export default interface IUser {
    name: string;
    password: string;
    organization: Organization;
    location?: Locations;
}
