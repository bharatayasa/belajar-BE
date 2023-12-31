const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/laundry_db';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function conn() {
    try {
        await client.connect();
        console.log('Terhubung ke MongoDB');
        return client.db();
    } catch (error) {
        console.error('Gagal terhubung ke MongoDB:', error);
        throw error;
    }
}

module.exports = conn;
