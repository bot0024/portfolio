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
  title: "Hi there, I'm Dip",
  subTitle: emoji(
    " Aspiring SOC Analyst | Passionate about Threat Detection & Incident Response | I’m a cybersecurity student with a solid grounding in networking, Linux, and threat analysis—on a mission to turn curiosity into capability. I’m especially drawn to the fast-paced world of SOC operations, where real-time threats meet real-world problem-solving. Eager to kick off my journey with an internship or entry-level opportunity where I can contribute, learn, and grow into a sharp-eyed Security Analyst helping keep systems secure and threats at bay."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bot0024",
  linkedin: "https://www.linkedin.com/in/dip-nalawade/",
  gmail: "dipnalawade24@gmail.com",
 // gitlab: "https://gitlab.com/",
 // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@BotHacks",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SECURING THE DIGITAL WORLD, ONE LAYER AT A TIME ",
  skills: [
    emoji("⚔️ Networking: TCP/IP, Firewalls, IDS/IPS Basics"),
    emoji("⚔️ Operating Systems: Windows, Linux (Kali, Ubuntu)"),
    emoji("⚔️ SIEM Concepts: Event Correlation, Log Monitoring, Alert Prioritization"),
    emoji("⚔️ Security Tools: Wireshark, Nmap, Splunk (basic), Nessus(basics),etc"),
    emoji("⚔️ Soft Skills: Critical Thinking, Communication, Time Management, Teamwork")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "SIEM",
      iconPath: "https://cdn.worldvectorlogo.com/logos/siem-2.svg"
    },
    {
      skillName: "Firewall Configuration",
      iconPath: "https://www.svgrepo.com/show/284826/firewall.svg"
    },
    {
      skillName: "Splunk",
      iconPath: "https://www.cprime.com/wp-content/uploads/2020/10/splunk-logo-150x150.jpg"
    },
    {
      skillName: "Wireshark",
      iconPath: "https://www.svgrepo.com/show/407415/shark.svg"
    },
    {
      skillName: "CyberChef",
      iconPath: "https://www.svgrepo.com/show/274912/chef.svg"
    },
    {
      skillName: "Nmap",
      iconPath: "https://www.svgrepo.com/show/387515/eyes.svg"
    },
    {
      skillName: "VirusTotal",
      iconPath: "https://www.svgrepo.com/show/331633/virustotal.svg"
    },
    {
      skillName: "Nessus Essentials",
      iconPath: "https://img.icons8.com/stickers/100/hexagon.png"
    },
    {
      skillName: "Burp Suite",
      iconPath: "https://www.svgrepo.com/show/454430/burpsuite-security-software.svg"
    },
    {
      skillName: "python(Basic)",
      iconPath: "https://www.svgrepo.com/show/452091/python.svg"
    },
    {
      skillName: "John The Ripper",
      iconPath: "https://www.kali.org/tools/john/images/john-logo.svg"
    },
    {
      skillName: "SqlMap",
      iconPath: "https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg"
    },
    {
      skillName: "Hydra",
      iconPath: "https://www.kali.org/tools/hydra/images/hydra-logo.svg"
    },
    {
      skillName: "Gobuster",
      iconPath: "https://www.kali.org/tools/gobuster/images/gobuster-logo.svg"
    },
    {
      skillName: "Metasploit",
      iconPath: "https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
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
      desc: "Networking, Ethical Hacking, Information Security, Digital Forensics, Cryptography",
      // descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
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
      Stack: "Security Operations (SOC Fundamentals)", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Threat Analysis ",
      progressPercentage: "60%"
    },
    {
      Stack: "Network Security",
      progressPercentage: "67%"
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
      date: "26 May 2025 to 28 June 2025",
      desc: "Completed a one-month remote internship focused on core areas of cybersecurity through project-based learning and hands-on practice.",
      descBullets: [
        "Gained practical experience in Network Security and  Ethical Hacking, including identifying and mitigating system vulnerabilities.",
        "Performed threat analysis and applied security best practices aligned with industry standards."
      ]
    },
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
          url: "http://nextuLogo.se/"
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
        //{
        //  name: "Award Letter",
        //  url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        //},
        //{
        //  name: "Google Code-in Blog",
        //  url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        //}
      ]
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      subtitle:
        "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.",
      image: require("./assets/images/Tata_logo.png"),
      imageAlt: "Cybersecurity Analyst Job Simulation logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_jiReKtWBktGTSGC6r_1743945671495_completion_certificate.pdf"
        }
      ]
    },
    {
      title: "Cyber Security Internship",
      subtitle:
        "Completed the Cyber Security Internship at Elevate Labs from 26 May 2025 to 28 June 2025, demonstrating exceptional skills and dedication in contributing to real-world projects and tasks",
      image: require("./assets/images/elavatelabs.jpeg"),
      imageAlt: "Cybersecurity Analyst Job Simulation logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_uzhrQSmDoN4jjLEZQYyzz6KURoePj74/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@BotHacks/%EF%B8%8F-recently-i-did-a-phishing-analysis-on-a-suspicious-email-heres-what-i-found-0ed6785ffc8d",
      title: "Recently, I Did a Phishing Analysis on a Suspicious Email — Here's What I Found",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@BotHacks/pickle-rick-tryhackmes-rick-morty-room-47b2b3e3d420",
      title: "Pickle Rick — TryHackMe's Rick & Morty Room",
      description:
        "I was never a fan of the show, Rick and Morty, but thought this CTF was interesting enough to try out. Web app hacking! Lets get to it. "
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/your-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
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
  number: "+91",
  email_address: "dipnalawade24@gmail.com"
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
