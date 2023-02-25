const express = require('express');
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const corpRouter = express.Router();

const dblink = 'mongodb+srv://shivamhack:root%402901@cluster0.v4k6qeu.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose');


mongoose.connect(dblink)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

