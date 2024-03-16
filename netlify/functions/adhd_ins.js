const mongoose = require('mongoose');
const { Employee } = require('../../backend/Schemas/adhd_ins_schema.js');
const mongoURI = "mongodb+srv://admin:admin123@atlascluster.f9crw3i.mongodb.net/usersDB";

exports.handler = async function(event, context) {
    // DB connection
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {

console.log("+++++++",event.body.email)
        let jsonObj ={score:JSON.parse(event.body).score,user_id:JSON.parse(event.body).id,date:JSON.parse(event.body).date,state:JSON.parse(event.body).state}

        const docs = await Employee.collection.insertOne(jsonObj)
        return {
            statusCode: 200,
            body: "Record Added!",
            headers: {
                'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
    } catch (err) {
        console.log("===mail====",JSON.parse(event.body).email)
        console.log('error', err);
        return {
            statusCode: 200,
            body: "Error Adding Record !",
            headers: {
                'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
    }
};
