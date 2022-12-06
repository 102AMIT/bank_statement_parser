const express =require('express');
const PORT=8000;
const app=express();
const db=require('./config/mongoose');

app.get('/',(req,res)=>{
    res.end('<h1>hello</h1>')
})
// app.use('/',require('./routes'));



app.listen(PORT,function(err){
    if(err){
        console.log(`Error in Server Running `);
    }
    console.log(`Server Running On PORT : ${PORT}`);
    
})