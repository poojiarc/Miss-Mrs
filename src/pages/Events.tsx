import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import EventCarousel from '@/components/EventCarousel';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

import eventTalentShow from '@/assets/event-talent-show.jpg';
import eventDanceFest from '@/assets/event-dance-fest.jpg';
import eventMusicNight from '@/assets/event-music-night.jpg';
import eventFashionWeek from '@/assets/event-fashion-week.jpg';

const events = [
  {
    id: 1,
    title: 'Grand Talent Competition 2026',
    date: 'March 15-17, 2026',
    location: 'Mumbai, India',
    image: eventTalentShow,
    description: 'The biggest talent hunt of the year. Showcase your skills and compete with the best performers across all categories.',
  },
  {
    id: 2,
    title: 'National Dance Festival',
    date: 'April 20-22, 2026',
    location: 'Delhi, India',
    image: eventDanceFest,
    description: 'A celebration of movement and rhythm. From classical to contemporary, find your groove at this prestigious dance event.',
  },
  {
    id: 3,
    title: 'Music Audition Night',
    date: 'May 10, 2026',
    location: 'Bangalore, India',
    image: eventMusicNight,
    description: 'Your voice deserves to be heard. Join us for an electrifying night of musical performances and discoveries.',
  },
  {
    id: 4,
    title: 'Fashion Week Casting',
    date: 'June 5-8, 2026',
    location: 'Mumbai, India',
    image: eventFashionWeek,
    description: 'Walk the runway at one of India\'s most prestigious fashion events. Models and designers unite!',
  },
];

const upcomingEvents = [
  {
    id: 5,
    title: 'Actor\'s Workshop & Audition',
    date: 'July 12, 2026',
    location: 'Chennai, India',
    image: eventTalentShow,
    category: 'Acting',
  },
  {
    id: 6,
    title: 'DJ Battle Championship',
    date: 'August 8, 2026',
    location: 'Goa, India',
    image: eventMusicNight,
    category: 'Music',
  },
  {
    id: 7,
    title: 'Classical Dance Showcase',
    date: 'September 15, 2026',
    location: 'Kolkata, India',
    image: eventDanceFest,
    category: 'Dance',
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Upcoming Events"
            title="Find Your Perfect Stage"
            description="Discover auditions and events tailored to your talent. From grand competitions to intimate showcases, your moment awaits."
          />
        </div>
      </section>

      {/* Main Carousel */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <EventCarousel events={events} />
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold mb-8"
          >
            More <span className="gradient-text">Events</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                  </div>
                  
                  <Link to="/register">
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      Apply Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Don't Miss Any <span className="gradient-text">Event</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-6"
            >
              Register now and be the first to know about upcoming auditions and events.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/register">
                <Button variant="hero" size="lg">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
