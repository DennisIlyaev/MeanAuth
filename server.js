const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api');
const port = process.env.PORT;


app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api);

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

setInterval(function() {
    app.get("https://dennisilyaevtest123.herokuapp.com/home");
}, 300000);

app.listen(port);
