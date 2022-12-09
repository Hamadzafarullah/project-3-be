const express = require('express');
const cors = require('cors')
const data = require("./SampleData/location.json")

const app = express();
app.set('port', process.env.PORT || 8000);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors())



const trackappController = require('./controllers/application.js');
app.use('/api/trackapp/', trackappController);



app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.get("/", (req, res) => {
    res.json(data);
  });

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app;