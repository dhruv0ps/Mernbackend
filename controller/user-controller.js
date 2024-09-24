const { response, request } = require('express');
const File = require('../model/file.js');
require('dotenv').config();
// user-controller.js

const uploadImage = async (req, response) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    };

    try {
        const file = await File.create(fileObj);
        response.status(200).json({ path: `${process.env.BASE_URL}/file/${file._id}` });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};

const downloadImage = async (req, response) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadContent++;

        await file.save();
        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ error: error.message });
    }
};

module.exports = {
    uploadImage,
    downloadImage
};
