const axios = require('axios');

const index = async function (req, res){
    res.render('index', { text: 'This is EJS'})
}

const about = async function (req, res){
    res.render('about', { text: 'About Page'})
}

const staff = async function (req, res){
    console.log(req.params.id)
    let mainURL =  ("http://staff-system.rupp.edu.kh/api/resource/Employee/"+req.params.id).toString();
    const data = await axios.get(mainURL, {headers: {Authorization: "token 758918cedd8ac69:2129ee1699a8f2a"}});
    res.render('staff', { data: data.data.data})
}

module.exports = { index, about, staff }