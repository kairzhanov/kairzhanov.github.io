import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/models/certificate.model';
import { Achievement } from 'src/app/models/achievement.model';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  educations: Education[] = [
    {
      title: "Master in Information Systems",
      period: "Sep 2020 - Present",
      subtitle: "Kazakh-British Technical University",
      location: "Kazakhstan",
      content: "GPA 3.92/4.0"
    },
    {
      title: "Bachelor of Computer Science and Electrical Engineering",
      period: "Sep 2015 - Aug 2020",
      subtitle: "Ulsan National Institute of Science and Technology",
      location: "South Korea",
      content: "GPA 3.6/4.3 (Magna Cum Laude)"
    }
  ]

  // TODO: Add filter by technology
  // TODO: Add filter by years

  experiences: Experience[] = [
    {
      title: "Software Engineer",
      period: "Aug 2020 - Present",
      company_description: "Second tier bank (Top 1 in Kazakhstan)",
      
      description: "",
      points: [
        "• Worked on the backend of application with 9M+ users",
        "• Developed tool to automate Partners connection process from 2 days to 1 hour (Application web form, CRM, Integration with other bank systems)",
        "• Technology: C#, ASP.NET Core, ASP.NET MVC, MSSQL, SOAP, REST, Bootstrap 4"
      ],
      company_name: "Kaspi.kz",
      company_url: "https://kaspi.kz",
      years: [2020, 2021],
      technologies: ["C#", "ASP.NET Core", "ASP.NET MVC", "MSSQL", "SOAP", "REST", "Bootstrap 4", "JQuery", "HTML&CSS"]
    },
    {
      title: "Frontend Developer (Remote)",
      period: "Jul 2020 – Jan 2021",
      company_description: "Personalized AI Scheduling Assistant",
      description: "",
      points: [
        "• Developed web pages from Figma design",
        "• Moved to Angular Universal (SSR)",
        "• Technology: Angular 9, Typescript, Bootstrap 4"
      ],
      company_name: "Gigturbo.com",
      company_url: "https://gigturbo.com",
      years: [2020, 2021],
      technologies: ["Angular", "Typescript", "Bootstrap"]
    },
    {
      title: "CEO, Co-founder",
      period: "Dec 2019 – Jun 2020",
      company_description: "Software development company",
      description: "",
      points: [
        "• Founded company with 4 people",
        "• Was responsible for customer acquisition and signed 5 contracts",
        "• Managed the development workflow of the team (Trello, SCRUM)",
        "• Developed front-end for admin panel, design improvements",
        "• Actively participated in the development process using Angular 8, C#, ASP.NET Core, Python (Telegram Bot), MongoDB"
      ],
      company_name: "Dasol.kz",
      company_url: "https://dasol.kz",
      years: [2019, 2020],
      technologies: ["Angular", "C#", "ASP.NET Core", "Python", "MongoDB"]
    },
    {
      title: "Web Developer",
      period: "Feb 2019 – Mar 2019",
      company_description: "Biggest glass manufacturer in region",
      description: "",
      points: [
        "• Implemented the role management system",
        "• Developed a system of individual price lists for each corporate client",
        "• Added the feature to select glass processing type",
        "• Small improvements in security and design",
        "• Technology: C#, ASP.NET Core MVC"
      ],
      company_name: "Steklo-Service, Ltd",
      company_url: "https://steklo-service.kz",
      years: [2019],
      technologies: ["C#", "ASP.NET Core"]
    },
    {
      title: "Research Assistant",
      period: "Apr 2018 – Feb 2019",
      company_description: "AI, Robotics, and Transportation Lab",
      description: "",
      points: [
        "• Developed a traffic simulator for autonomous driving research (C++, Unreal Engine 4)",
        "• Built maps for PTV Vissim traffic simulator",
        "• Built a program that helps to convert a OSM map screenshot into a graph (JavaFX, JSON)",
      ],
      company_name: "ART Lab",
      company_url: "https://ai.unist.ac.kr/~chiu/",
      years: [2018, 2019],
      technologies: ["C++", "Unreal Engine 4", "Java"]
    },
    {
      title: "Web Developer (Remote)",
      period: "Mar 2017 – Jun 2017",
      company_description: "",
      description: "",
      points: [
        "• Built an order cancellation process",
        "• Added product edit function",
        "• Techology: PHP, Yii, JQuery, HTML&CSS, Bootstrap 3",
      ],
      company_name: "Lensmark.kz",
      company_url: "https://lensmark.kz",
      years: [2017],
      technologies: ["PHP", "Yii", "JQuery", "HTML&CSS", "Bootstrap"]
    },
    {
      title: "Web Developer (Intern)",
      period: "Jan 2017 – Feb 2017",
      company_description: "",
      description: "",
      points: [
        "• Added new functions to the administrative part of the site that automate the main operations of the team:",
        "1. Sending e-mails with order status",
        "2. Creating and sending commercial offer to the customers",
        "• Techology: PHP, Yii, JQuery, HTML&CSS, Bootstrap 3",
      ],
      company_name: "Chocomart.kz",
      company_url: "https://chocomart.kz/",
      years: [2017],
      technologies: ["PHP", "Yii", "JQuery", "HTML&CSS", "Bootstrap"]
    }
  ];

  achievements: Achievement[] = [
    {
      title: "Grand Prix at BI Hackathon",
      location: "Astana, Kazakhstan",
      year: 2021,
      description: "Developed AI model that predicts missed deadlines at the construction site"
    },
    {
      title: "3rd place at DLD Hackathon",
      location: "Almaty, Kazakhstan",
      year: 2021,
      description: "Developed Credit Scoring Model for BCK bank",
    },
    {
      title: "2nd place at Baiterek Hackathon",
      location: "Almaty, Kazakhstan",
      year: 2019,
      description: "Developed an online survey system for Otbasy bank's clients who are waiting in the queue. The system is designed to reduce wasting time and improve customer experience."
    },
    {
      title: "Tech Central Asia Startup Acceleration program finalist",
      location: "Astana, Kazakhstan",
      year: 2019 ,
      description: "",
      icon_url: "assets/images/team.svg"
    },
    {
      title: '2nd place at "Asia Youth Entrepreneurship Program"',
      location: "Ulsan, South Korea",
      year: 2017,
      description: ""
    },
    {
      title: '2nd place at "UNIST Startup Competition"',
      location: "Ulsan, South Korea",
      year: 2017,
      description: ""
    },
    {
      title: "UNICorn Startup Support program participant",
      location: "Ulsan, South Korea",
      year: 2018,
      description: "",
      icon_url: "assets/images/team.svg"
    }
  ];

  public certificates: Certificate[] = [
    {
      title: "Introduction to Kubernetes",
      description: " ",
      file_url: "assets/files/certificates/intro_kubernetes.pdf",
      image_url: "assets/images/certificates/intro_kubernetes.png",
      years: [2021],
    }
  ];



  ngOnInit(): void {
  }

}
