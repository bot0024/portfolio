/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dip Nalawade",
  title: "Hi all, I'm Dip",
  subTitle: emoji(
    "Aspiring Cybersecurity Professional | Defensive Security Focus Cybersecurity student with skills in networking, Linux, and threat analysis. Worked with honeypots like T-Pot and built tools like a Python-based vulnerability scanner. Seeking an internship or entry-level role to grow as a security analyst and defender "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qHE2Rxl8UF8qecAQ1rpyxKI1ugr_AUWg/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bot0024",
  linkedin: "https://www.linkedin.com/in/dip-nalawade/",
  gmail: "dipnalawade24@gmail.com",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@BotHacks",
  Instagram: "https://www.instagram.com/nalawade_dip/",
  Twitter: "https://x.com/BotHacks_",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SECURING THE DIGITAL WORLD, ONE LAYER AT A TIME ",
  skills: [
    emoji(
      "⚡ Networking: Network Security Basics, Network Scanning (Nmap, Nessus) "),
    
    emoji("⚡ Linux: System Administration "),
    emoji("⚡ Python: Python Devloper ")
  ],
softwareSkills: [
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "Wireshark",
    fontAwesomeClassname: "fas fa-network-wired" // No official icon, using network icon
  },
  {
    skillName: "Nmap",
    fontAwesomeClassname: "fas fa-terminal" // No official icon, terminal is a good fit
  },
  {
    skillName: "Burp Suite",
    fontAwesomeClassname: "fas fa-spider" // Custom or placeholder
  },
  {
    skillName: "Metasploit",
    fontAwesomeClassname: "fas fa-bug"
  },
  {
    skillName: "Kali Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "Splunk",
    fontAwesomeClassname: "fas fa-search" // Placeholder
  },
  {
    skillName: "SIEM",
    fontAwesomeClassname: "fas fa-shield-alt"
  },
  {
    skillName: "Firewall Configuration",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Python (for scripting)",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Azure Security Center",
    fontAwesomeClassname: "fab fa-microsoft" // Represents Microsoft services
  },
  {
    skillName: "Active Directory",
    fontAwesomeClassname: "fas fa-users-cog"
  }
],
display: true
 // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Bachelor of Science in Cyber Security",
      duration: "June 2023 - April 2026",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //  ]
    },
    {
      schoolName: "Marathwada MitraMandal's College of Commerce",
      logo: require("./assets/images/mmcc.png"),
      subHeader: "Maharashtra State Board of Secondary and Higher Secondary(HSC)",
      duration: "September 2021 - April 2023",
      desc: "Completed My 12th in Science, ...",
    //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Networking", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Vulnerability assesment and penetration testing ",
      progressPercentage: "65%"
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cyber Security Intern",
      company: "Elevate Labs",
      companylogo: require("./assets/images/elavatelabs.jpeg"),
      date: "May 2025 – Present",
      desc: "Completed a one-month remote internship focused on core areas of cybersecurity through project-based learning and hands-on practice.",
      descBullets: [
        "Gained practical experience in network security and ethical hacking, including identifying and mitigating system vulnerabilities.",
        "Performed threat analysis and applied security best practices aligned with industry standards."
      ]
    },
//    {
//      role: "Front-End Developer",
//      company: "Quora",
//      companylogo: require("./assets/images/quoraLogo.png"),
//      date: "May 2017 – May 2018",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    },
//    {
//      role: "Software Engineer Intern",
//      company: "Airbnb",
//      companylogo: require("./assets/images/airbnbLogo.png"),
//      date: "Jan 2015 – Sep 2015",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google: Tools of the Trade: Linux and SQL",
      subtitle:
        "It demonstrates practical insights and hands-on experience with concepts essential to cybersecurity and system management.",
      image: require("./assets/images/google.png"),
      imageAlt: "Tools of the Trade: Linux and SQL logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/66d07db692c71a2c16a449b984a13227"
        },
      ]
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      subtitle:
        "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.",
      image: require("./assets/images/Tata_logo.svg"),
      imageAlt: "Cybersecurity Analyst Job Simulation logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_jiReKtWBktGTSGC6r_1743945671495_completion_certificate.pdf"
        },
        {
          name: "Cybersecurity Analyst Job Simulation",
          url: "https://www.theforage.com/virtual-experience/gmf3ypEXBj2wvfQWC/tata-group/cybersecurity-sbda/intro-scenario"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@BotHacks/%EF%B8%8F-recently-i-did-a-phishing-analysis-on-a-suspicious-email-heres-what-i-found-0ed6785ffc8d",
      title: "Recently, I Did a Phishing Analysis on a Suspicious Email — Here's What I Found",
      description:"Recently, I came across a suspicious email that looked *almost* legitimate. Out of curiosity (and my love for cybersecurity), I decided to dig in and perform a phishing analysis. What I found was a textbook example of a modern phishing attempt — and a reminder of how easily someone could fall for it.",
    },
    {
      url: "https://medium.com/@BotHacks/pickle-rick-tryhackmes-rick-morty-room-47b2b3e3d420",
      title: "Pickle Rick — TryHackMe's Rick & Morty Room",
      description:
        "I was never a fan of the show, Rick and Morty, but thought this CTF was interesting enough to try out. Web app hacking! Lets get to it. "
    },
    {
      url: "https://medium.com/@BotHacks/how-to-start-a-career-in-cybersecurity-even-if-youre-a-complete-beginner-396062b7270e",
      title: "How to Start a Career in Cybersecurity (Even If You're a Complete Beginner)",
      description:
        "The world is getting hacked—literally."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A  😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab ",
      slides_url: "https:// ",
      event_url: "https:// "
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory-"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number:"+91",
  email_address:"dipnalawade24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "BotHacks_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
