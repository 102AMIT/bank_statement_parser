const express =require('express');
const PORT=8000;
const app=express();





app.listen(PORT,function(err){
    if(err){
        console.log(`Error in Server Running `);
    }
    console.log(`Server Running On PORT : ${PORT}`);
    
})