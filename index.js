const express = require('express');
const bodyParser = require ("body-parser")
const cors = require('cors')
const data = require("./SampleData/location.json")
const trackappController = require('./controllers/application.js');
const app = express();
app.set('port', process.env.PORT || 8000);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.redirect('/location' )
})


app.use('/location', trackappController);



app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

// app.get("/", (req, res) => {
//     res.json(data);
//   });


app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app;