import express from 'express';
import mongoose from 'mongoose';
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/item', {

        });
        console.log('Database connected successfully');

    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);

    }
}
dbConnection();
const dummyProducts = [
    { name: "Wrench Set", price: 1200, category: "Tools", inStock: true, tags: ["plumbing", "metal"], createdAt: new Date() },
    { name: "AC Gas Refill", price: 1500, category: "AC Repair", inStock: true, tags: ["cooling", "maintenance"], createdAt: new Date() },
    { name: "Motherboard Replacement", price: 3500, category: "PC Repair", inStock: false, tags: ["hardware", "tech"], createdAt: new Date() },
    { name: "Pipe Cutter", price: 800, category: "Tools", inStock: true, tags: ["plumbing", "cutting"], createdAt: new Date() },
    { name: "Keyboard Cleaning Kit", price: 400, category: "PC Repair", inStock: true, tags: ["cleaning", "accessories"], createdAt: new Date() },
    { name: "Washing Machine Fix", price: 2000, category: "Appliance Repair", inStock: false, tags: ["laundry", "repair"], createdAt: new Date() },
    { name: "Voltage Stabilizer", price: 2500, category: "Electronics", inStock: true, tags: ["electric", "stabilizer"], createdAt: new Date() },
    { name: "Leak Detector", price: 900, category: "Tools", inStock: true, tags: ["gas", "safety"], createdAt: new Date() },
    { name: "Cooling Coil Replacement", price: 3200, category: "AC Repair", inStock: false, tags: ["cooling", "coil"], createdAt: new Date() },
    { name: "Laptop Screen Repair", price: 5000, category: "PC Repair", inStock: true, tags: ["screen", "display"], createdAt: new Date() },
    { name: "Pipe Wrench", price: 650, category: "Tools", inStock: true, tags: ["grip", "metal"], createdAt: new Date() },
    { name: "Air Filter", price: 700, category: "AC Repair", inStock: true, tags: ["filter", "dust"], createdAt: new Date() },
    { name: "RAM Upgrade", price: 1800, category: "PC Repair", inStock: false, tags: ["memory", "speed"], createdAt: new Date() },
    { name: "Drain Cleaner", price: 300, category: "Tools", inStock: true, tags: ["plumbing", "cleaning"], createdAt: new Date() },
    { name: "Window AC Servicing", price: 1400, category: "AC Repair", inStock: true, tags: ["servicing", "AC"], createdAt: new Date() },
    { name: "Thermal Paste", price: 200, category: "PC Repair", inStock: true, tags: ["cooling", "CPU"], createdAt: new Date() },
    { name: "Water Pump Motor", price: 2800, category: "Plumbing", inStock: true, tags: ["motor", "water"], createdAt: new Date() },
    { name: "Circuit Board Fix", price: 4200, category: "Electronics", inStock: false, tags: ["repair", "circuit"], createdAt: new Date() },
    { name: "Gas Regulator", price: 1000, category: "Tools", inStock: true, tags: ["safety", "kitchen"], createdAt: new Date() },
    { name: "Fan Capacitor", price: 300, category: "Electronics", inStock: true, tags: ["fan", "electric"], createdAt: new Date() },
    { name: "Drain Snake", price: 600, category: "Tools", inStock: false, tags: ["cleaning", "drain"], createdAt: new Date() },
    { name: "Split AC Servicing", price: 1600, category: "AC Repair", inStock: true, tags: ["cooling", "AC"], createdAt: new Date() },
    { name: "SSD Upgrade", price: 4000, category: "PC Repair", inStock: true, tags: ["storage", "performance"], createdAt: new Date() },
    { name: "Screwdriver Set", price: 500, category: "Tools", inStock: true, tags: ["repair", "multi-tool"], createdAt: new Date() },
    { name: "Hose Pipe", price: 350, category: "Plumbing", inStock: true, tags: ["pipe", "water"], createdAt: new Date() },
    { name: "Power Supply Unit", price: 3200, category: "PC Repair", inStock: false, tags: ["PSU", "hardware"], createdAt: new Date() },
    { name: "Window Kit", price: 700, category: "AC Repair", inStock: true, tags: ["installation", "kit"], createdAt: new Date() },
    { name: "Network Card", price: 1200, category: "PC Repair", inStock: true, tags: ["network", "LAN"], createdAt: new Date() },
    { name: "Soldering Kit", price: 1100, category: "Tools", inStock: true, tags: ["electronics", "repair"], createdAt: new Date() },
    { name: "Pipe Sealant", price: 250, category: "Plumbing", inStock: true, tags: ["seal", "leakproof"], createdAt: new Date() },
];


const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    inStock: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
});
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

// try {
//     await Product.insertMany(dummyProducts)
// } catch (error) {
//     console.error('Error inserting dummy products:', error);

// }


app.get('/', (req, res) => {
    res.send('Hello, World!');
}
);

app.get('/products', async (req, res) => {
    try {
        const result = await Product.aggregate([
            // {
            //     $match: {
            //         inStock: false,
            //         price: { $gte: 2001 }
            //     }
            // },
            // {
            //     $group:{
            //         _id:"$category",
            //         avgPrice :{ $avg: "$price" },
            //         totalProducts: { $sum: 1 },
            //     }
            // }
            {
                $match: {
                    category: "AC Repair",
                }
            },
            {
                $group:{
                    _id: null,
                    totalRevenue: { $sum: "$price" },
                    totalProducts: { $sum: 1 },
                    avgPrice: { $avg: "$price" },
                    maxPrice: { $max: "$price" },
                    minPrice: { $min: "$price" },
                }
            }
            ,{

                $project: {
                    _id: 0,
                    totalRevenue: 1,
                    totalProducts: 1,
                    avgPrice: 1,
                    maxPrice: 1,
                    minPrice: 1,
                    priceRange:{
                        $subtract: ["$maxPrice", "$minPrice"]
                    }
                }
            }



        ])
        res.status(200).json(result);

    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})       