


// SCHOOL ROUTES

const eduSchoolRouter = express.Router();


eduSchoolRouter
.route('/demo')
.get(getSchoolignupPage);


eduSchoolRouter
.route('/:schoolname')
.get(getSchoolDashboardPage);


function getSchoolignupPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/School/schoolDemoSignUp.html');
}




function getSchoolDashboardPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/School/schoolDashboard.html');
}






// COLLEGES ROUTES


const eduCollegeRouter = express.Router();



eduCollegeRouter
.route('/demo')
.get(getCollegesignupPage);


eduCollegeRouter
.route('/:Collegename')
.get(getCollegeDashboardPage);


function getCollegesignupPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/Colleges/clgDemoSignUp.html');
}


function getCollegeDashboardPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/Colleges/clgDashboard.html');
}








module.exports = eduSchoolRouter;
