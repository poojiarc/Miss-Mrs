import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import RoleCard from '@/components/RoleCard';
import { ArrowRight, Star, Users, Trophy, Sparkles } from 'lucide-react';

import heroImage from '@/assets/hero-stage.jpg';
import roleDancing from '@/assets/role-dancing.jpg';
import roleSinging from '@/assets/role-singing.jpg';
import roleActing from '@/assets/role-acting.jpg';
import roleMusic from '@/assets/role-music.jpg';
import roleModeling from '@/assets/role-modeling.jpg';

const roles = [
  {
    title: 'Dancing',
    description: 'Express yourself through movement. From classical to contemporary, show us your rhythm and grace.',
    image: roleDancing,
  },
  {
    title: 'Singing',
    description: 'Let your voice be heard. Whether you sing pop, classical, or indie, the stage awaits your talent.',
    image: roleSinging,
  },
  {
    title: 'Acting',
    description: 'Bring characters to life. From drama to comedy, showcase your ability to captivate audiences.',
    image: roleActing,
  },
  {
    title: 'DJ / Music',
    description: 'Create the beat that moves the crowd. Show us your mixing skills and musical creativity.',
    image: roleMusic,
  },
  {
    title: 'Modeling',
    description: 'Walk the runway with confidence. Fashion, commercial, or editorial - strut your unique style.',
    image: roleModeling,
  },
];

const stats = [
  { icon: Users, value: '10,000+', label: 'Artists Auditioned' },
  { icon: Trophy, value: '500+', label: 'Success Stories' },
  { icon: Star, value: '50+', label: 'Events Hosted' },
  { icon: Sparkles, value: '100%', label: 'Passion Driven' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Audition stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-widest uppercase mb-4"
            >
              Discover Your Talent
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              Your Talent Deserves a{' '}
              <span className="gradient-text">Stage</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Join the most prestigious audition platform for dancers, singers, actors, and artists. Your journey to stardom begins here.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/register">
                <Button variant="hero" size="xl">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="glass" size="xl">
                  Register Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-y border-border bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Audition Categories"
            title="Find Your Spotlight"
            description="Choose your talent category and take the first step towards your dreams. Every role offers a unique opportunity to showcase your skills."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {roles.map((role, index) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                image={role.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[150px] pointer-events-none" />
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Ready to Begin Your{' '}
              <span className="gradient-text">Journey?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Don't let your talent go unnoticed. Register now and get a chance to perform on the biggest stages.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/register">
                <Button variant="hero" size="xl" className="glow-effect">
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

export default Index;
