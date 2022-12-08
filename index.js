require('dotenv').config();
const bodyParser = require('body-parser');
const express =require('express');
const app=express();
const port=process.env.PORT || 8000;
const db=require('./config/mongoose');



// for parsing the data 
app.use(bodyParser.urlencoded({extended:true}));

// Set up for template engine 
app.set('view engine','ejs');
app.set('views','./views')

// this is for routes 
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`Error in Server Running `);
    }
    console.log(`Server Running On PORT : ${port}`);
    
})