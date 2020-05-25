const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mailFunctions = require('./nodemailer.js');
const bodyParser = require('body-parser')
const cors = require('cors');

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
    mailFunctions.sendEmail(email, message, name);
    res.send();
})

app.get('/hello', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));