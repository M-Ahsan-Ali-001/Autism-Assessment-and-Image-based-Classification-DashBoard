const mongoose = require('mongoose')

var Employee = mongoose.model('aq_10',{

score : {type :Number }, 

user_id : {type :String }, 

})

module.exports = {Employee}