import me from "./images/me.jpg";


export default {
	name: "Sage Klein",
	headerTagline: [
		//Line 1 For Header
		"Sage Klein",
		//Line 2 For Header
		"UX/UI Application Developer",
		//Line 3 For Header
		"Nashville TN"
	],
	//Contact Email
	contactEmail: "sageklein@gmail.com",
	// Add Your About Text Here
	abouttext:
		"As a Front End Web Developer I am passionate about combining my love of coding with my love of continued learning. With UI/UX and strong communication skills I produce beautiful and well thought out design work. With a positive attitude and strong growth mindset, I am self motivated and work well in groups!",
	aboutImage: me,

	ShowAboutImage: true,

	projects: [
		{
			id: 1,
			title: "Project One", //Project Title - Add Your Project Title Here
			service: "UI/UX Design", // Add Your Service Type Here
			//Project Image - Add Your Project Image Here
			imageSrc: "  ",
			//Project URL - Add Your Project Url Here
			url: "http://sageklein.com/"
		},
		{
			id: 2,
			title: "Project Two",
			service: "Website Development",
			imageSrc: "  ",
			url: "http://sageklein.com/"
		},
		{
			id: 3,
			title: "Project Three",
			service: "Web App",
			imageSrc: "  ",
			url: "http://sageklein.com/"
		},
		{
			id: 4,
			title: "Project Four",
			service: "Branding",
			imageSrc: "  ",
			url: "http://sageklein.com/"
		}

		/*
                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
	],
	social: [
		// Add Or Remove The Link Accordingly
		{ name: "Github", url: "https://github.com/sageklein" },
		{
			name: "Behance",
			url: "https://www.behance.net/sageklein"
		},
		{
			name: "Dribbble",
			url: "https://dribbble.com/sageklein"
		}
	]
};
