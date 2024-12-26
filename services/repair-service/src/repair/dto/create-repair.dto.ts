import { Status } from "../enum/status.enum";

export class CreateRepairDto {
    description: string;
    status: Status;
    customer: string;
    technician: string;
    device: string;
}
