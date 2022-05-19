const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://dylan:dylan123@cluster0.8gsr3.mongodb.net/rent-wheels', {useUnifiedTopology: true, useNewUrlParser: true})

    const connection = mongoose.connection
    connection.on('connected', ()=>{
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error', ()=>{
        console.log('Mongo DB Connection Error')
    })
}

connectDB();

module.exports = mongoose;
