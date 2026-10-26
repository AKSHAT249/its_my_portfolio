const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Hands-On Development" },
    { value: 3, suffix: "+", label: "Projects Built" },
    { value: 600, suffix: "+", label: "Problems Solved Across" },
    { value: 5, suffix: "yrs", label: "Competetive Programming" },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  // Bento-tuned groups: 6 / 6 / 4 / 3 / 6 / 12 → 3+3 row layout (last card wide)
  const techStackSkills = [
    {
      title: "Languages",
      icon: "code",
      span: "normal",
      items: [
        { name: "JavaScript", slug: "javascript", color: "F7DF1E", core: true },
        { name: "TypeScript", slug: "typescript", color: "3178C6", core: true },
        { name: "Python", slug: "python", color: "3776AB", core: false },
        { name: "SQL", slug: "mysql", color: "4479A1", core: false },
        { name: "HTML5", slug: "html5", color: "E34F26", core: false },
        { name: "CSS3", slug: "css", color: "663399", core: false },
      ],
    },
    {
      title: "Frontend",
      icon: "monitor",
      span: "normal",
      items: [
        { name: "React", slug: "react", color: "61DAFB", core: true },
        { name: "Next.js", slug: "nextdotjs", color: "FFFFFF", core: false },
        { name: "Redux Toolkit", slug: "redux", color: "764ABC", core: false },
        { name: "Material UI", slug: "mui", color: "007FFF", core: false },
        { name: "Ant Design", slug: "antdesign", color: "0170FE", core: false },
        { name: "Recharts", slug: "chartdotjs", color: "FF6384", core: false },
      ],
    },
    {
      title: "Backend & APIs",
      icon: "server",
      span: "normal",
      items: [
        { name: "Node.js", slug: "nodedotjs", color: "339933", core: true },
        { name: "Express.js", slug: "express", color: "FFFFFF", core: false },
        { name: "Django", slug: "django", color: "092E20", core: false },
        { name: "REST APIs", slug: "fastapi", color: "009688", core: false },
      ],
    },
    {
      title: "Auth & Security",
      icon: "shield",
      span: "narrow",
      items: [
        { name: "JWT", slug: "jsonwebtokens", color: "FFFFFF", core: false },
        { name: "OAuth 2.0", slug: "auth0", color: "EB5424", core: false },
        { name: "Clerk", slug: "clerk", color: "6C47FF", core: false },
      ],
    },
    {
      title: "Database & Storage",
      icon: "database",
      span: "narrow",
      items: [
        { name: "PostgreSQL", slug: "postgresql", color: "4169E1", core: true },
        { name: "MongoDB", slug: "mongodb", color: "47A248", core: false },
        { name: "MySQL", slug: "mysql", color: "4479A1", core: false },
        { name: "Redis", slug: "redis", color: "FF4438", core: false },
        { name: "Firebase", slug: "firebase", color: "DD2C00", core: false },
        { name: "Supabase", slug: "supabase", color: "3FCF8E", core: false },
      ],
    },
    {
      title: "Cloud, DevOps & Tools",
      icon: "cloud",
      span: "wide",
      items: [
        { name: "AWS", slug: "amazonaws", color: "FF9900", core: false },
        { name: "Docker", slug: "docker", color: "2496ED", core: false },
        { name: "Cloudinary", slug: "cloudinary", color: "3448C5", core: false },
        { name: "Vercel", slug: "vercel", color: "FFFFFF", core: false },
        { name: "Netlify", slug: "netlify", color: "00C7B7", core: false },
        { name: "Git", slug: "git", color: "F05032", core: false },
        { name: "GitHub", slug: "github", color: "FFFFFF", core: false },
        { name: "Postman", slug: "postman", color: "FF6C37", core: false },
        { name: "Cursor", slug: "cursor", color: "FFFFFF", core: false },
        { name: "Bitbucket", slug: "bitbucket", color: "0052CC", core: false },
        { name: "Jira", slug: "jira", color: "0052CC", core: false },
      ],
    },
  ];
  
  const expCards = [
    {
      review:
        "Akshat brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "https://webnexus.in/webnexus-logo.png",
      logoPath: "/images/logo5.jpg",
      title: "Software Engineer",
      date: "May 2025 - Present",
      responsibilities: [
        `Led the migration of a legacy React application from Material UI v3 to v7, upgrading 100+ UI components across three
          framework versions with zero functional regressions, completing the migration in 2 days using Cursor.`,
        `Root-caused and resolved a critical rendering issue affecting legacy iOS 14 devices, where modals collapsed and layouts broke
          for production users; engineered a device-detection solution to apply targeted CSS fixes without modifying the core codebase,
          restoring a consistent user experience.`,
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review:
        "Akshat's contributions to web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "https://shastriya.com/logo.png",
      logoPath: "/images/logo6.png",
      title: "Associate Software Engineer",
      date: "Jan 2024 - Feb 2025 (1 Year 2 Months)",
      responsibilities: [
        `Developed a full-stack Academic ERP platform from scratch, delivering 100+ reusable React/Next.js components across
         Student, Teacher, Admin, Attendance, Fee Management, and Transportation modules.`,
        `Engineered 50+ RESTful APIs using Django REST Framework, PostgreSQL, Django ORM, and JWT Authentication to
         support student lifecycle management, attendance, meetings, fee collection, and administrative workflows.`,
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      ],
    },
    // {
    //   review:
    //     "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    //   imgPath: "/images/exp3.png",
    //   logoPath: "/images/logo3.png",
    //   title: "React Native Developer",
    //   date: "March 2019 - May 2020",
    //   responsibilities: [
    //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
    //     "Improved app performance and user experience through code optimization and testing.",
    //     "Coordinated with the product team to implement features based on feedback.",
    //   ],
    // },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/as_its_aksh/",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/",
      imgPath: "/images/fb.png",
    },
    // {
    //   name: "x",
    //   url: "https://www.x.com/",
    //   imgPath: "/images/x.png",
    // },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/its-akshat-saxena/",
      imgPath: "/images/linkedin.png",
    },
    {
      name: "github",
      url: "https://github.com/AKSHAT249",
      imgPath: "/images/github.png",
    },
  ];
  
  export {
    words,
    abilities,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackSkills,
    navLinks,
  };