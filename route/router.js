// router file
const express = require('express');

const upload = require('../util/upload.js')

const router = express.Router();
const { uploadImage, downloadImage } = require('../controller/user-controller.js');
router.post('/upload', upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage);

module.exports = router;

