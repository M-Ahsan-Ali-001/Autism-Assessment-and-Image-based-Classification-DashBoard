const mongoose = require('mongoose');

const {   Employee } =  require('../../backend/Schemas/aq_10_ins_schema.js');
const mongoURI = "mongodb+srv://admin:admin123@atlascluster.f9crw3i.mongodb.net/usersDB";

exports.handler = async function(event, context) {


  

    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  try{

    let id = JSON.parse(event.body).id
    console.log("asdasdasd",id)

    const doc =await Employee.collection.find({user_id:id}).toArray();
      if(doc){
        console.log("@*******",doc);


  
      }
     

      return {
        statusCode: 200,
        body: JSON.stringify(doc),
              headers: {
                'Access-Control-Allow-Origin': '*',
              }
    };

  }

  catch(err){
    return {
        statusCode: 200,
        body: err,
        headers: {
            'Access-Control-Allow-Origin': '*', // replace '*' with your origin
            'Access-Control-Allow-Headers': 'Content-Type',
    
        }
    };

  }
  
  };
