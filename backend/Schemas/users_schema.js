const mongoose = require('mongoose')

var Employee = mongoose.model('users',{
    _id:{type:Object},
email : {type :String},
date : {type :String},  
country:{type :String},
})

module.exports = {Employee}
