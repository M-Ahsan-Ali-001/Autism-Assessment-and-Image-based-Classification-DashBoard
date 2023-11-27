const mongoose = require('mongoose')

var Employee = mongoose.model('adhd_',{
    _id:{type:Object},
result_score : {type :Number }, 

})

module.exports = {Employee}