const express =require('express');
const PORT=8000;
const app=express();
const db=require('./config/mongoose');



app.set('view engine','ejs');
app.set('views','./views')

app.use('/',require('./routes'));



app.listen(PORT,function(err){
    if(err){
        console.log(`Error in Server Running `);
    }
    console.log(`Server Running On PORT : ${PORT}`);
    
})