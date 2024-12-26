enum BillActions {
    FindBills = 'FIND_BILLS',
    FindOneBill = 'FIND_ONE_BILL',
    CreateBill = 'CREATE_BILL',
    BillPaid = 'BILL_PAID',
    BillCanceled = 'BILL_CANCELED'
}

enum CustomerActions {
    CreateCustomer = 'CREATE_CUSTOMER',
    FindAllCustomer = 'FIND_ALL_CUSTOMER',
    FindOneCustomer = 'FIND_ONE_CUSTOMER',
    UpdateCustomer = 'UPDATE_CUSTOMER',
    DeleteCustomer = 'DELETE_CUSTOMER'
}

enum PartActions {
    CreatePart = 'CREATE_PART',
    FindAllPart = 'FIND_ALL_PART',
    FindOnePart = 'FIND_ONE_PART',
    UpdatePart = 'UPDATE_PART',
    DeletePart = 'DELETE_PART'
}

enum ToolActions {
    CreateTool = 'CREATE_TOOL',
    FindAllTool = 'FIND_ALL_TOOL',
    FindOneTool = 'FIND_ONE_TOOL',
    UpdateTool = 'UPDATE_TOOL',
    DeleteTool = 'DELETE_TOOL'
}

enum PersonnelActions {
    CreatePersonnel = 'CREATE_PERSONNEL',
    FindAllPersonnel = 'FIND_ALL_PERSONNEL',
    FindOnePersonnel = 'FIND_ONE_PERSONNEL',
    LoginPersonnel = 'LOGIN_PERSONNEL',
    UpdatePersonnel = 'UPDATE_PERSONNEL',
    DeletePersonnel = 'DELETE_PERSONNEL'
}

enum RepairActions {
    CreateRepair = 'CREATE_REPAIR',
    FindAllRepair = 'FIND_REPAIR',
    FindOneRepair = 'FIND_ONE_REPAIR',
    UpdateRepair = 'UPDATE_REPAIR',
    StartRepair = 'START_REPAIR',
    EndRepair = 'END_REPAIR',
    CancelRepair = 'CANCEL_REPAIR',
}

enum DeviceActions {
    CreateDevice = 'CREATE_DEVICE',
    FindAllDevice = 'FIND_ALL_DEVICE',
    FindOneDevice = 'FIND_ONE_DEVICE',
    UpdateDevice = 'UPDATE_DEVICE',
    DeleteDevice = 'DELETE_DEVICE'
}

export {
    BillActions,
    CustomerActions, DeviceActions, PartActions, PersonnelActions,
    RepairActions, ToolActions
};

