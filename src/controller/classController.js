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
    if (!req.body.traducao){
        return res.status(400).json({ message: "O campo Tradução e obrigtório"})   
    }

    const classExisente = await classModel.find({ info_ingles: req.body.info_ingles});
    if (classExisente.length) {
        return res.status(200).json({ message:"Informação Cadastrada"});
    }

    const classe = await classModel.create({
        info_ingles: req.body.info_ingles,
        pronuncia: req.body.pronuncia,
        traducao:req.body.traducao,
        imagem: req.body.imagem,
        categoria: req.body.categoria
    });

    return  res.status(201).json(classe);
}

getClass = async (req, res) =>{
    const classes = await classModel.find({});
    return  res.status(200).json(classes);
}

getClassCategory = async (req, res) => {
    let filtroCategoria ={};
    if (req.query.categoria){
        filtroCategoria = {categoria: req.query.categoria}
    }
    const classes = await classModel.find(filtroCategoria);
    
    return res.status(200).json(classes);
}

module.exports = { getClass, createClass, getClassCategory}