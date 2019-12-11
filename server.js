let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');
var cron = require('node-cron');
let path = require('path');
let http = require('http');
let app = express();
app.use(express.static(__dirname+'/dist/frontend'));
app.get('*',(req,res)=>{ return res.sendFile(path.join(__dirname,'/dist/frontend/index.html'))});
const server=http.createServer(app);
app.use(cors());
app.use(bodyparser.json());

//  Add Member
app.post('/addMember',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.addMembers(req,res);
})
//    Login
app.post('/login1',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.login(req,res);
})
// fetch Direct
app.get('/fetchDirect/:sponser',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.fetchDirect(req,res);
})
//     Fetch Name
app.get('/fetchName/:mobile',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.fetchName(req,res);
})
//      Fetch Team
app.get('/fetchTeam/:mobile',(req,res)=>{
    var conn = require('./backend/controllers/controller');
    conn.fetchTeam(req,res);
})
server.listen(process.env.PORT||1234,()=>{
    console.log("Running at localhost 1234")
})