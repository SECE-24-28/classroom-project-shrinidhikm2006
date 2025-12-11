const express=require('express');
const app=express();
const exhbs=require('express-handlebars');
const bodyParser=require('body-parser');
const dbo=require('./db')
let msg='test'
app.engine('hbs',exhbs.engine(
    {
        layoutsDir:'viewsfound/',
        defaultLayout:"main",
        extname:"hbs"
    }
))

app.set('view engine','hbs');
app.set('views','viewsfound');

app.use(bodyParser.urlencoded({extended:true}));

//app.get('/',(req,res)=>{

//res.render('main',{msg});
//})



app.post('/store_book',async(req,res)=>{
    let database=await dbo.getDataBase();
    const collection=database.collection('books');
    let bookdata={
        title:req.body.title,author:req.body.author};
    await collection.insertOne(bookdata);
      return res.redirect('/?status=1');
})
app.get('/',async(req,res)=>{
 let database=await dbo.getDataBase();
 const collection=database.collection('books');
 const cursor=collection.find({});
 let mydata=await cursor.toArray();
 switch(req.query.status){
    case '1':
        msg='Book added successfully';
        break;
    case '2':
        msg='Book deleted successfully';    
        break;  
 }
    res.render('main',{msg,mydata});
    })
app.listen(8000,()=>{
   console.log('in port 8000');
})