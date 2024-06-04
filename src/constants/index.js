import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    infogain,
    sbs,
    lakehead,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Programmer Analyst",
      company_name: "Lakehead University",
      icon: lakehead,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Involved in all phases of front-end functionalities such as requirement analysis, visual and functional specifications, and overall design and development.",
        "Built reusable components to be used across multiple applications and contributed to the team's overall development.",
        "Designed and developed fund management using Java, Spring Boot, Hibernate, and MySQL for scholarship applications to provide transparency and effective bookkeeping.",
        "Collaborated with other team members to develop a large-scale application for managing professors’ promotions and tenure.",

          
          
      ],
    },
    // {
    //   title: "Front End Developer",
    //   company_name: "SBS Learning Pvt Ltd",
    //   icon: sbs,
    //   iconBg: "#E6DEDD",
    //   date: "Sep 2020 - March 2021",
    //   points: [
        
    //     "Worked closely with product managers, designers, and other engineers to tackle challenging problems and deliver innovative solution design, prioritizing user experience and utilizing efficient application deployment and scalability techniques.",
    //     "Implemented microservices based Node.js back-end architecture to develop new REST APIs, resulting in improved functionality and seamless integration with databases.",
    //     "Created visually appealing responsive user interfaces by translating design and wireframes into high quality code.",
    //     "Ensured accurate and secure data input through form handling and validation."
    //   ],
    // },
    {
      title: "Software Engineer",
      company_name: "Infogain India Pvt Ltd",
      icon: infogain,
      iconBg: "#383E56",
      date: "Oct 2018 - Aug 2020",
      points: [
        "Successfully migrated a monolithic application to a microservices architecture, resolving performance bottlenecks and reducing development time by 20%.",
        "Developed a CRM system with user-facing pipelines enabling custom features, leading to a 20% increase in user retention.",
        "Developed RESTful API endpoints using Springboot to facilitate data transfer between server and client.", 
        "Created robust and interactive user interfaces using React, Redux, Bootstrap, and Material-UI.", 
        "Increased 24% faster loading time by implementing code optimization, image and resource caching, and server-side rendering.",
        "Utilized SQL (relational), ORM, and NoSQL (non-relational) databases to store and manage application data efficiently.",
        "Collaborated with cross functional teams to develop and design responsive and interactive web applications.",
        "Engaged in Scrum ceremonies, quality assurance testing, risk assessment, code reviews, and conducted unit tests to ensure quality and reliability of software products.", 
        "Built cross-browser compatible and accessibility-compliant websites, resulting in 30% faster load time.", 
        "Built reusable components to be used across multiple applications and contributed to the team's overall development.",

      ],
    },
    {
      title: "Software Engineer Trainee",
      company_name: "Infogain India Pvt Ltd",
      icon: infogain,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Oct 2018",
      points: [
        "Developed features and products throughout the software development cycle stages (SDLC), leveraging technologies such as Bootstrap, HTML, CSS, AJAX, jQuery, and JavaScript to create engaging front-end for web applications.",
        "Redesigning web pages, automated technological processes, and assisted clients with bug fixes and continuous improvement.",
        "Extracted data from SQL for application development."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      //source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      //source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      //source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
