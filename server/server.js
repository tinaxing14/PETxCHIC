  
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { getAllProducts } = require('./controller.js')

const app = express();

const PORT = 3414;

app.listen(PORT, () => console.log(`\x1b[32m Server listening on PORT\x1b[36m ${PORT}`));

// logger 
app.use(morgan("tiny"))

app.use(express.json());

// serving static file 
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/products/:skip', getAllProducts)