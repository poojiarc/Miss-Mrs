import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface RoleCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const RoleCard = ({ title, description, image, delay = 0 }: RoleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 -mt-12 z-10">
        <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <Link to="/register">
          <Button variant="outline" size="sm" className="group/btn">
            Apply Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RoleCard;
