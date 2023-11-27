const mongoose = require('mongoose')

var Employee = mongoose.model('aq_10',{
    _id:{type:Object},
result_score : {type :Number }, 

})

module.exports = {Employee}