const pdfSchema=require('../model/pdf_upload');
const pdfmulter=require('../config/multer');
const fs = require('fs');
const pdf = require('pdf-parse');
const path=require('path');





// Create the file and store in Database 
module.exports.create = function (req, res) {
  
  try{
// are we are using uploadedPDF for single file upload
    pdfmulter.uploadedPDF(req, res, function(err){
      if(err){
        console.log('Error ! In Multer ...', err)
        return res.send(`<h3>Not a pdf File! please go back and  select a pdf file then upload</h3>`);
      }
      if(req.file){
      // console.log(req.file);

        // create and Store the file in dataBase 
        pdfSchema.create({file_name: req.file.filename});
      }

      return res.redirect('back');
  });

  }catch(err){
      console.log("Error ! ...",err);
      return res.redirect('back');
  }

}



module.exports.readPdf=function(req,res){
    
      
      // finding the data in pdfSchema means Data Base 
      pdfSchema.findById(req.params.id,function(err,docs){
        if(err){
          console.log("Error ! ....",err);
          return;
        }
        // here we are joining the path and store in coolPath
        const coolPath = path.join(__dirname ,'..' ,'/pdf_file/'+docs.file_name);
        
        
        
        let dataBuffer = fs.readFileSync(coolPath);
        
        pdf(dataBuffer).then(function(data) {
           
            res.render('table',{
                headers:data.text
            })
           
        });
       


  
    });
      
  }



  // delete pdf file

module.exports.delete= async function(req,res){
    const file=await pdfSchema.findByIdAndDelete(req.params.id);
    
      if(file){
        return res.redirect('back')
      }else{
        console.log("error in deleting file from database");
        
      }
  }