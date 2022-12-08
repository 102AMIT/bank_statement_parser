const express=require('express');
const router=express.Router();
const homeController=require('../controller/home');
const pdfupload=require('../controller/pdf');

router.get('/',homeController.homePage);

router.get('/:id/read',pdfupload.readPdf);

router.post('/upload/pdf',pdfupload.create)

router.get('/:id/delete',pdfupload.delete);


module.exports=router;