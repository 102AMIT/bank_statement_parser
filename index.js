const bodyParser = require('body-parser');
const express =require('express');
const PORT=8000;
const app=express();
const db=require('./config/mongoose');


app.use('/images', express.static(__dirname + '/uploads'));
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