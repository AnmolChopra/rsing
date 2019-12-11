let mongoose = require('mongoose');

module.exports = mongoose.model('earning',{
    name :{
        type:String
    },
    mobile:{
        type:Number
    },
    totalEarning:{
        type:Number
    },
    todaysEarning:{
        type:Number
    },
    tatalCashback:{
        type:Number
    },
    todayCashbask:{
        type:Number
    },
    walletBalance:{
        type:Number
    }
})