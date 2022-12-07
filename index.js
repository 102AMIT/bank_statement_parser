const bodyParser = require('body-parser');
const express =require('express');
const PORT=8000;
const app=express();
const db=require('./config/mongoose');


// const path=require('path');
// const data={url: "mongodb://localhost/",
//   database: "pdfConverter",
//   named:'pdf-uploads'

// }
// app.use('upload/pdf',express.static(__dirname+ data.url+data.database+data.named));

// for parsing the data 
app.use(bodyParser.urlencoded({extended:true}));

// Set up for template engine 
app.set('view engine','ejs');
app.set('views','./views')

// this is for routes 
app.use('/',require('./routes'));



app.listen(PORT,function(err){
    if(err){
        console.log(`Error in Server Running `);
    }
    console.log(`Server Running On PORT : ${PORT}`);
    
})