const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log(' Database Connected succesfully');

        await db.sequelize.sync({ alter: true });
        console.log(' Database synchronized');

    } catch (err) {
        console.error(' Databse connection failed ', err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;