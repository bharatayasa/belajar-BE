const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const db = require('./app/models/index')

dotenv.config();
const app = express(); 
const corsOption = {
    origin : '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}

app.use(cors(corsOption));
app.use(express.json());

const mongooseConfig = {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex:true,
    useUnifiedTopology: true
};

// konek ke database
db.mongoose.connect(db, url, mongooseConfig)

app.get('/', (req, res) => {
    res.json({
        message: "server berjalan"
    }); 
})

const port = process.env.PORT || 3000;
const host = 'localhost'; 

app.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
})
