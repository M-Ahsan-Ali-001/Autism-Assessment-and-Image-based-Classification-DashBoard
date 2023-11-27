const mongoose = require('mongoose');
const { Employee } = require('../../backend/Schemas/users_schema.js');
const mongoURI = "";

exports.handler = async function(event, context) {
    // DB connection
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        const docs = await Employee.find().exec();
        return {
            statusCode: 200,
            body: JSON.stringify(docs),
            headers: {
                'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
    } catch (err) {
        console.log('error', err);
        return {
            statusCode: 500,
            body: 'Internal Server Error',
            headers: {
                'Access-Control-Allow-Origin': '*', // replace '*' with your origin
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
    }
};
