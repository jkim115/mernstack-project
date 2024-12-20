const express = require('express');
const cors = require('cors');
const studentRouter = require('./routes/studentRouter');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/student', studentRouter);

app.listen(9000);
