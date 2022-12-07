const pdf=require('../model/pdf_upload');


// render in home page of ejs. in csvList
module.exports.homePage=function(req,res){
    pdf.find({},function(err,docs){
        if(err){
            console.log("Error ! ...",err);
            return;
        }


        return res.render('font-page',{
            pdflist: docs
            
        });
    });
}