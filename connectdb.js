const mongoose = require('mongoose')

async function connect() {
    try {

        await mongoose.connect('mongodb://localhost:27017/E-commerce')

        console.log('db connected');

    } catch (error) {

        console.log('error while connecting to db');

    }

}
module.exports = connect