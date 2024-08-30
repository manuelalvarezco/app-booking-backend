require('dotenv').config();
const mongoose = require('mongoose');

const dbConect = async () => {
  try {
    console.log('process.env.MONGODB_CDN', process.env.MONGODB_CDN);

    await mongoose.connect(process.env.MONGODB_CDN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de datos online');
  } catch (error) {
    console.error(error);
    console.log('Error al conectarse a la base de datos');
  }
};

async function dbConnection() {
  await dbConect();
}

module.exports = dbConnection;
