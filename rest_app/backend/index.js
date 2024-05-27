// backend/index.js
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connection URI
const uri = 'mongodb://localhost:27017/'; // default MongoDB port
const dbName = 'Rest_App';
const collectionName = 'products';

async function connectToDatabase() {
    const client = new MongoClient(uri);
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB');

        return client.db(dbName).collection(collectionName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

app.get('/products', async (req, res) => {
    try {
        const collection = await connectToDatabase();
        const products = await collection.find({}).toArray();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const collection = await connectToDatabase();
        const product = await collection.findOne({ id: parseInt(req.params.id) });
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
