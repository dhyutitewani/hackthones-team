const express = require('express');

const app = express();

const port = 3000
app.listen(port);

const eduSchoolRouter = require('./Routes/eduroute.js');
app.use('/school', eduSchoolRouter);

// app.use('/corps', corpRouter);

// app.use('/college', eduCollegeRouter);
