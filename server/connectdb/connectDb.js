const mongoose = require('mongoose');

const connect_db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to database");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect_db