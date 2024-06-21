const mongoose = require('mongoose');
const { Employee } = require('../../backend/Schemas/users_schema.js');
const mongoURI = "mongodb+srv://admin:admin123@atlascluster.f9crw3i.mongodb.net/usersDB";
const { ObjectId } = require('mongodb');
exports.handler = async function(event, context) {
    // DB connection
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  try{

    console.log("+++++asdasdasd",(event.body))
    const body = JSON.parse(event.body)
    const id= new ObjectId(body.id)
    console.log(id);
   // const email= new (body.email)
    
    const country= body.country
    let update= "!" 




    await Employee.collection.updateOne({_id:body.id } , {$set:{country:country}} ,function(err,reslt){

        if (err) throw err;
        console.log("_)_",reslt);
        update=reslt;

        if(reslt.modifiedCount > 1){

            return {
                statusCode: 200,
                body: JSON.stringify("Deleted"),
                headers: {
                    'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                    'Access-Control-Allow-Headers': 'Content-Type',
                 
                }
            }

        }
        else{


            return {
                statusCode: 200,
                body: JSON.stringify("Wrong ID!"),
                headers: {
                    'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                    'Access-Control-Allow-Headers': 'Content-Type',
                 
                }
            }
        }
    


    })
     


   return{
    statusCode: 200,
                body: JSON.stringify(update),
   }
    

  }

  catch(err){

    console.log("__error___",err)
    return {
        statusCode: 200,
        
        body:'erroe',
        headers: {
            'Access-Control-Allow-Origin': '*', // replace '*' with your origin
            'Access-Control-Allow-Headers': 'Content-Type',
    
        }
    };

  }
  
  };
