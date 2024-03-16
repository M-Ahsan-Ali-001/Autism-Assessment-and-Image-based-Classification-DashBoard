const mongoose = require('mongoose')

var Employee = mongoose.model('aq_10',{

score : {type :Number }, 

user_id : {type :String }, 
date : {type :Date }, 
 state : {type :Number },  

})

module.exports = {Employee}
