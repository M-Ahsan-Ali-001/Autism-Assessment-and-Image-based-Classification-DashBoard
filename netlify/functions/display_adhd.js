const mongoose = require('mongoose');

const {   Employee } =  require('../../backend/Schemas/adhd_ins_schema.js');
const mongoURI = "mongodb+srv://admin:admin123@atlascluster.f9crw3i.mongodb.net/usersDB";


exports.handler = async function(event, context) {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        let id = JSON.parse(event.body).id;
        console.log("asdasdasd", id);

        const doc = await Employee.collection.find({ user_id: id }).toArray();
        if (doc) {
            console.log("@*******", doc);

            return {
                statusCode: 200,
                body: JSON.stringify(doc),
                headers: {
                    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
                    'Access-Control-Allow-Headers': 'Content-Type', // Specify allowed headers
                }
            };
        } else {
            return {
                statusCode: 200,
                body: "Error!",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            };
        }
    } catch (err) {
        return {
            statusCode: 200,
            body: JSON.stringify({ error: err.message }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        };
    }
};
