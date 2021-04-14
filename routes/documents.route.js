let express = require('express');
let router = express.Router();

const DocumentController = require('../controllers/documents.controller');

router.post('/convert',DocumentController.convert_md);

module.exports = router;