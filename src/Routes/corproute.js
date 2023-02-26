const express = require('express');
const app = express();

const port = 3000
app.listen(port);



const corpRouter = express.Router();

corpRouter
.route('/corporations')
.get(getCorpSignupPage)


corpRouter
.route('/corporations/:id')
.get(getCorpDashboardPage);









