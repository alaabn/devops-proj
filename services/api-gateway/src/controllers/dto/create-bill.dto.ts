import { BillStatus } from "../enums/status.enum";

export class CreateBillDTO {
    repairOrder: string;
    totalAmount: number;
    paymentStatus: BillStatus;
}