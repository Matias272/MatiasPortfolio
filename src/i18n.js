import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        button: "DK",
        frontendStudent: "Frontend Developer Student",
        projects: "Projects",
        aboutMe: "About Me",
        aboutTitle: "<About Me />",
        skillsExpertise: "Skills & Expertise",
        personalSkills: "Personal Skills",
        technologies: "Technologies",
        aboutText1: `Hello World! I'm <strong>Matias Jørgensen</strong>, a front-end web development student focused on building clean, well-structured, and visually consistent user website or apps. I care about writing readable, maintainable code and paying close attention to styling and layout details to create very very very good results.`,
        aboutText2:
          "I work well in collaborative environments and enjoy contributing to team-based projects. Having lived in both Mexico and Denmark, I'm comfortable working with different people and perspectives, and I adapt quickly to new workflows and challenges.",
        aboutText3:
          "I'm motivated by learning through real projects and continuously improving my skills, with a strong focus on clarity, structure, and user experience in everything I build.",
        downloadCV: "Download my CV",
        teamOriented: "Team-Oriented",
        uiDesign: "UI & Design",
        cleanCode: "Clean Code",
        userFocused: "User focused",
        adaptable: "Adaptable",
        organized: "Organized",
        teamPlayer: "Team Player",
        curious: "Curious",
        projectsTitle: "<Projects />",
        loading: "Loading…",
        noProjects: "No projects.",
        backToProjects: "Back to Projects",
        seeDesign: "See design",
        projectData: {
          1: {
            title: "Cafe Luna",
            shortDes:
              "Cafe Luna is a clean, responsive coffee shop website built with pure HTML, CSS, and JavaScript, based on my own Figma-design.",
            description:
              "Cafe Luna is a modern, responsive coffee shop website built entirely with HTML, CSS, and JavaScript, featuring a custom interface designed from scratch in Figma. The project focuses on clean visual hierarchy, smooth micro-interactions, and a cozy brand aesthetic that reflects the identity of an independent café.",
          },
          2: {
            title: "Hi-fi Horizons",
            shortDes:
              "Hi-fi horizons is a project that covers setup, navigation and data retrieval and it was my first real project with react.",
            description:
              "HI-FI is a web application for a web store that presents the store's products divided by categories. The user of the site must be able to navigate the different products easily and clearly and be able to search for products using keywords. The project has an local express server where all the data is. And where i get my data from.",
          },
          3: {
            title: "Hit-Strength",
            shortDes:
              "Hit Strength was one of my first is a vanilla html, css and js project that covers the basics like data retrieval.",
            description:
              "HitString is a responsive e-commerce web page for gym apparel built with vanilla HTML, CSS, and JavaScript. It showcases core front-end skills through semantic structure, modern styling, and dynamic functionality such as product display and basic cart interactions, all implemented without external libraries.",
          },
          4: {
            title: "Newsify",
            shortDes:
              "Newsify is a mobile-first news web app that displays categorized articles from The New York Times API.",
            description:
              "Newsify is a mobile-first news web application built around a clean, customizable reading experience using data from The New York Times. Articles are organized into expandable and collapsible categories with smooth animations, and users can open full articles directly on nytimes.com. Users can save/archive articles to a private news archive using swipe gestures, where saved items can later be accessed or deleted through the same interaction pattern. The project was made with an automated frontend workflow with Vite, modular Sass, and vanilla JavaScript",
          },
        },
      },
    },
    da: {
      translation: {
        button: "EN",
        frontendStudent: "Frontend Udvikler Studerende",
        projects: "Projekter",
        aboutMe: "Om Mig",
        aboutTitle: "<Om Mig />",
        skillsExpertise: "Færdigheder & Ekspertise",
        personalSkills: "Personlige Færdigheder",
        technologies: "Teknologier",
        aboutText1:
          "Hello World! Jeg er <strong>Matias Jørgensen</strong>, en front-end webudviklingsstuderende fokuseret på at bygge rene, velstrukturerede og visuelt konsistente bruger hjemmesider eller apps. Jeg bekymrer mig om at skrive læsbar, vedligeholdelig kode og lægge stor vægt på styling og layoutdetaljer for at skabe meget meget meget gode resultater.",
        aboutText2:
          "Jeg arbejder godt i samarbejdsmiljøer og nyder at bidrage til team-baserede projekter. Efter at have boet i både Mexico og Danmark er jeg komfortabel med at arbejde med forskellige mennesker og perspektiver, og jeg tilpasser mig hurtigt til nye arbejdsgange og udfordringer.",
        aboutText3:
          "Jeg er motiveret af at lære gennem rigtige projekter og kontinuerligt forbedre mine færdigheder, med et stærkt fokus på klarhed, struktur og brugeroplevelse i alt, hvad jeg bygger.",
        downloadCV: "Download mit CV",
        teamOriented: "Team-Orienterede",
        uiDesign: "UI & Design",
        cleanCode: "Ren Kode",
        userFocused: "Brugerfokuseret",
        adaptable: "Tilpasningsdygtig",
        organized: "Organiseret",
        teamPlayer: "Teamspiller",
        curious: "Nysgerrig",
        projectsTitle: "<Projekter />",
        loading: "Indlæser…",
        noProjects: "Ingen projekter.",
        backToProjects: "Tilbage til Projekter",
        seeDesign: "Se design",
        projectData: {
          1: {
            title: "Cafe Luna",
            shortDes:
              "Cafe Luna er en ren, responsiv kaffebar hjemmeside bygget med ren HTML, CSS og JavaScript, baseret på mit eget Figma-design.",
            description:
              "Cafe Luna er en moderne, responsiv kaffebar hjemmeside bygget udelukkende med HTML, CSS og JavaScript, med en brugerdefineret grænseflade designet fra bunden i Figma. Projektet fokuserer på ren visuel hierarki, glatte mikro-interaktioner og en hyggelig brandæstetik, der afspejler identiteten af en uafhængig café.",
          },
          2: {
            title: "Hi-fi Horizons",
            shortDes:
              "Hi-fi horizons er et projekt, der dækker opsætning, navigation og datahentning, og det var mit første rigtige projekt med react.",
            description:
              "HI-FI er en webapplikation til en webshop, der præsenterer butikkens produkter opdelt efter kategorier. Brugeren af siden skal kunne navigere de forskellige produkter nemt og tydeligt og kunne søge efter produkter ved hjælp af søgeord. Projektet har en lokal express-server, hvor alle data er. Og hvor jeg får mine data fra.",
          },
          3: {
            title: "Hit-Strength",
            shortDes:
              "Hit Strength var et af mine første vanilla html, css og js projekter, der dækker grundlæggende som datahentning.",
            description:
              "HitString er en responsiv e-handelswebside til gymnastiktøj bygget med vanilla HTML, CSS og JavaScript. Det viser kerne front-end færdigheder gennem semantisk struktur, moderne styling og dynamisk funktionalitet såsom produktdisplay og grundlæggende kurvinteraktioner, alt implementeret uden eksterne biblioteker.",
          },
          4: {
            title: "Newsify",
            shortDes:
              "Newsify er en mobil-først nyhedswebapp, der viser kategoriserede artikler fra The New York Times API.",
            description:
              "Newsify er en mobil-først nyhedswebapplikation bygget omkring en ren, tilpasselig læseoplevelse ved hjælp af data fra The New York Times. Artikler er organiseret i udvidelige og sammenklappelige kategorier med glatte animationer, og brugere kan åbne fulde artikler direkte på nytimes.com. Brugere kan gemme/arkivere artikler til et privat nyhedsarkiv ved hjælp af swipe-gesture, hvor gemte elementer senere kan tilgås eller slettes gennem det samme interaktionsmønster. Projektet blev lavet med en automatiseret frontend-arbejdsgang med Vite, modulær Sass og vanilla JavaScript",
          },
        },
      },
    },
  },
  lng: "da",
  fallbackLng: "da",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
