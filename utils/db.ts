import mongoose from 'mongoose';

const connection = {
  isConnected: 0
};

async function connect() {
  if (connection.isConnected) {
    console.log('Already connected to MongoDB Atlas');
    return;
  }

  try {
    const db = await mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true // You should include this option for MongoDB Node.js driver v3.x
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
  }
}

export { connect };
