const express = require('express');

const app = express();

const port = 3000
app.listen(port);

const eduSchoolRouter = require('./Routes/eduSchoolRoute.js');
app.use('/school', eduSchoolRouter);

// app.use('/corps', corpRouter);

const eduCollegeRouter = require('./Routes/eduCollegeRoute.js');
app.use('/college', eduCollegeRouter);


const corpRouter = require('./Routes/corproute');
app.use('/corps', corpRouter);


const nonProfitRoute = require('./Routes/nonprofitRoute');
app.use('/ngo', nonProfitRoute);


const researchRouter = require('./Routes/researchRoute');
app.use('/research', researchRouter);