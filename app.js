const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
    res.send('server berjalan'); 
})

const port = 3000; 
const host = 'localhost'; 

app.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
})
