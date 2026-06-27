import React from 'react';
import { Project, Service, SocialLink } from './types';
import { 
  Code, 
  Palette, 
  Megaphone, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Phone,
  Search,
  Layout,
  Share2,
  ShieldCheck
} from 'lucide-react';

// --- IMPORTANT: IMAGE PLACEHOLDERS ---
export const IMAGES = {
  // Red Suit Portrait (About Section)
  PROFILE_PORTRAIT: "https://lh3.googleusercontent.com/d/10tIvb5Nh13ZRBZwrho4F4cHXeenxw4IO", 
  // Navbar Logo
  LOGO: "https://lh3.googleusercontent.com/d/16JYpHwWmDaEZC5VXjCreiyxMFrDQI68j",
  // Hero Section Image
  HERO_WORKING: "https://lh3.googleusercontent.com/d/1N8nN-cFAIl8q3bd7IqFHRJfaa9o8jI1B",
  // Client Logos Collage (Portfolio)
  PORTFOLIO_BG: "https://lh3.googleusercontent.com/d/1dy0tAnxGeS4pAMdzBv3ZqO6YX11nbWn0"
};

export const RESUME_URL = "https://lh3.googleusercontent.com/d/10b1fSuLF6U8zeT4ig-68OwqMdxv54PnJ";

