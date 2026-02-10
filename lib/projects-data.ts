export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  projectUrl?: string
}

export const projects: Project[] = [


   {
  id: "project_req_ads",
  title: "Req Ads Digital – Creative & Technology Agency Website",
  description:
    "A modern agency website built to showcase creative services, digital solutions, and brand storytelling for Req Ads Digital.",
  longDescription:
    "Req Ads Digital is a creative and technology agency specializing in web design, mobile applications, advertising production, and digital content creation. This project focuses on delivering a high-impact frontend experience built with Next.js, combined with a scalable Laravel-based CMS that allows the agency team to manage content, services, and projects dynamically. The CMS is currently under development and will be integrated soon.",
  problem:
    "Creative agencies often struggle to present their services and portfolio through a flexible system that allows both strong visual storytelling and easy content management.",
  solution:
    "Developed a high-performance agency frontend using Next.js for speed, SEO, and modern UI, while building a custom Laravel CMS to give the agency full control over content, services, and portfolio updates.",
  features: [
    "High-impact agency landing pages",
    "Services and capabilities sections",
    "Portfolio & work showcase",
    "SEO-optimized frontend with Next.js",
    "Custom Laravel CMS (in progress)",
    "Scalable content management structure",
    "Responsive and performance-focused UI"
  ],
  technologies: [
    "Next.js",
    "React",
    "Laravel",
    "PHP",
    "MySQL",
    "REST API",
    "Tailwind CSS"
  ],
  image:  "/image/reqads_digital.PNG",
  projectUrl: "https://reqads-digital.vercel.app/",
  // status: "Coming Soon"
},

  
  {
    id: "project_1",
    title: "Locate – Store Management & Admin Platform",
  description:
  "A centralized admin platform for managing stores, store owners, products, and orders through a structured Laravel-based dashboard.",
    longDescription:
  "Locate is a Laravel-based admin platform designed to manage multiple stores from a single dashboard. The system allows platform owners and administrators to control stores, store owners, products, orders, and user roles through a clean and scalable architecture.",
 problem:
  "Managing multiple stores, admins, products, and orders without a centralized system leads to scattered data, manual workflows, and limited visibility for platform administrators.",
   solution:
  "Developed a Laravel-based admin system that centralizes store management, product control, and order tracking within a role-based dashboard, providing better organization and easier system administration.",
  features: [
  "Role-based admin authentication",
  "Multi-store management",
  "Store owners and admins management",
  "Products and orders management",
  "Structured dashboard with sidebar navigation",
  "Broadcast and notification system",
  "Reports and summary views"
],
   technologies: [
  "Laravel",
  "PHP",
  "MySQL",
  "REST API",
  "Firebase (Notifications)",
  "Telr Payment Gateway"
],
    image: "/image/locate.png",
    projectUrl: "https://locate.shinefy.co/login",
  },


{
  id: "first-avenue-real-estate",
  title: "First Avenue – Real Estate Corporate Website",
  description:
    "A modern corporate website for a real estate development company, featuring projects showcase, media center, and dynamic content powered by APIs.",

  longDescription:
    "First Avenue is a professional real estate corporate website built to represent The First Avenue for Real Estate Development Company. The platform highlights company projects, media center news, and corporate information through a clean UI, responsive design, and dynamic data fetched from APIs. The website is optimized for performance, scalability, and SEO, serving both Arabic and English audiences.",

  problem:
    "The company needed a modern, scalable corporate website to present its real estate projects, media updates, and company profile in a professional way, replacing static pages with a dynamic and maintainable solution.",

  solution:
    "Developed a fully responsive corporate website using Next.js with a component-based architecture, dynamic routing, and API integration to manage projects and media content efficiently.",

  features: [
    "Corporate website with modern UI/UX",
    "Projects listing and detailed project pages",
    "Media Center with news and announcements",
    "Dynamic content powered by REST APIs",
    "Multi-section homepage (Hero, Projects, Media, About)",
    "Responsive design for all screen sizes",
    "SEO-friendly pages with optimized performance"
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST API"
  ],

  projectUrl: "https://www.the1stavenue.com.sa/",
  image: "/image/relstatw.png"
},


{
  id: "the-smile-cosmetics",
  title: "The Smile Cosmetics – Brand & Product Website",
  description:
    "A modern brand website for a cosmetics company, showcasing products, partner pharmacies, and company information with a clean and elegant UI.",

  longDescription:
    "The Smile Cosmetics is a professional brand website built to present a cosmetics company and its products in a modern, elegant, and user-friendly way. The website includes a product catalog with detailed product pages, an About Us section, partner pharmacies listing, career application form, and interactive map integration. The platform focuses on performance, clean UI/UX, and clear brand identity, supporting both English and Arabic content.",

  problem:
    "The company needed a professional online presence to showcase its cosmetic products, build brand trust, and provide clear access to product details, partner pharmacies, and career opportunities.",

  solution:
    "Developed a responsive brand website using Next.js and React with dynamic routing for products, reusable components, and clean UI sections. Integrated maps, forms, and structured content to support business growth and brand visibility.",

  features: [
    "Brand-focused landing page with hero section",
    "Products listing with detailed product pages",
    "Partner pharmacies section with branches",
    "Career application form",
    "About Us and company story sections",
    "Interactive map integration",
    "Responsive design for all devices",
    "Multi-language support (Arabic / English ready)"
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
    "Google Maps"
  ],

  projectUrl: "https://smile-cosmetics.42web.io/",
  image: "/image/thesmile.png"
},



{
  id: "hotel-booking-platform-ui-refactor",
  title: "Hotel Booking Platform – UI/UX & Responsive Refactor",
  description:
    "A large-scale hotel booking platform where I redesigned the UI, fixed responsiveness issues, and improved the overall user experience across all devices.",
  longDescription:
    "This project involved working on an existing hotel booking platform built with Laravel Blade. The system had usability and responsiveness issues, especially on mobile and tablet devices. I fully restructured the frontend layout, improved the visual hierarchy, fixed broken responsive behavior, and enhanced the user flow across search, listing, and hotel details pages. The goal was to make the platform production-ready and user-friendly without changing the core backend logic.",
  problem:
    "The platform was not fully responsive and suffered from inconsistent layouts, poor mobile experience, and difficult navigation, which negatively impacted user engagement and booking flow.",
  solution:
    "I refactored the frontend structure, redesigned key pages, fixed responsive breakpoints, and improved UI consistency while keeping the existing Laravel Blade architecture intact. This resulted in a smoother booking experience across desktop, tablet, and mobile devices.",
  features: [
    "Complete UI redesign for hotel listings and details pages",
    "Responsive layout fixes for mobile and tablet devices",
    "Improved booking flow and usability",
    "Enhanced visual hierarchy and spacing",
    "Refactored Blade templates for maintainability",
    "Cross-browser compatibility improvements",
  ],
  technologies: [
    "Laravel",
    "Blade Templates",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Responsive Design",
  ],
  image: "/image/image.png",
  projectUrl: "https://iqamti.com",
},



{
  id: "almadinah-technology-website",
  title: "Al Madinah Technology – Corporate Website",
  description:
    "A fully custom corporate website designed and developed from scratch using React, focusing on performance, scalability, and modern UI.",

  longDescription:
    "Al Madinah Technology is a complete corporate website that I designed and developed from scratch using React. The project covers everything from UI/UX design and layout structure to frontend architecture and component-based development. The website was built to be scalable, visually modern, and fully responsive across all devices. Although the project is not yet deployed by the client, the full implementation is completed and maintained on GitHub.",

  problem:
    "The client needed a modern corporate website that reflects their brand identity and services without relying on templates or pre-built themes.",

  solution:
    "I designed the UI from scratch, structured the project using reusable React components, optimized performance, and implemented responsive layouts to ensure a smooth experience on all screen sizes.",

  features: [
    "Custom UI/UX design from scratch",
    "Component-based architecture",
    "Fully responsive layout",
    "Clean and scalable React structure",
    "Optimized performance",
    "Modern animations and interactions"
  ],

  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "CSS",
    "REST APIs"
  ],

  image: "/image/almadina.png",
  projectUrl: "https://almadina-almonawara-gn5h.vercel.app/",
},


{
  id: "hotel-booking-platform",
  title: "Hotel Booking Platform – UI Redesign & Frontend Refactor",
  description:
    "Redesigned and refactored a large-scale hotel booking platform with a focus on responsiveness, usability, and modern UI practices.",
  longDescription:
    "This project involved working on an existing Laravel Blade-based hotel booking system. The original platform lacked proper responsiveness and had multiple UI and layout issues across devices. I redesigned the full frontend interface, fixed responsive breakpoints, improved user flows, and restructured Blade templates to be cleaner and more maintainable — all while keeping the backend logic intact.",
  problem:
    "The platform suffered from poor mobile responsiveness, inconsistent layouts, and a tightly coupled Blade structure that made frontend updates difficult.",
  solution:
    "I redesigned the entire UI, rebuilt responsive layouts, refactored Blade views into reusable components, and optimized the frontend without breaking the existing backend logic.",
  features: [
    "Fully responsive redesign",
    "Improved booking flow UX",
    "Blade template refactoring",
    "Cross-device compatibility",
    "UI performance optimization",
  ],
  technologies: [
    "Laravel",
    "Blade",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap"
  ],
  image: "/image/vilaaa.PNG",
  projectUrl: "https://iqamti.com"
},









]
