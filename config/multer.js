const multer = require('multer');
const path=require('path');
		
// For Multer Storage

// define the path of the database 
const data={url: "mongodb://localhost/",
  database: "pdfConverter",
  named:'pdf-uploads'
}
var multerStorage = multer.diskStorage(data,{
  // Here we set the destination where our file is displayed 
  
  destination: function (req, file, callback) {
    callback(null,  data);
  },
  // Set the file for Db with current date +File name it's diaplay in our dataBase 
  filename: function (req, file, callback) {
    callback(null, new Date().toISOString() + file.originalname);
  }
});


// For Single File upload
var multerSigleUpload = multer({ 
  // here we are store the file in storage with filter the file becasue we only need the csv file and store in fileFilter
    storage: multerStorage,
    fileFilter: (req, file, cb) => {
    console.log(file.originalname)
    var ext = path.extname(file.originalname);
    if(ext !== '.pdf') {
        return cb(new Error('Only pdf File Allowed'));
    }
    // I want next function to validate real ext of files here. 
    cb(null, true);
    
       
    }
});
// upload a sigle file by using single function and pass the filename
module.exports.uploadedPDF = multerSigleUpload.single('filename');