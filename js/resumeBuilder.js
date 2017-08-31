/***NAVIGATION ***/
var navigation = {
    "brand": "NR - Resume",
    item: [{
            "name": "Profile",
            "href": "#header"
        },
        {
            "name": "Work",
            "href": "#workExperience"
        },
        {
            "name": "Projects",
            "href": "#projects"
        },
        {
            "name": "Education",
            "href": "#education"
        }
    ]
};

navigation.display = function() {
    var formattedNavBrand = navBrand.replace("%data%", navigation.brand);
    /*$(".navbar").prepend(formattedNavBrand);*/
    $(formattedNavBrand).insertAfter(".navbar-toggler");
    navigation.item.forEach(function(item) {
        var formattedNavItem = navItem.replace("%data%", item.name);
        $(".navbar-nav").append(formattedNavItem);
        $(".nav-link:last").attr("href", item.href);
    });
};
navigation.display();

//***BIO***
var bio = {
    "name": "Nevena Raovic",
    "role": "Web Developer",
    "bioPic": "images/flower.jpeg",
    "welcomeMsg": "The secret of getting ahead is getting started.",
    "welcomeMsgAuthor": "Mark Twain",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "nevena@example.com",
        "github": "github/nraovic",
        "location": "Copenhagen, Denmark"
    },
    "skills": ["awesomeness", "programming and coding", "teaching and learning", "saving the universe"],
    "skillSet": [{
            "set": "Coding",
            "setList": ["HTML", "CSS3", "JavaScript", "jQuery", "Angular4"]
        },
        {
            "set": "Design",
            "setList": ["Photoshop", "Illustrator"]
        },
        {
            "set": "Animation",
            "setList": ["Canvas", "SVG"]
        }
    ]
};

bio.display = function() {
    //Bio - Name and role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $(".name-role").append(formattedName, formattedRole);

    //Bio - Picture and Welcoming Message
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg).replace("%author%", bio.welcomeMsgAuthor);
    $(".message").append(formattedWelcomeMsg);
    $('.picture').append(formattedBioPic);

    //Bio - contact details
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    //Bio - Skills
    if (bio.skills.length > 0) {
        $(".skills-glance").append(HTMLskillsStart);
        var formattedSkill;
        bio.skills.forEach(function(skill) {
            formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }

    //Bio - SkillSet
    bio.skillSet.forEach(function(skillset) {
        formattedSkillSetName = HTMLskillSetName.replace("%data%", skillset.set);
        $(".skills:last").append(formattedSkillSetName);
        $('.skills').append(HTMLskillSetStart);
        skillset.setList.forEach(function(unit) {
            formattedSkillSetUnit = HTMLskillSetUnit.replace("%data%", unit);
            $(".skillset-list:last").append(formattedSkillSetUnit);
        });
    });
};
bio.display();


//***WORK***
var work = {
    "jobs": [{
            "employer": "DTU",
            "title": "PhD Student",
            "dates": "2012 - 2015",
            "location": "Copenhagen, Denmark",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            "employer": "DTU",
            "title": "Teaching Assistant",
            "dates": "2013 - 2013",
            "location": "Copenhagen, Denmark",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        var formattedWorkEmpoyer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".job").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmpoyer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    });
};
work.display();

/***PROJECTS***/
var projects = {
    projects: [{
            "title": "Online Portfolio",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "images": ["images/project1.jpeg"],
            "chart": [{
                    label: "HTML5",
                    count: 50
                },
                {
                    label: "CSS3",
                    count: 50
                }
            ]
        },
        {
            "title": "Interactive Resume",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "images": ["images/project2.jpeg"],
            "chart": [{
                    label: "JQuery",
                    count: 50
                },
                {
                    label: "CSS3",
                    count: 30
                },
                {
                    label: "HTML5",
                    count: 25
                },
                {
                    label: "D3",
                    count: 5
                }
            ]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $(".project").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);
        project.images.forEach(function(image) {
            var formattedProjectImages = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedProjectImages);
        });
        $(".project-entry:last").append(HTMLprojectChart); //appending a div element for the chart
    });
};
projects.display();

/***EDUCATION***/
var education = {
    "schools": [{
            "name": "Faculty of Transportation and Traffic Engineering",
            "degree": "BSc in Engineering",
            "location": "Belgrade, Serbia",
            "dates": "2005 - 2010",
            "majors": ["Traffic Engineering"]
        },
        {
            "name": "Faculty of Transportation and Traffic Engineering",
            "degree": "MSc in Engineering",
            "location": "Belgrade, Serbia",
            "dates": "2010 - 2012",
            "majors": ["Traffic Engineering", "Operations Research"]
        }
    ],

    "onlineCourses": [{
            "title": "R Programming",
            "school": "Coursera (John Hopkins University)",
            "dates": "2015",
            "url": "https://www.coursera.org/learn/r-programming"
        },
        {
            "title": "Intro to Python",
            "school": "Coursera (Michigen University)",
            "dates": "2015",
            "url": "https://www.coursera.org/learn/python-data"
        }
    ]
};

education.display = function() {
    //School info
    education.schools.forEach(function(school) {
        $(".education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegreeName = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName + formattedDegreeName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
    });
    //Online courses info
    $(".education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".education:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
        $(".education:last").append(formattedUrl);
    });
};
education.display();

/***MAP ***/
$(".mapDiv").append(googleMap);


/***FOOTER ***/
var footer = {};

footer.display = function() {
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub);
};
footer.display();