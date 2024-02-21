const alphabet =[
    {"letra": "A", "pronuncia": "Êi"},
    {"letra": "B", "pronuncia": "Bí"},
    {"letra": "C", "pronuncia": "Ci"}
]

getClass = (req, res) =>{
    res.status(200).send(alphabet);
}

module.exports = { getClass }