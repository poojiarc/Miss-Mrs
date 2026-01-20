import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const roles = [
  { value: 'dancing', label: '💃 Dancing' },
  { value: 'singing', label: '🎤 Singing' },
  { value: 'acting', label: '🎬 Acting' },
  { value: 'dj-music', label: '🎧 DJ / Music' },
  { value: 'modeling', label: '👗 Modeling' },
  { value: 'other', label: '✨ Other' },
];

const events = [
  { value: 'grand-talent-2026', label: 'Grand Talent Competition 2026' },
  { value: 'dance-festival', label: 'National Dance Festival' },
  { value: 'music-night', label: 'Music Audition Night' },
  { value: 'fashion-week', label: 'Fashion Week Casting' },
  { value: 'general', label: 'General Application' },
];

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    city: '',
    role: '',
    event: '',
    experience: '',
  });
  const [photoName, setPhotoName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.role) {
      toast({
        title: 'Missing required fields',
        description: 'Please fill in your name, phone number, and select a role.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Get role and event labels
    const roleLabel = roles.find(r => r.value === formData.role)?.label.replace(/[^\w\s]/g, '').trim() || formData.role;
    const eventLabel = events.find(e => e.value === formData.event)?.label || 'General Application';

    // Construct WhatsApp message
    const whatsappNumber = '919876543210'; // Replace with actual WhatsApp number
    
    let message = `Hello! I want to apply for an audition.

📋 *Application Details*
━━━━━━━━━━━━━━━
👤 Name: ${formData.fullName.trim()}
📅 Age: ${formData.age || 'Not specified'}
📱 Phone: ${formData.phone.trim()}
📧 Email: ${formData.email.trim() || 'Not provided'}
🏙️ City: ${formData.city.trim() || 'Not specified'}

🎭 Role: ${roleLabel}
🎪 Event: ${eventLabel}`;

    if (formData.experience.trim()) {
      message += `

📝 Experience/Bio:
${formData.experience.trim()}`;
    }

    message += `

━━━━━━━━━━━━━━━
Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Brief loading then redirect to WhatsApp
    setTimeout(() => {
      window.location.href = whatsappUrl;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Join Us"
            title="Apply for Auditions"
            description="Fill out the form below to register for our upcoming auditions. Your journey to stardom begins here!"
          />
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10">
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Registration Form</h3>
                  <p className="text-sm text-muted-foreground">All fields marked * are required</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={handleChange}
                      min="5"
                      max="100"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={15}
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={255}
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    maxLength={100}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <Label>Role Interested In *</Label>
                  <Select onValueChange={(value) => handleSelectChange('role', value)} value={formData.role}>
                    <SelectTrigger className="bg-muted/50 border-border focus:border-primary">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Event Selection */}
                <div className="space-y-2">
                  <Label>Event (Optional)</Label>
                  <Select onValueChange={(value) => handleSelectChange('event', value)} value={formData.event}>
                    <SelectTrigger className="bg-muted/50 border-border focus:border-primary">
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      {events.map((event) => (
                        <SelectItem key={event.value} value={event.value}>
                          {event.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <Label htmlFor="experience">Short Bio / Experience</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Tell us about your experience, training, or why you want to audition..."
                    value={formData.experience}
                    onChange={handleChange}
                    maxLength={500}
                    rows={4}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {formData.experience.length}/500 characters
                  </p>
                </div>

                {/* Photo Upload (UI Only) */}
                <div className="space-y-2">
                  <Label>Upload Photo (Optional)</Label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-dashed border-border hover:border-primary/50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Upload className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {photoName || 'Click to upload your photo'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          JPG, PNG up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting, you'll be redirected to WhatsApp to complete your registration.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
