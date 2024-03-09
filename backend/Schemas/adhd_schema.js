const mongoose = require('mongoose')

var Employee = mongoose.model('adhd',{
    user_id:{type:Object},
score : {type :Number }, 

})

module.exports = {Employee}