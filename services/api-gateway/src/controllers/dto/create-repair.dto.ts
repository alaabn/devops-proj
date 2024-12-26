import { RepairStatus } from "../enums/status.enum";

export class CreateRepairDto {
    description: string;
    status: RepairStatus;
    customer: string;
    technician: string;
    device: string;
}
