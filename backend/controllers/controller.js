// let ifsc = require('ifsc');

let member = require('../model/member');
let earning = require('../model/earning')
let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/rib",{userNewUrlParser: true},(err)=>{
    if(err) throw err
    else{
        console.log("connected to Rising India database")
    }
})

module.exports={
    //  Add Members
    addMembers:function(req,res){
        var g = '1'
        var name = req.body.name
        let Mobile = req.body.mobile 
        var email = req.body.email
        var password = req.body.password
        var city = req.body.city
        var state = req.body.state
        var address = req.body.address
        let pincode = req.body.pincode
        var sponserId = req.body.sponserId
        var sponserName = req.body.sponserName
        let aadhar = req.body.aadhar
        var pan = req.body.pan
        var accName = req.body.accName
        let accNo = req.body.accNo
        var ifsc = req.body.ifsc
        let directNo = '0'
        let level = '0'
        member.findOne({'mobile':Mobile},(err,data)=>{
            if(err) throw err
            else if(!data || data.length == 0 ){
                member.findOne({'email':email},(err,data1)=>{
                    if(err) throw err
                    else if(!data1 || data1.length == 0){
                        member.findOne({'mobile':sponserId},(err,data4)=>{
                            if(err) throw err
                            else{
                                let ansectors = data4.ancestors
                                console.log(ansectors)
                                let ins = new member({'name':name,'mobile':Mobile,'email':email,'password':password,'city':city,
                                'state':state,'address':address,'pincode':pincode,'sponserId':sponserId,'sponserName':sponserName,
                                'ancestors':ansectors,'aadhar':aadhar,'pan':pan,'accName':accName,'accNo':accNo,'ifsc':ifsc,'directNo':directNo,'level':level});
                                ins.save((err,data3)=>{
                                 if(err) throw err
                                 else{
                                    let sponserer = data3.directNo;
                                     member.updateOne({'mobile':sponserer},{$inc: {'directNo':1}},(err,data2)=>{
                                    if(err) throw err
                                    else if(!data2 || data2.length == 0){
                                    }
                                    else{
                                        member.updateOne({'mobile':Mobile},{$addToSet: {'ancestors':[sponserId]}},(err,data5)=>{
                                            if(err) throw err
                                            else{
                                                let ins1 = new earning({'name':name,'mobile':Mobile});
                                                ins1.save((err)=>{
                                                    if(err) throw err
                                                    else{
                                                        res.json({'msg':'done'});

                                                    }
                                                }) 
                                            }
                                        })
                                    }
                                     })
                                 }
                            })
                            }
                        })
                    }
                })
            }
            else{
                console.log('no')
            }
        })
    },
    //   Login 
    login:function(req,res){
        let mobile = req.body.mobile
        var pass = req.body.password
        console.log('login');
        member.findOne({'mobile':mobile,'password':pass},(err,data)=>{
            if(err) throw err
            else if(!data || data.length == 0){
                res.json({'err':1,'msg':'Invalid userId Or password'});
            }
            else{
                res.json({'err':0,'msg':'Login Successfull',data})
            }
        })
    },
    //  fetch Direct
    fetchDirect:function(req,res){
        let sponserId = req.params.sponser
        member.find({'sponserId':sponserId},(err,data)=>{
            if(err) throw err
            else if(!data || data.length == 0){
                res.json({'err':1,'msg':'no data'})
            }
            else{
                res.json(data);
            }
        })
    },
    //   fetch  Name
    fetchName:function(req,res){
        let mobile = req.params.mobile
        member.findOne({'mobile':mobile},(err,data)=>{
            if(err) throw err
            else{
                res.json(data);
            }
        })
    },
    //      Fetch Team
    fetchTeam:function(req,res){
        let mobile = req.params.mobile
        member.find({'ancestors':mobile},(err,data)=>{
            if(err) throw err
            else{
                res.json(data);
            }
        })
    }
}