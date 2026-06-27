import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  company: string;
  rating: number;
  quote: string;
  author: string;
  tag: string;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    company: "GTD Trademark",
    rating: 5,
    quote: "Amit delivered exactly what we needed. Our website is modern, professional, mobile-friendly, and reflects our legal services perfectly. The communication and support throughout the project were excellent.",
    author: "GTD Trademark Team",
    tag: "Legal Services",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-100"
  },
  {
    id: 2,
    company: "BBCO Exporter Hub",
    rating: 5,
    quote: "The website has significantly improved our online presence. Amit understood our export business requirements and created a clean, professional platform for international clients.",
    author: "BBCO Exporter Hub",
    tag: "Export & Trade",
    color: "from-amber-500/10 to-orange-500/10 border-orange-100"
  },
  {
    id: 3,
    company: "One Digital Bharat",
    rating: 5,
    quote: "Working with Amit was a fantastic experience. He built a fast, responsive website with excellent branding and user experience. Highly recommended for digital projects.",
    author: "One Digital Bharat",
    tag: "Digital Agency",
    color: "from-violet-500/10 to-purple-500/10 border-purple-100"
  },
  {
    id: 4,
    company: "Prime Property Bang",
    rating: 5,
    quote: "Our real estate website looks premium and performs smoothly across all devices. The attention to detail and design quality exceeded our expectations.",
    author: "Prime Property Bang",
    tag: "Real Estate",
    color: "from-emerald-500/10 to-teal-500/10 border-teal-100"
  },
  {
    id: 5,
    company: "GR Ginger",
    rating: 5,
    quote: "Amit created a beautiful product-focused website that showcases our premium ginger products professionally. The website is simple, fast, and visually appealing.",
    author: "GR Ginger",
    tag: "Agri-Tech & E-commerce",
    color: "from-rose-500/10 to-red-500/10 border-red-100"
  },
  {
    id: 6,
    company: "Prasab Communication Pvt. Ltd.",
    rating: 5,
    quote: "The website represents our telecom services perfectly. Professional design, smooth performance, and timely delivery made this project a success.",
    author: "Prasab Communication Pvt. Ltd.",
    tag: "Telecom Services",
    color: "from-sky-500/10 to-cyan-500/10 border-sky-100"
  },
  {
    id: 7,
    company: "Global Edu Campus",
    rating: 5,
    quote: "The education portal is clean, informative, and easy for students and parents to navigate. Amit delivered exactly what we envisioned.",
    author: "Global Edu Campus",
    tag: "Education",
    color: "from-indigo-500/10 to-pink-500/10 border-indigo-100"
  },
  {
    id: 8,
    company: "Kalighat Shakti Peeth Seva Samiti",
    rating: 5,
    quote: "Amit developed a meaningful and easy-to-use website that helps devotees access information and services efficiently. We appreciate his dedication and professionalism.",
    author: "Kalighat Shakti Peeth Seva Samiti",
    tag: "Non-Profit & Community",
    color: "from-amber-500/10 to-yellow-500/10 border-yellow-100"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(() => {
        slideNext();
      }, 6000); // changes slide every 6 seconds
    } else {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    }

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [isAutoPlaying, activeIndex]);

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-white dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-100/30 dark:bg-red-950/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-100/30 dark:bg-blue-950/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 dark:bg-red-950/25 text-red-600 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-red-100 dark:border-red-900/30">
              <MessageSquare size={14} /> Client Endorsements
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              Trusted by <span className="text-red-500 dark:text-red-400">Industry Leaders</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              Don't just take my word for it. Here is what business owners, export companies, and community organizations say about collaborating with Amit.
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card View */}
          <div className="relative overflow-hidden min-h-[380px] sm:min-h-[340px] md:min-h-[300px] flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 shadow-slate-100/50 dark:shadow-none transition-colors duration-300">
            {/* Quote Icon Background */}
            <Quote className="absolute top-8 left-8 text-slate-100/80 dark:text-slate-800/10 w-24 h-24 -z-0 pointer-events-none transform -rotate-12" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full relative z-10 flex flex-col items-center text-center"
              >
                {/* Tag Badge */}
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-bold tracking-wide mb-6 uppercase">
                  {activeTestimonial.tag}
                </span>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {Array.from({ length: activeTestimonial.rating }).map((_, index) => (
                    <Star key={index} size={20} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Feedback Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 leading-relaxed max-w-3xl mb-8 font-sans px-4">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Metadata */}
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-red-500 dark:text-red-400 font-extrabold uppercase tracking-widest mt-1">
                    {activeTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Controls */}
          <div className="flex justify-between items-center mt-8 px-4">
            {/* Dots Pagination */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-red-500 dark:bg-red-400' 
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  slidePrev();
                  setIsAutoPlaying(false);
                }}
                className="p-3 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 transition-all hover:scale-110 active:scale-95 shadow-md shadow-slate-100 dark:shadow-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => {
                  slideNext();
                  setIsAutoPlaying(false);
                }}
                className="p-3 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 transition-all hover:scale-110 active:scale-95 shadow-md shadow-slate-100 dark:shadow-none"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
