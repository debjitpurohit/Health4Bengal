
var express = require("express")
var bodyParser = require("body-parser")
const mongoose = require("mongoose")
const port = process.env.PORT || 5000;

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

// mongoose.connect('mongodb+srv://debjitpurohit:Debjit8125@clusterdebjit.4n2ytuc.mongodb.net/debjitdata?retryWrites=true&w=majority',{
// // mongoose.connect('mongodb://localhost:27017/devsemployee',{
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     //useCreateIndex: true not use in this version
// //   }).then(()=>{
// //     console.log('Connection Successful......');
// //   }).catch((e)=>{
// //     console.log('No Connection');
// //   });
// //   var db = mongoose.connection;
mongoose.connect('mongodb+srv://debjitpurohit:Debjit8125@clusterdebjit.4n2ytuc.mongodb.net/debjitdata?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true not use in this version
  }).then(()=>{
    console.log('Connection Successful......');
  }).catch((e)=>{
    console.log('No Connection');
  });
 var db = mongoose.connection;




app.post("/sign_up",(req,res)=>{
    var email = req.body.phno;
    var password = req.body.password;

    var data = {
        "phno" : email,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('indexd.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('login.html');
});
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})