// import { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// interface Event {
//   id: number;
//   title: string;
//   date: string;
//   location: string;
//   image: string;
//   description: string;
// }

// interface EventCarouselProps {
//   events: Event[];
// }

// const EventCarousel = ({ events }: EventCarouselProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % events.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
//   };

//   return (
//     <div className="relative w-full" ref={containerRef}>
//       {/* Main Carousel */}
//       <div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//             className="absolute inset-0"
//           >
//             <img
//               src={events[currentIndex].image}
//               alt={events[currentIndex].title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            
//             {/* Event Info */}
//             <div className="absolute inset-0 flex items-center">
//               <div className="container mx-auto px-4 md:px-6">
//                 <div className="max-w-xl space-y-4">
//                   <motion.h3
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="font-display text-3xl md:text-5xl font-bold"
//                   >
//                     {events[currentIndex].title}
//                   </motion.h3>
                  
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className="text-muted-foreground text-sm md:text-base"
//                   >
//                     {events[currentIndex].description}
//                   </motion.p>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                     className="flex flex-wrap gap-4 text-sm"
//                   >
//                     <span className="flex items-center gap-2 text-primary">
//                       <Calendar className="w-4 h-4" />
//                       {events[currentIndex].date}
//                     </span>
//                     <span className="flex items-center gap-2 text-muted-foreground">
//                       <MapPin className="w-4 h-4" />
//                       {events[currentIndex].location}
//                     </span>
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <Link to="/register">
//                       <Button variant="hero" size="lg">
//                         Apply Now
//                       </Button>
//                     </Link>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
//           aria-label="Previous event"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
//           aria-label="Next event"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="flex justify-center gap-2 mt-6">
//         {events.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? 'w-8 bg-primary'
//                 : 'bg-muted-foreground/30 hover:bg-muted-foreground'
//             }`}
//             aria-label={`Go to event ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCarousel;
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

interface EventCarouselProps {
  events: Event[];
}

const EventCarousel = ({ events }: EventCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoized next function so it can be used in the interval safely
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  }, [events.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Auto-scroll logic: 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div 
      className="relative w-full" 
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={events[currentIndex].image}
              alt={events[currentIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            
            {/* Event Info */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-12">
                <div className="max-w-xl space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-display text-3xl md:text-5xl font-bold"
                  >
                    {events[currentIndex].title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground text-sm md:text-base line-clamp-2 md:line-clamp-none"
                  >
                    {events[currentIndex].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-4 text-sm"
                  >
                    <span className="flex items-center gap-2 text-primary font-medium">
                      <Calendar className="w-4 h-4" />
                      {events[currentIndex].date}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {events[currentIndex].location}
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-2"
                  >
                    <Link to="/register">
                      <Button variant="hero" size="lg" className="rounded-full">
                        Apply Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Manual) */}
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
          aria-label="Previous event"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
          aria-label="Next event"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator (Manual Selection) */}
      <div className="flex justify-center gap-3 mt-6">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-10 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground'
            }`}
            aria-label={`Go to event ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;