const mongoose=require('mongoose');

// Schema of the object 
const pdfSchema=new mongoose.Schema({
    file_name:{
        type: String
    },
   
});


const FilePdf = mongoose.model('PDF-Upload', pdfSchema);
module.exports = FilePdf;