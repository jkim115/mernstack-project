const express = require('express');
const cors = require('cors');
const studentRouter = require('./routes/studentRouter');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');
const hobbyRouter = require('./routes/hobbyRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/student', studentRouter);

app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/hobby', hobbyRouter);

app.listen(9000);
