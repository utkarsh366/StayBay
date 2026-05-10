//Server is running here....
const express  = require('express')
const  mongoose  = require('mongoose')
const { MONGO_URI } = require("./keys");
const userRoutes = require('./routes/userRoutes')
const hostelRoutes = require('./routes/hostel')
const orderRoutes = require('./routes/orderRoute')
const cors = require('cors')

const app = express()
if (process.env.NODE_ENV === 'test') {
  const { MongoMemoryServer } = require('mongodb-memory-server');
  MongoMemoryServer.create().then((mongoServer) => {
    mongoose.connect(mongoServer.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log("Mock mongodb is connected");
      // Seed data if needed
      const fs = require('fs');
      const Hostel = require('./models/Hostel');
      const seedData = JSON.parse(fs.readFileSync('./mongodb.json', 'utf-8'));
      Hostel.insertMany(seedData).then(() => console.log('Mock Data Seeded')).catch(e => console.log(e));
    });
  });
} else {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on("connected", () => {
    console.log("mongodb is connected");
  });
}


app.use(express.json())
app.use(cors());

app.use('/api/users', userRoutes)
app.use('/api/hostels', hostelRoutes)
app.use('/api/orders', orderRoutes)




const PORT = process.env.PORT || 5000
//App listing at port 
app.listen(
  PORT,
  () => console.log(
    "it is working and running at " + PORT + "......"
  )
);
