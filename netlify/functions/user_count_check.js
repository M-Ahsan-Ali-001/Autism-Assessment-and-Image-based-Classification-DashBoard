const mongoose = require('mongoose');
const { Employee } = require('../../backend/Schemas/users_schema.js');
const mongoURI = "mongodb+srv://admin:admin123@atlascluster.f9crw3i.mongodb.net/usersDB";

exports.handler = async function(event, context) {
    // DB connection
 
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
                console.log("bodsy::::",event.body)
    const country=  event.body.country
     const docs =  await Employee.collection.updateOne({_id:id } , {$set:{country:country}});

    if(JSON.parse(event.body).password === "___*79"){
        return {
            statusCode: 200,
            body:  JSON.stringify(docs),
            headers: {
                'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
                }
           
        };
    } 
    else{
        return{

            statusCode: 200,
            body: JSON.stringify("Access Denied !"),
             headers: {
                'Access-Control-Allow-Origin': '*', // replace '*' with your originpubl
                'Access-Control-Allow-Headers': 'Content-Type'
                }
    }
    }
    
    } catch (err) {
        console.log('error', err);
        return {
            statusCode: 200,
            body: JSON.stringify('Internal Server Error'),
            headers: {
                'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
    }
};
