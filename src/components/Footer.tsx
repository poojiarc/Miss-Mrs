import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Youtube, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                <span className="text-foreground">Miss </span>
                <span className="gradient-text"> &amp; Mrs</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover your talent, showcase your passion. Join the most prestigious audition platform for dancers, singers, actors, and artists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Events', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-').replace('-us', '')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@missandmrs.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +91 7893230557
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
               Hyderabad,Melbourne,London Global
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Stay connected for updates on upcoming auditions and events.
            </p>
          </div>
        </div>

        {/* <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Miss & Mrs. All rights reserved.
          </p>
          <div className="border-t border-black-700 mt-4 pt-4 text-center text-sm text-black-400">
          
          <div className="flex justify-center items-center">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
          </div>
        </div> */}
        <footer className="mt-12 border-t border-border pt-8 pb-6 text-center">
  {/* Copyright Line */}
  <p className="text-sm text-muted-foreground">
    © {new Date().getFullYear()} Miss & Mrs. All rights reserved.
  </p>

  {/* Attribution Line */}
  <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
    <span>Made with</span>
    <Heart className="h-4 w-4 fill-red-500 text-red-500 animate-pulse" />
    <span>by</span>
    <a
      href="https://staffarc.in"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 font-medium text-orange-600 transition-colors hover:text-orange-700"
    >
      <img
        src="https://www.staffarc.in/images/Staffarc-logo.png"
        alt="StaffArc Logo"
        loading="lazy"
        className="h-5 w-5 object-contain grayscale transition-all group-hover:grayscale-0"
      />
      <span className="group-hover:underline decoration-orange-600/30 underline-offset-4">
        StaffArc
      </span>
    </a>
  </div>
</footer>
        
      </div>
    </footer>
  );
};

export default Footer;
