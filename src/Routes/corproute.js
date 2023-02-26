const express = require('express');
const app = express();

const port = 3000
app.listen(port);



const corpRouter = express.Router();


corpRouter
.route('/demo')
.get(getCorpSignupPage);


corpRouter
.route('/:corpname')
.get(getCorpDashboardPage);


function getCorpSignupPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Corp/CompanySignUp.html');
}




function getCorpDashboardPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Corp/corpdashboard.html');
}




