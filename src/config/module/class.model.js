const mongoose = require('mongoose');   

const classSchema =  new mongoose.Schema(
    {
        info_ingles: String,
        pronuncia: String,
        traducao: String,
        imagem: String,
        categoria: String
    },
    { 
        timestamps: true 
    }
);

const classModel = mongoose.model('classes', classSchema);

module.exports =  {classModel};