export const CONTACT_INFO = {
  name: "Amit Kumar",
  title: "Web Developer | Graphic Designer | Digital Marketer",
  email: "blogbyamit62051@gmail.com",
  phone: "+91 6205120223",
  address: "Bangalore, India",
  whatsappUrl: "https://wa.me/916205120223"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/amit-kumar62051",
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/growwithus__12/",
    icon: <Instagram className="w-5 h-5" />
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100094611630246",
    icon: <Facebook className="w-5 h-5" />
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: "Web Design & Development",
    description: "Custom responsive websites built with modern technologies. From personal portfolios to E-commerce solutions like Global Warehouse.",
    icon: <Code className="w-10 h-10 text-red-500" />
  },
  {
    id: '2',
    title: "Graphic Design",
    description: "Creative visual solutions including posters, business cards, logos, YouTube thumbnails, and brand identity packages.",
    icon: <Palette className="w-10 h-10 text-red-500" />
  },
  {
    id: '3',
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies including Google Ads, Facebook/Instagram Ads, SEO, Email Marketing, and WhatsApp campaigns.",
    icon: <Megaphone className="w-10 h-10 text-red-500" />
  },
  {
    id: '4',
    title: "Social Media Management",
    description: "Managing your digital presence to grow your audience and engage with customers across all major platforms.",
    icon: <Share2 className="w-10 h-10 text-red-500" />
  },
  {
    id: '5',
    title: "SEO Optimization",
    description: "Improving your website ranking on Google to drive organic traffic and increase visibility.",
    icon: <Search className="w-10 h-10 text-red-500" />
  },
  {
    id: '6',
    title: "Trademark Registration Service",
    description: "Register Your Brand and protect your business identity with professional trademark filing services.",
    icon: <ShieldCheck className="w-10 h-10 text-red-500" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "GTD Trademark",
    category: "Legal & Compliance",
    description: "A leading legal and compliance services brand in India offering trademark registration, business registration, and intellectual property solutions across PAN India.",
    imageUrl: "https://lh3.googleusercontent.com/d/1r456QYCKIvLJFS19uDDwQ8HGVNIK9qtn", 
    link: "https://www.gtdtrademark.com/"
  },
  {
    id: 'p2',
    title: "BBCO Exporter Hub",
    category: "Export & Trade",
    description: "A global export solutions provider specializing in automotive and industrial parts, sourcing, documentation, and international trade support.",
    imageUrl: "https://lh3.googleusercontent.com/d/1KvsgmkqVMKwdDR7gbqjSiT3fG2WFK3In", 
    link: "https://www.bbcoexporterhub.com/"
  },
  {
    id: 'p3',
    title: "One Digital Bharat",
    category: "Digital Agency",
    description: "A digital services brand empowering Indian businesses with website development, digital marketing, branding, and technology-driven growth solutions.",
    imageUrl: "https://lh3.googleusercontent.com/d/15YvvZm_o1RB2LjP7tqfGWyIjGnEk4BJS", 
    link: "https://www.onedigitalbharat.com/"
  },
  {
    id: 'p4',
    title: "Prime Property Bang",
    category: "Real Estate",
    description: "A trusted real estate consultancy specializing in office purchase, sale, and office rent in Kolkata.",
    imageUrl: "https://lh3.googleusercontent.com/d/1CBpRJpAaI9IIv24fAT6drWVVGuBFr7r0", 
    link: "https://www.primepropertybang.com/"
  },
  {
    id: 'p5',
    title: "GR Ginger",
    category: "Agriculture & Food",
    description: "A product-focused website showcasing premium-quality ginger sourced directly from trusted farms.",
    imageUrl: "https://lh3.googleusercontent.com/d/1KNnih-bOSFnLSYdWkB4E_qaCdgiyZeUa", 
    link: "https://www.grginger.com/"
  },
  {
    id: 'p6',
    title: "Prasab Communication Pvt. Ltd.",
    category: "Telecom & Tech",
    description: "A telecom and technology service company focused on network integration, telecom automation, and technical learning.",
    imageUrl: "https://lh3.googleusercontent.com/d/16JYpHwWmDaEZC5VXjCreiyxMFrDQI68j", 
    link: "https://www.prasabcpl.com/"
  },
  {
    id: 'p7',
    title: "Global Edu Campus",
    category: "Education",
    description: "An educational organization focused on improving academic quality and teaching standards in schools.",
    imageUrl: "https://lh3.googleusercontent.com/d/1N8nN-cFAIl8q3bd7IqFHRJfaa9o8jI1B", 
    link: "https://www.globaleducampus.com/"
  },
  {
    id: 'p8',
    title: "Kalighat Shakti Peeth Seva Samiti",
    category: "Social Service",
    description: "A social service organization dedicated to seva, support, and helping devotees and tourists in Kolkata.",
    imageUrl: "https://lh3.googleusercontent.com/d/1L7jX0L4XVI5P7ejkZPY1-spG-77E1hZC", 
    link: "https://www.kalighatshaktipeeth.com/"
  },
  {
    id: 'p9',
    title: "Usha International School",
    category: "Education",
    description: "A premium, fully responsive academic portal built for Usha International School, Patna. Designed with clean school-centric aesthetics, parent-teacher resources, online admission systems, and interactive curriculum pathways.",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80", 
    link: "https://www.ushainternationalschool.com/"
  }
];

export const GRAPHIC_DESIGNS = [
  { id: 'g1', title: "Brand Identity Pack", type: "Logo Design", imageUrl: "COLLAGE" },
  { id: 'g2', title: "Marketing Poster", type: "Marketing Material", imageUrl: "https://lh3.googleusercontent.com/d/1Qk6SuuZm2Bo_0MxmLfQQkE1W7rLUC5Sk" },
  { id: 'g3', title: "Social Media Kit", type: "Social Graphics", imageUrl: "https://lh3.googleusercontent.com/d/1DkdRjyJoMvr_IauVLPYinDLntz7uh773" },
  { id: 'g4', title: "Business Card Design", type: "Print Design", imageUrl: "https://lh3.googleusercontent.com/d/1ZS3cJCYMVBfYRBl8JkkfHPusd31nioR8" },
];

export const MARKETING_CAMPAIGNS = [
  { id: 'm1', title: "Lead Generation", type: "Facebook Ads", result: "500+ Leads" },
  { id: 'm2', title: "Brand Awareness", type: "Instagram Growth", result: "10k+ Engagement" },
  { id: 'm3', title: "Service Sales Boost", type: "Facebook Ads", result: "200% ROI" },
];