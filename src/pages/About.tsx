import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, ArrowRight, Heart, Target, Users, Award } from 'lucide-react';

import aboutTeam from '@/assets/about-team.jpg';

const values = [
  {
    icon: Heart,
    title: 'Passion First',
    description: 'We believe in the power of passion. Every artist who walks through our doors is driven by a love for their craft.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from organizing events to nurturing talent.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We foster a supportive community where artists can learn, grow, and inspire each other.',
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'We provide platforms for talented individuals to gain the recognition they deserve.',
  },
];

const socialLinks = [
  { icon: Youtube, url: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: Instagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
  { icon: Facebook, url: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="About Us"
            title="Where Dreams Take Flight"
            description="We are a passionate team dedicated to discovering and nurturing exceptional talent across music, dance, acting, and more."
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-50 -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                Our <span className="gradient-text">Story</span>
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to revolutionize talent discovery in India,  Miss & Mrs has grown from a small initiative to one of the country's most trusted platforms for aspiring artists.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                We understand that every artist has a unique story to tell. Our mission is to provide the stage, the guidance, and the opportunities needed to transform raw talent into polished performers.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we've helped thousands of dancers, singers, actors, and models take their first steps toward stardom. Our events have become launching pads for careers, and our community continues to grow stronger with each passing day.
              </p>

              <Link to="/register">
                <Button variant="hero" size="lg" className="mt-4">
                  Join Our Community
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our <span className="gradient-text">Values</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Connect With <span className="gradient-text">Us</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Follow us on social media for behind-the-scenes content, success stories, and updates on upcoming events.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-foreground transition-all duration-300 hover:text-primary-foreground hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Showcase Your <span className="gradient-text">Talent?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Take the first step towards your dream. Register for our upcoming auditions and let your talent shine.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/register">
                <Button variant="hero" size="xl" className="glow-effect">
                  Apply Now
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

export default About;
