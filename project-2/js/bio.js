var bio = {
	"name" : "Donald Fung",
	"role" : "Web Developer",
	"contacts" : 
		{
			"mobile" : "2848624",
			"email" : "donaldtfung@gmail.com",
			"gitHub" : "https://github.com/dtfung",
			"twitter" : "https://twitter.com/donaldtfung",
			"location" : "Jamaica"
	},
	"welcomeMessage" : "Hello, I really love this course!",
	"skills" : [ "geek","time traveler","programmer"],
	"biopic" : "images/me.jpg"
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);		
	var formattedNameRole = formattedName + formattedRole;
	$("#header").prepend(formattedNameRole);
	var	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$(".flex-box").append(formattedMobile);
	var	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$(".flex-box").append(formattedEmail);	
	var	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
	$(".flex-box").append(formattedGithub);
	var	formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$(".flex-box").append(formattedTwitter);
	var	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$(".flex-box").append(formattedLocation);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);		
	$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);		
	$("#header").append(formattedWelcomeMsg);
		
	if(bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);		
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkills);
	}
}
