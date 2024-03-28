const mongoose = require("mongoose"); // importing header files
const mongoURI = "mongodb+srv://ASD_DB_user:USERtest1@atlascluster.gcltstq.mongodb.net/"; //network address 

const connectToMongo = async () => { //asynronus function to connect
  try {
    mongoose.set("strictQuery", false);  //allow flexibility in queries
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!!!!");
  } catch (error) {
    console.log(error);
  }
};
connectToMongo();
module.exports = connectToMongo;