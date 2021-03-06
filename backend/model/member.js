let mongoose = require('mongoose')

module.exports=mongoose.model('member',{
    userId:{
        type:String
    },
    name:{
        type:String
    },
    mobile:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    address:{
        type:String
    },
    pincode:{
        type:Number
    },
    sponserId:{
        type:String
    },
    sponserName:{
        type:String
   },
   aadhar:{
       type:Number
   },
   pan:{
       type:String
   },
   accName:{
       type:String
   },
   accNo:{
       type:Number
   },
   ifsc:{
       type:String
   },
   directNo:{
       type:Number
   },
   status:{
       type:String,
       'default':'Inactive'
   },
   level:{
       type:Number
   },
   companyLevel:{
       type:Number
   },
   joiningDate:{
       type:Date,
       'default':Date()
   },
   ancestors:[],
   package:{
       type:String
   }
})