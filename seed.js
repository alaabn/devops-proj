function connectToDatabase(dbName) {
    return db.getSiblingDB(dbName);
}

const personnelDb = connectToDatabase('personnel-db');
personnelDb.personnel.deleteMany({});
const personnel = personnelDb.personnel.insertMany([
    {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        specialization: "SMARTPHONE_REPAIR",
        repairOrders: []
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "password456",
        specialization: "LAPTOP_REPAIR",
        repairOrders: []
    }
]);
const johnDoeId = personnel.insertedIds[0];
const janeSmithId = personnel.insertedIds[1];
print("Personnel database seeded successfully!");


const customerDb = connectToDatabase('customer-db');
customerDb.customer.deleteMany({});
const customers = customerDb.customer.insertMany([
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "123-456-7890",
        repairOrders: []
    },
    {
        name: "Bob Brown",
        email: "bob.brown@example.com",
        phone: "987-654-3210",
        repairOrders: []
    }
]);
const aliceJohnsonId = customers.insertedIds[0];
const bobBrownId = customers.insertedIds[1];
print("Customer database seeded successfully!");


const inventoryDb = connectToDatabase('inventory-db');
inventoryDb.tool.deleteMany({});
inventoryDb.part.deleteMany({});
const tools = inventoryDb.tool.insertMany([
    {
        name: "Screwdriver Set",
        type: "Hand Tool",
        quantity: 5
    },
    {
        name: "Multimeter",
        type: "Electronic Tool",
        quantity: 3
    }
]);
const screwdriverSetId = tools.insertedIds[0];
const multimeterId = tools.insertedIds[1];

const parts = inventoryDb.part.insertMany([
    {
        manufacturer: "Samsung",
        type: "Screen",
        reference: "SCR123",
        description: "OLED Screen for Galaxy S21",
        price: 150,
        stockQuantity: 10
    },
    {
        manufacturer: "Apple",
        type: "Battery",
        reference: "BAT456",
        description: "Replacement Battery for iPhone 12",
        price: 80,
        stockQuantity: 20
    }
]);
const screenPartId = parts.insertedIds[0];
const batteryPartId = parts.insertedIds[1];
print("Inventory database seeded successfully!");


const repairDb = connectToDatabase('repair-db');
repairDb.device.deleteMany({});
repairDb.repairorder.deleteMany({});
const devices = repairDb.device.insertMany([
    {
        type: "Smartphone",
        brand: "Samsung",
        model: "Galaxy S21",
        serialNumber: "SN123456",
        repairOrders: []
    },
    {
        type: "Laptop",
        brand: "Apple",
        model: "MacBook Pro",
        serialNumber: "SN789012",
        repairOrders: []
    }
]);
const galaxyS21Id = devices.insertedIds[0];
const macBookProId = devices.insertedIds[1];

const repairOrders = repairDb.repairorder.insertMany([
    {
        description: "Screen replacement for Galaxy S21",
        status: "PENDING",
        customer: aliceJohnsonId,
        technician: johnDoeId,
        device: galaxyS21Id,
        billing: "",
        repairOrderParts: [screenPartId]
    },
    {
        description: "Battery replacement for iPhone 12",
        status: "IN_PROGRESS",
        customer: bobBrownId,
        technician: janeSmithId,
        device: macBookProId,
        billing: "",
        repairOrderParts: [batteryPartId]
    }
]);
const screenRepairOrderId = repairOrders.insertedIds[0];
const batteryRepairOrderId = repairOrders.insertedIds[1];
print("Repair database seeded successfully!");


const billDb = connectToDatabase('bill-db');
billDb.bill.deleteMany({});
const bills = billDb.bill.insertMany([
    {
        repairOrder: screenRepairOrderId,
        totalAmount: NumberDecimal("150.00"),
        paymentStatus: "PENDING",
        paymentDate: null
    },
    {
        repairOrder: batteryRepairOrderId,
        totalAmount: NumberDecimal("80.00"),
        paymentStatus: "PENDING",
        paymentDate: null
    }
]);
const screenRepairBillId = bills.insertedIds[0];
const batteryRepairBillId = bills.insertedIds[1];


repairDb.repairorder.updateOne(
    { _id: screenRepairOrderId },
    { $set: { billing: screenRepairBillId } }
);
repairDb.repairorder.updateOne(
    { _id: batteryRepairOrderId },
    { $set: { billing: batteryRepairBillId } }
);
print("Bill database seeded successfully!");