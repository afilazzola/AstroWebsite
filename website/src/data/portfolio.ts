// Single source of truth for portfolio showcases.
// `featured` controls which sites appear on the homepage.
export interface PortfolioSite {
  title: string;
  url: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  features: string[];
  featured: boolean;
}

export const portfolioSites: PortfolioSite[] = [
  {
    title: "La Poche",
    url: "https://lapoche.ca/",
    description:
      "A multifunctional venue in downtown Guelph featuring a barbershop, co-working space, and intimate evening bar with live music events. The site needed to convey the unique atmosphere and multiple services while maintaining a cohesive brand identity.",
    shortDescription:
      "A multifunctional venue in downtown Guelph featuring a barbershop, co-working space, and intimate evening bar.",
    image: "/assets/la-poche.jpg",
    tags: ["Business", "Hospitality", "Local"],
    features: ["Custom design", "Event calendar", "Mobile responsive", "SEO optimized"],
    featured: true,
  },
  {
    title: "Eric Greenwood Piano Studio",
    url: "https://ericgreenwoodpiano.com/",
    description:
      "Classical piano lessons in Guelph for children, teens, and adults. A clean, professional site for a local piano teacher covering lesson details, the Royal Conservatory of Music curriculum, new student enrollment, and an easy way for families to get in touch.",
    shortDescription:
      "Classical piano lessons in Guelph — lesson info, RCM curriculum, and new student enrollment for a local piano teacher.",
    image: "/assets/eric-greenwood-piano.jpg",
    tags: ["Music", "Education", "Local"],
    features: ["Lesson information", "RCM curriculum", "New student enrollment", "Contact form"],
    featured: true,
  },
  {
    title: "Amanda Liczner",
    url: "https://www.amandaliczner.ca/",
    description:
      "Professional portfolio for a conservation biologist specializing in bumble bee ecology and ecosystem restoration research. The site showcases academic publications, research projects, and professional experience in an accessible format.",
    shortDescription:
      "Professional portfolio for a conservation biologist specializing in bumble bee ecology and ecosystem restoration.",
    image: "/assets/amanda-liczner.jpg",
    tags: ["Portfolio", "Research", "Academic"],
    features: ["Publication showcase", "Research gallery", "CV integration", "Clean typography"],
    featured: true,
  },
  {
    title: "Armstrong Coaching",
    url: "https://armstrong-coaching.com/",
    description:
      "Personal training and lifestyle coaching practice combining strength training expertise with holistic wellness guidance. The site emphasizes the personal approach and transformation journey with compelling visuals and clear service offerings.",
    shortDescription:
      "Personal training and lifestyle coaching practice combining strength training with holistic wellness guidance.",
    image: "/assets/armstrong-coaching.jpg",
    tags: ["Coaching", "Fitness", "Wellness"],
    features: ["Service packages", "Testimonials", "Contact forms", "Brand identity"],
    featured: true,
  },
  {
    title: "Legendary DnD",
    url: "https://legendarydnd.ca/",
    description:
      "An online platform for Dungeons & Dragons enthusiasts featuring campaign resources, character building tools, and community content. Built to serve the tabletop gaming community with an intuitive, immersive experience.",
    shortDescription:
      "An online platform for Dungeons & Dragons enthusiasts featuring campaign resources, character tools, and community content.",
    image: "/assets/legendary-dnd.jpg",
    tags: ["Gaming", "Community", "Entertainment"],
    features: ["Campaign resources", "Character tools", "Community features", "Immersive design"],
    featured: false,
  },
  {
    title: "Cahill Lab",
    url: "https://cahilllab.ca/",
    description:
      "Research group website for an experimental plant ecology lab at the University of Alberta. Features team profiles, publication lists, and research project descriptions for prospective students and collaborators.",
    shortDescription:
      "Research group website for an experimental plant ecology lab at the University of Alberta.",
    image: "/assets/cahill-lab.jpg",
    tags: ["Research", "Academia", "Ecology"],
    features: ["Team profiles", "Publication database", "Research projects", "Academic styling"],
    featured: false,
  },
];
