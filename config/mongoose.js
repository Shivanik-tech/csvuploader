const mongoose = require('mongoose');
require('dotenv').config();
const database = process.env.DB_URL
mongoose.connect('mongodb+srv://shivanikri:shivani123@cluster0.4kjcztu.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4,
});
const db = mongoose.connection;
db.on('error',console.error.bind(console, "Error connection to mongodb"));
db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});
module.exports = db;