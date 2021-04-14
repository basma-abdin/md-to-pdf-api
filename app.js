const express = require("express");
const bodyParser = require('body-parser');

const documentRouter = require('./routes/documents.route');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port =  8000;

app.use('/api/v1/documents', documentRouter);

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

// starting the server
app.listen(port, () =>
    console.log(`🚀 Server running on port ${port}!`));

module.exports = app;




// sudo mysql -u root -p test_cdi < villes_france.sql