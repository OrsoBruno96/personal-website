import type { Dictionary } from "../schema";

export const en = {
  site: {
    title: "Fabio Zoratti",
    description:
      "Fabio Zoratti's personal page: quantum information research, Linux systems administration, Physics Olympiads, and cybersecurity."
  },
  nav: {
    menu: "Menu",
    toggleLabel: "Open or close the navigation menu",
    home: "Home",
    about: "About",
    physicsOlympics: "Physics Olympiads",
    university: "University",
    starfleet: "Starfleet",
    fibonhack: "FibonHack",
    freeTime: "Free time",
    languageLabel: "Language"
  },
  languageSwitcher: {
    italian: "IT",
    english: "EN"
  },
  hero: {
    phd: {
      title: "Co-Founder @<a href=\"https://platonicresearch.com/\">PlatonicResearch</a>",
      body:
        "I graduated in Theoretical Physics in 2020, got a PhD in computational methods for quantum information and now work for a startup, while I keep active my Physics Olympiad involvement.",
      cta: "Download CV"
    },
    sysadmin: {
      title: "Linux SysAdmin",
      body1:
        "I worked for a long time part-time with the Scuola Normale Superiore as a system administrator.",
      body2:
        "Why a photo from a race carrying my college flag? Our work environment is unusual to say the least, and that is one of the reasons I like it so much.",
      cta: "Download CV"
    }
  },
  about: {
    title: "About me.",
    paragraph1Html:
      "I am now co-founder of a <a href=\"https://platonicresearch.com/\">startup</a>, where I work on software development and infrastructure together with other alumni of the Scuola Normale.",
    paragraph2:
      "I was also an undergraduate student at the Scuola Normale Superiore. This means I benefited from a substantial scholarship, but I also had to attend courses at the Scuola Normale while completing my degree at the University of Pisa and maintaining a very high GPA.",
    paragraph3Html:
      "From 2017 to 2024 I worked part-time with the school, handling administration and maintenance for computer labs and college servers at the Scuola Normale. My team is <a href=\"#starfleet\">Starfleet</a>. In 2020 I became especially interested in cybersecurity and joined the CTF team <a href=\"https://fibonhack.it/\">FibonHack</a>.",
    followMe: "Follow me",
    cta: "Download CV",
    photoAlt: "Portrait photo of Fabio Zoratti"
  },
  physicsOlympics: {
    title: "Physics Olympiads",
    intro1:
      "During high school I took part in the Physics Olympiads, as well as the Mathematics and Chemistry Olympiads. Twice I represented Italy at the IPhO (International Physics Olympiad), the world competition for the best high-school physics students. I won a bronze medal in 2014 in Astana, Kazakhstan, and a silver medal in 2015 in Mumbai, India, also achieving the best result within the Italian team.",
    intro2:
      "The Olympiads gave me a lot, so I decided to give something back to this remarkable community in several ways.",
    notes: {
      title: "Olympiad notes",
      bodyHtml:
        "At the end of my first year at university I started writing this advanced text to help students prepare for the national and international stages of the Physics Olympiads. You can find the repository with the latest version of the notes <a href=\"https://gitlab.com/OrsoBruno96/dispenseOlimpiadi\">here</a>.<br />When you find an error, the best way to report it is to <a href=\"https://gitlab.com/OrsoBruno96/dispenseOlimpiadi/issues\">open an issue</a> and describe it precisely. If you are feeling generous, you can also contribute to the project by <a href=\"https://gitlab.com/OrsoBruno96/dispenseOlimpiadi/merge_requests\">submitting a merge request</a>. Of course you can also email me, but the methods above are much more effective."
    },
    stage: {
      title: "Physics camp in Pisa",
      bodyHtml:
        "This is an initiative I created. Together with other students from the Scuola Normale I organized a week-long <a href=\"https://stagefisica.sns.it/\">advanced training camp for the Physics Olympiads</a>, both to improve the IPhO team's level in international competitions and to give students material to learn difficult physics topics already in high school with few prerequisites."
    },
    teamCompetition: {
      title: "Team competition",
      bodyHtml:
        "In the 2022/2023 school year, a national <a href=\"https://gas.olifis.it/\">Physics Team Competition</a> was organized for the first time within the official AIF OLIFIS project. I was the main person responsible for the initiative."
    }
  },
  university: {
    title: "University",
    paragraph1:
      "In 2018 I earned my bachelor's degree. In the same year I attended a summer school at DESY, the German synchrotron in Hamburg, where I worked for CMS, one of CERN's two main experiments. I focused on data analysis, searching for supersymmetric Higgs bosons.",
    paragraph2Html:
      "In 2020 I wrote my <a href=\"https://gitlab.com/OrsoBruno96/tesi-magistrale/\">master's thesis</a>, which explores machine-learning-like approaches on quantum computers.",
    paragraph3Html:
      "I then continued my studies at the Scuola Normale Superiore. I worked on Quantum Information as part of the <a href=\"https://qinfo.sns.it/\">large research group</a> within the Scuola Normale."
  },
  starfleet: {
    title: "Starfleet",
    intro:
      "In our group of part-time system administrators at the Scuola Normale, we do more than just the tasks assigned to us: we also enjoy experimenting with software that looks interesting at the time.",
    cards: [
      {
        title: "Microservice architecture",
        body:
          "Most of our secondary services, such as web, monitoring, and cron, have been migrated to microservices running on our Kubernetes cluster.",
        image: "/images/kubernetes.png",
        imageAlt: "Kubernetes logo",
        label: "Kubernetes"
      },
      {
        title: "Version control",
        body:
          "All the software we write is under version control and tightly integrated with GitLab.",
        image: "/images/GitLab.png",
        imageAlt: "GitLab logo",
        label: "GitLab"
      },
      {
        title: "Centralized configuration",
        body:
          "Some time ago one of our servers suffered a hard-drive failure on the root filesystem. Thanks to our centralized configurations, 20 minutes after replacing the disk the machine was back online and working as before.",
        image: "/images/Ansible.png",
        imageAlt: "Ansible logo",
        label: "Ansible"
      },
      {
        title: "High availability",
        body:
          "Our data and services are highly available, also thanks to the distributed filesystems we use.",
        image: "/images/glusterfs.png",
        imageAlt: "GlusterFS logo",
        label: "GlusterFS"
      },
      {
        title: "Monitoring",
        body:
          "All our services are monitored continuously so that we can resolve failures as quickly as possible. Usually the culprit is someone playing with the power supply of our servers.",
        image: "/images/icinga.png",
        imageAlt: "Icinga 2 logo",
        label: "Icinga 2"
      },
      {
        title: "Log collection",
        body:
          "The only way to survive an avalanche of logs is to centralize them, and we have our own search engine to track down the source of errors.",
        image: "/images/elastic.png",
        imageAlt: "Elasticsearch logo",
        label: "ElasticSearch"
      }
    ]
  },
  fibonhack: {
    title: "FibonHack",
    bodyHtml:
      "In 2020, while writing my master's thesis, I took part in <a href=\"https://cyberchallenge.it/\">CyberChallenge</a>, the Italian cybersecurity training program for university students, and won the national final with the University of Pisa team. Together with other students and instructors we founded the CTF team <a href=\"https://fibonhack.it/\">FibonHack</a>. I mainly focus on binary exploitation. I was also part of the organizing team for <a href=\"https://olicyber.it/\">Olicyber 2021 and 2022</a>.",
    logoAlt: "FibonHack logo"
  },
  freeTime: {
    title: "Free time",
    intro:
      "At the Scuola Normale there is always room for free time. One of the activities I enjoyed most during my first years there was table football.",
    videoTitle: "24-hour event trailer created by Fabio Zoratti",
    videoCaption:
      "A trailer I made for the 24-hour event, dubbing the cult movie Kung Fury."
  },
  footer: {
    designBy: "Design by"
  }
} satisfies Dictionary;
