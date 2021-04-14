const  { mdToPdf }  = require('md-to-pdf');
const fs = require("fs");

class DocumentController {
  convert_md = async (req, res) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    try {
      if(typeof req.body.content == 'undefined' || req.body.content == null) {
          res.status(400).json({error: "No data found"});
      } else {
        let content = req.body.content;
        let pdf = await mdToPdf({ content: content }, { dest: 'converted.pdf' });

        res.download( pdf.filename, pdf.filename, (err) => {
          if (err) {
            res.status(500).send({
              message: "Could not download the file. " + err,
            });
          }
          fs.unlink(pdf.filename, function(){
            console.log("File is deleted after sent response")
        });

        });

      }
    } catch (error) {
      res.status(400).json({error : error});
    }
  }
}


module.exports = new DocumentController;