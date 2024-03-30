const mongoose = require('mongoose')

var Employee = mongoose.model('use_time',{


user_id : {type :String }, 
date : {type :Date }, 
 time : {type :Number },  

})

module.exports = {Employee}
