const express = require('express');
const app = express();
const studentRoute = require('./Route/student-route');
const cors = require('cors');

const studentApp = express();

app.use(cors());
app.use(express.json());
app.use('/student', studentApp);
// A request to /student/ will be directed to studentRoute
studentApp.use('/', studentRoute);

app.listen(9000);
