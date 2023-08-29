
const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log('DB is connected successfully')})
    .catch((error) => {
        console.log('Connection is not successful');
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbconnect;