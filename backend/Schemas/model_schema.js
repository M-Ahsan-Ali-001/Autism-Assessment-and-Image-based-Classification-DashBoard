const mongoose = require('mongoose')

var Employee = mongoose.model('model',{
    _id:{type:Object},
model_score : {type :Number }, 

})

module.exports = {Employee}