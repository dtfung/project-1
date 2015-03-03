if(bio.skills.length>0) {
}

$('#main').append(internationalizeButton);

	for(con in bio.contacts) {
		var	formattedMobile = HTMLmobile.replace("%data%", bio.contacts[con].mobile);
		$("header").append(formattedMobile);
	

	}

$("#header").append(formattedName);
	
	$("#header").append(formattedRole);

		for(edu in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].date);
		$(".education-entry:last").append(formattedDate);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].courseUrl);
		$(".education-entry:last").append(formattedURL);
	}	
}


//removed H3 so that the padding doesn't apply.  

h2, h4, h5 {   //no h3
  padding:10px;
  padding-left: 5%;
  padding-right: 5%;
}