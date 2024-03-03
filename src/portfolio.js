// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abdusami Bin Khurram's Portfolio",
  description:
    ".",
  og: {
    title: "Abdusami Bin Khurram Portfolio",
    type: "website",
    url: "https://abdusami-bk.github.io",
  },
};

//Home Page
const greeting = {
  title: "Abdusami Bin Khurram",
  logo_name: "Abdusami",
  nickname: "abdusami-bk",
  subTitle: "A computer scientist for your programming needs",
  resumeLink:
    "https://www.dropbox.com/scl/fi/2lojbbczi7ykweokxzl34/AbduSami_Curriculum-Vitae.pdf?rlkey=a5k7oqjiuxdy2m4vnxj6hx10t&dl=0",
  portfolio_repository: "https://github.com/abdusami-bk",
  githubProfile: "https://github.com/abdusami-bk",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdusami-bin-khurram-70029877/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/abdusami-bk",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "GitLab",
    link: "https://gitlab.com/AbduSami-bK",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/gitlab?style=brands
    backgroundColor: "#E14629", // Reference https://simpleicons.org/?q=gitlab
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/abdusami.binkhurram",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/923315543190",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/whatsapp?style=brands
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=whatsapp
  },
  {
    name: "Skype",
    link: "https://join.skype.com/invite/J6kOp2NI70MB",
    fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/skype?style=brands
    backgroundColor: "#00AFF0", // Reference https://simpleicons.org/?q=skype
  },
  {
    name: "Gmail",
    link: "mailto:absbkb@gmail.com",
    fontAwesomeIcon: "fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Traffic Manipulation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Process packets on line rate of 140 Gbps",
        "⚡ Optimized code to handle cases with traffic drop",
        "⚡ Handled up to more than 6,000 new connections per second",
      ],
      softwareSkills: [
        {
          skillName: "WireShark",
          imageSrc: "wireshark.png",
        },
        {
          skillName: "TCPDump",
          imageSrc: "tcpdump.png",
        },
        {
          skillName: "Asterisk",
          imageSrc: "asterisk.png",
        },
        {
          skillName: "NMAP",
          imageSrc: "nmap.png",
        },
        {
          skillName: "NginX",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "DPDK",
          imageSrc: "dpdk.png",
        },
      ],
    },
    {
      title: "Server Application Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed applications that are running in ISPs",
        "⚡ Bugfixed those same running applications with minimal downtime",
        "⚡ Deployed an application to more than 64 servers in production",
      ],
      softwareSkills: [
        {
          skillName: "VS Code",
          fontAwesomeClassname: "logos:visual-studio-code",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash-icon",
        },
        {
          skillName: "MobaXterm",
          imageSrc: "mobaxterm.png",
        },
        {
          skillName: "C",
          fontAwesomeClassname: "skill-icons:c",
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "skill-icons:cpp",
        },
        {
          skillName: "CMake",
          fontAwesomeClassname: "vscode-icons:file-type-cmake",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "vscode-icons:file-type-python",
        },
        {
          skillName: "django",
          fontAwesomeClassname: "logos:django-icon",
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "vscode-icons:file-type-go",
        },
      ],
    },
    {
      title: "Software Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Managed teams of 5 developers",
        "⚡ Wrote monitoring and recovery scripts",
        "⚡ Made a system to instantly set-up a test-beds for testing",
      ],
      softwareSkills: [
        {
          skillName: "Google Suite",
          imageSrc: "gsuite.png",
        },
        {
          skillName: "Microsoft Projects",
          imageSrc: "projects.png",
        },
        {
          skillName: "Microsoft Teams",
          fontAwesomeClassname: "logos:microsoft-teams",
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "logos:trello",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
        },
        {
          skillName: "Bitrix24",
          imageSrc: "bitrix.png",
        },
        {
          skillName: "Mantis",
          imageSrc: "mantis.png",
        },
        {
          skillName: "Postman",
          imageSrc: "postman.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "COMSATS Institute of Information Technology (CIIT)",
      subtitle: "B.S. in Computer Science",
      logo_path: "comsats.png",
      alt_name: "CIIT",
      duration: "2011 - 2016",
      descriptions: [
        "⚡ Specialization in Systems Programming and Network Security",
        "⚡ Activities and Societies: COMSATS Helping Hands, CIIT Hackathon",
        "⚡ Grade: 2.97 / 4.0",
      ],
      website_link: "https://www.comsats.edu.pk/",
    },
    {
      title: "Punjab College of Information Technology (PCIT)",
      subtitle: "Pre-Engineering",
      logo_path: "pcit.png",
      alt_name: "CIIT",
      duration: "2008 - 2010",
      descriptions: [
        "⚡ Subject list: Islamiat, English, Urdu, Mathematics, Physics, Chemistry, Pakistan Studies.",
        "⚡ Activities and Societies: Library",
        "⚡ Grade Achieved: 741 / 1100",
      ],
      website_link: "https://pgc.edu/",
    },
    {
      title: "Siddeeq Public School (SPS)",
      subtitle: "Matriculation in Science Group",
      logo_path: "sps.png",
      alt_name: "SPS",
      duration: "1999 - 2008",
      descriptions: [
        "⚡ Subject list: Islamiat, English, Urdu, Mathematics, Physics, Chemistry, Biology, Pakistan Studies.",
        "⚡ Skills: Algebra · Microsoft Office · Geometry · Windows",
        "⚡ Grade Achieved: 675 / 850",
      ],
      website_link: "https://www.siddeeqeen.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Introduction to C++ Programming and Unreal",
    //   subtitle: "- University of Colorado",
    //   logo_path: "colorado.png",
    //   certificate_link: "https://coursera.org/share/6450e030d15cbdca9042cc70a06f1a42",
    //   color_code: "#3D5A80",
    // },
    // {
    //   title: "Unreal Engine: Game Terrain Techniques",
    //   subtitle: "- Joel Bradley",
    //   logo_path: "linkedin.png",
    //   certificate_link: "https://www.linkedin.com/learning/certificates/bbdb38c70bab273ee43946967b2aece928440a2342d8cf934d8c664e7f4a284f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5%2Be3T5LPRFSW50j0bgbEJA%3D%3D",
    //   color_code: "#B1AFFF",
    // },
    // {
    //   title: "Blender Sci-fi Scenes with Eevee",
    //   subtitle: "- 3D Tudor",
    //   logo_path: "3dtudor.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-44da6035-ba1c-4736-a299-95ad1e59b79d/",
    //   color_code: "#EE6C4D",
    // },
    // {
    //   title: "Total Architectural visualization/booth designs with Blender",
    //   subtitle: "- Lanre Kolawole",
    //   logo_path: "udemy.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-835afae4-fa3f-4931-bd90-68814d3bc282/",
    //   color_code: "#57B8FF",
    // },
    // {
    //   title: "After Effects Motion Graphics Beast",
    //   subtitle: "- Alan Ayoubi",
    //   logo_path: "udemy.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-0cf3cad3-bc1e-41c1-b364-bf745331a9e9/",
    //   color_code: "#57B8FF",
    // },
    // {
    //   title: "How to Create a Wooden Bucket Prop",
    //   subtitle: "- Jackie Fernandes",
    //   logo_path: "udemy.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-e4cc1955-adf3-490c-9435-5020a0b5c26f/",
    //   color_code: "#57B8FF",
    // },
    // {
    //   title: "How to Create a Wooden Crate with Blender 2.8",
    //   subtitle: "- Jackie Fernandes",
    //   logo_path: "udemy.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-3105032f-dee4-4523-a5fc-c322035fa761/",
    //   color_code: "#57B8FF",
    // },
    // {
    //   title: "Video Editing in Adobe Premiere - From Beginner to Pro",
    //   subtitle: "- Erik Aleynikov",
    //   logo_path: "udemy.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-7268218d-efb6-4faf-91db-d71a7df2bbb8/",
    //   color_code: "#57B8FF",
    // },
    // {
    //   title: "Collision Intro Animation in After Effects",
    //   subtitle: "- Jonathan Lam",
    //   logo_path: "udemy.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-22532a44-5074-4c03-b989-adb9dec7c2c6/",
    //   color_code: "#57B8FF",
    // },
    // {
    //   title: "Blender Creating your First 3D Game Model",
    //   subtitle: "- 3D Tudor",
    //   logo_path: "3dtudor.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-15d01ef6-eaa5-49a3-9393-13f7c2fb8936/",
    //   color_code: "#EE6C4D",
    // },


    // {
    //   title: "Learn to Code in Python 3: Programming beginner to advanced",
    //   subtitle: "- Learn IT University",
    //   logo_path: "learnit.png",
    //   certificate_link: "https://www.udemy.com/certificate/UC-008cad57-9b20-45b7-9a9a-83320ba9d010/",
    //   color_code: "#293241",
    // },
    // {
    //   title: "Getting Started with AI on Jetson Nano",
    //   subtitle: "- Will Ramey",
    //   logo_path: "nvidea.png",
    //   certificate_link: "https://courses.nvidia.com/certificates/ec247db1b76b43cea00c2b86947ff4ab/",
    //   color_code: "#92FEAA",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Volunteership",
  description: "My professional development experience is now 8 year old. The most I've used in this time is C",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experiences",
      work: true,
      experiences: [
        {
          title: "Software Design Engr (3 years), Senior Engr (2 years), Tech Lead (2.5 years)",
          company: "xFlow Research Pvt. Ltd.",
          company_url: "https://xflowresearch.com/",
          logo_path: "xflow.png",
          duration: "Dec 2016 - Present",
          location: "Islamabad, Pakistan",
          description: "I started working in xFlow Research as a Software Design Engineer and have been promoted to Senior Engineer and then to Tech Lead. I have worked on multiple projects and have been involved in the development of multiple million-dollar products. I have also been involved in the hiring process and have been a mentor to many of my juniors.",
        },
        {
          title: "Software Research Engineer",
          company: "ISP Lab, NUST H-12",
          company_url: "https://rni.nust.edu.pk/",
          logo_path: "nust.png",
          duration: "Apr 2021 - July 2022",
          location: "Islamabad, Pakistan",
          description: "Encrypted Search - Research project in collaboration with CyberSecurity Students. I coded their ideas in C, C++ and Python and optimized and helped them integrate them into a single working solution, the research paper can be found at https://www.mdpi.com/1424-8220/22/12/4432",
        },
        {
          title: "Intern Developer (2 months), Android Developer (4 months)",
          company: "Zekab International",
          company_url: "https://zekab.com/",
          logo_path: "zekab.png",
          duration: "July 2016 - Dec 2016",
          location: "Islamabad, Pakistan",
          description:
            "I worked on 2 projects during my tenure at Zekab International. One was a simple Zakat and Ushr calculator and the other was a collection of Ayats starting with 'Qul'. Playable in multiple reciters and language translations.",
        },
        {
          title: "iOS Developer",
          company: "Nautica Group",
          company_url: "",
          logo_path: "nautica.png",
          duration: "Feb 2015 - Aug 2015",
          location: "Islamabad, Pakistan",
          description:
            "Learned iOS development and started developing app \"AlarmBuddy\" for the iPhone. Objective-C - A shared alarm between friends. Except for UI image elements that a designed made for me, I coded all the rest.",
        },
        {
          title: "SQA Internee",
          company: "OziTechnology Ltd",
          company_url: "https://ozitechnology.com/",
          logo_path: "ozi.png",
          duration: "July 2013 - Aug 2013",
          location: "Lahore, Pakistan",
          description:
            "I was involved in testing Android and iPhone App \"CLASS500\".  I was a tester. I used Microsoft Project and Excel sheets for managing, Mirantis for bug reporting and Photoshop to compare screen shots with mock-ups.",
        },
      ],
    },
    {
      title: "Competitions",
      experiences: [
        {
          title: "Official Participant as Representative of Pakistan",
          company: "51st International Mathemetical Olympiad (IMO) - 2010",
          company_url: "https://www.imo-official.org/participant_r.aspx?id=19644",
          logo_path: "imo.png",
          duration: "Summer of 2010",
          location: "Shchuchinsk, Kazakhstan",
          description: "I was selected to represent Pakistan as a young and aspiring Mathematician to compete in the world's largest mathemetical olympic competition. It was a team effort of my peers, mentors and parents that I was able to successfully able to become the vessel for building international foreign realtions between my home country Pakistan and all the participating countries in the competition. It was only possible because of the tremendous effort and willpower of the Kazakhs.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "I've made projects for my job, and for my education only.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "final-pic.png",
    description: "For discussions on topics ranging from coding to maths and physics to project ideas, fell free to drop me a text at Whatsapp (+971-331-5543190)",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Jinnah Garden Phase-I, Islamabad/Rawalpindi, Pakistan - 45710",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/VtTa4Bv6Vf974YHh7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
