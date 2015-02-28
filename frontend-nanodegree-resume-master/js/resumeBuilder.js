//("#main").append("Donald Fung");
//The replace function
var awesomeThoughts = "I am Donald and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';
var name = "Donald Fung";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

//Arrays

var skills = ["investor","leader"];
//$("#main").append(skills);
//adding the [0] after skills displays just the first skill, "investor"
//$("#main").append(skills[0]);

var bio = {
	"name" : "Donald Fung",
	"role" : "Web Developer",
	"Contact info" : 
		{
		"mobile" : 2848624,
		"email" : "donaldtfung@gmail.com",
		"location" : "Jamaica"
	},
		"skills" : [ "investor","leader"],
	"profilePic" : "images/fry.jpg"
};

$("#header").append(bio.name);

var HTMLbioPic = '<img src="%data%" class="biopic">';
var profPic = HTMLbioPic.replace("%data%", bio.profilePic);
$("#profilePic").append(profPic);

var work = {
	"jobs" : [
		{
			"employer" : "Apple",
			"title" : "Developer",
			"location" : "New York",
			"dates" : "February 2015 - present",
			"description" : "designed websites"
		},
		{
			"employer" : "Gap",
			"title" : "Sales Associate",
			"location" : "New York",
			"dates" : "January 2011 - January 2015",
			"description" : "sold clothes"
		}
	]
};

var projects = {
	"projects" : [
		{
		"title" : "Front End Developer Course",
		"description" : "Learnt how to design great websites",
		"image" : "images/tidus.jpg"
		},
		{
		"title" : "Full Stack Developer Course",
		"description" : "Learnt how to provide server side structure for great websites",	
		"image" : "images/lulu.jpg"
		}
	]
};

var education = {

}

//subject to removal
if(bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
};	

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);
		var	formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display(); 

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedDates = HTMLprojectDates.replace()
		
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
		$(".project-entry:last").append(formattedProjectImage);
	}
}
projects.display();



$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);


