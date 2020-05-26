const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mailFunctions = require('./nodemailer.js');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Cors
app.use(cors())

app.options('/sendmail', cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/sendEmail', (req, res) => {
    const { email, message , name } = req.body;
    mailFunctions.sendEmail(email, message, name)
        .then(info => {
            console.log(info)
            res.send(info)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

//Static file declaration
app.use(express.static(path.join(__dirname, 'build')));

//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/*', (req, res) => {
        res.sendfile(path.join(__dirname, 'build', 'index.html'));
    })
}
//build mode
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));