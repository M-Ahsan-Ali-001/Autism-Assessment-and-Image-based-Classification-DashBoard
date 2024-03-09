const mongoose = require('mongoose')

var Employee = mongoose.model('models',{

score : {type :Number }, 

user_id : {type :String }, 
date : {type :Date }, 

})

module.exports = {Employee}