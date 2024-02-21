// const { connectToMongo } = require('./../config/connect/connect');
const { classModel } = require('./../config/module/class.model');

// connectToMongo();

createClass = async (req, res) =>{
    if (!req.body.info_ingles){
        return res.status(400).json({ message: "O campo Info e obrigtório"})   
    }
    if (!req.body.pronuncia){
        return res.status(400).json({ message: "O campo Pronuncia e obrigtório"})   
    }
    if (!req.body.categoria){
        return res.status(400).json({ message: "O campo Categoria e obrigtório"})   
    }

    const classExisente = await classModel.find({ info_ingles: req.body.info_ingles});
    if (classExisente.length) {
        return res.status(200).json({ message:"Livro ou ID Exisente"});
    }

    const classe = await classModel.create({
        info_ingles: req.body.info_ingles,
        pronuncia: req.body.pronuncia,
        imagem: req.body.imagem,
        categoria: req.body.categoria
    });

    return  res.status(201).json(classe);
}

getClass = async (req, res) =>{
    const classes = await classModel.find({});
    return  res.status(200).json(classes);
}

module.exports = { getClass, createClass}