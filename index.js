const express = require('express');
const cors = require('cors')
const data = require("./SampleData/location.json")

const app = express();
app.set('port', process.env.PORT || 8000);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors())



const trackappController = require('./controllers/application.js');
app.use('/location', trackappController);



app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

// app.get("/", (req, res) => {
//     res.json(data);
//   });
app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.redirect('/location' )
})

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app;