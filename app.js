const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/src', express.static('src'))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/src/login.html')
})

app.post('/', (req, res) => {
    let workerID = req.body.workerID;
    let workerPIN = req.body.workerPIN;
    let workerDNI = req.body.workerDNI;
    
})





app.listen(80, () =>{
    console.log('Started on port 80')
})