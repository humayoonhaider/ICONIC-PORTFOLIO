import tistMisDashboard from '../assets/images/tist_mis_dashboard_1790870484242.jpg';
import aureliaGrandHotel from '../assets/images/aurelia_grand_hotel_1790873969412.jpg';
import aooexStore from '../assets/images/aooex_store_ecommerce_1790874150620.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Aurelia Grand Hotel",
    category: "Luxury Hospitality & Web Application",
    year: "2025",
    description: "A luxury 5-star hotel & resort web application engineered with a clean, high-conversion reservation workflow. Includes interactive suite showcases, dynamic amenity discovery, virtual dining menus, event booking, and a mobile-optimized guest experience.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "UI/UX Architecture", "Vercel", "Responsive Web"],
    image: aureliaGrandHotel || "/images/aurelia_grand_hotel.jpg",
    liveUrl: "https://aureliagrandhotel.vercel.app/",
    githubUrl: "https://github.com/ubaidahmad/aurelia-grand-hotel",
    featured: true
  },
  {
    id: "02",
    title: "Aooex Store — E-Commerce",
    category: "E-Commerce & Digital Storefront",
    year: "2025",
    description: "A modern full-featured e-commerce shopping platform featuring dynamic product catalogs, multi-category filtering, persistent shopping cart state management, checkout workflows, instant product search, and responsive mobile-first UI.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Redux / Context API", "Vite", "Vercel", "RESTful APIs"],
    image: aooexStore || "/images/aooex_store_ecommerce.jpg",
    liveUrl: "https://e-commerece-shop.vercel.app/",
    githubUrl: "https://github.com/ubaidahmad/aooex-ecommerce-store",
    featured: true
  },
  {
    id: "03",
    title: "Taleem Institute of Science & Technology (TIST)",
    category: "Enterprise MIS & Web Portal",
    year: "2026",
    description: "Comprehensive institutional Management Information System (MIS) and academic portal. Built with secure role-based access control (RBAC), student records management, faculty workflows, fee billing tracking, and responsive administration interfaces.",
    technologies: ["React.js", "Node.js", "MySQL", "JavaScript", "Bootstrap", "Tailwind CSS", "RESTful APIs"],
    image: tistMisDashboard || "/images/tist_mis_dashboard.jpg",
    liveUrl: "https://taleeminstitute.online",
    githubUrl: "https://github.com/ubaidahmad/tist-mis-portal",
    featured: true
  }
];
