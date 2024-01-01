const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./app/models/index');

dotenv.config();
const app = express();
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { url } = require('./config/db.config');

db.mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("database connected successfully");
    })
    .catch((err) => {
        console.log("error connect to database", err);
        process.exit();
    });

const port = process.env.PORT || 3000;
const host = 'localhost';

app.get('/', (req, res) => {
    res.json({
        message: "hallo world"
    });
});

require('./app/routes/posts.routes')(app)

app.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
});
