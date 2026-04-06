import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Zap, 
  DollarSign, 
  Award, 
  Car,
  Sparkles,
  Wrench
} from 'lucide-react';

const StatsCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 bg-card-bg border border-gold/20 rounded-lg">
      <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-serif font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`h-1 bg-gold mt-6 ${centered ? 'mx-auto' : ''}`}
    />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-black font-serif font-bold text-xl group-hover:scale-110 transition-transform">
              F
            </div>
            <span className="text-2xl font-serif font-bold text-gold tracking-tight">
              FIFI <span className="text-white">Touch</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-all transform hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <motion.div 
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-card-bg border-b border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium hover:text-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-gold text-black px-6 py-3 rounded-lg text-center font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#0a0a0a_100%)]" />
        <div className="absolute inset-0 gold-shimmer opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gold/10 text-gold border border-gold/30 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              📍 Edmonton's Mobile Detailing Service
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
              We Bring The Shine <br />
              <span className="text-gold italic">To Your Doorstep.</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Professional mobile car detailing — we come to you, anywhere in Edmonton. No shop, no waiting, just premium results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a 
                href="tel:587-568-2601" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105"
              >
                <Phone size={20} /> Call Now — 587-568-2601
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all"
              >
                <MessageSquare size={20} /> Get a Free Quote
              </a>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-10">
              <div className="flex items-center gap-3 text-muted">
                <Zap size={20} className="text-gold" />
                <span className="font-medium">Fast Service</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <DollarSign size={20} className="text-gold" />
                <span className="font-medium">Affordable</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Award size={20} className="text-gold" />
                <span className="font-medium">Attention to Detail</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-dark-bg">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="What We Do" 
            subtitle="Every service is done at your home, office, or wherever you are. We bring our own water and power."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: <Car size={32} />, 
                title: "Interior Detailing", 
                desc: "Deep vacuum, dashboard wipe, vents, seats, door panels, and window cleaning."
              },
              { 
                icon: <Sparkles size={32} />, 
                title: "Exterior Detailing", 
                desc: "Hand wash, foam clean, tire shine, streak-free dry, and wax protection."
              },
              { 
                icon: <Award size={32} />, 
                title: "Full Detail Package", 
                desc: "Complete interior + exterior for a showroom finish. Our most thorough service."
              },
              { 
                icon: <Wrench size={32} />, 
                title: "Add-On Services", 
                desc: "Headlight restoration, stain removal, odor elimination, and engine bay cleaning."
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-card-bg border border-white/5 rounded-2xl hover:border-gold/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(201,168,76,0.3)] relative overflow-hidden"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Simple, Honest Pricing" 
            subtitle="No hidden fees. No surprises. Just premium care for your vehicle."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Basic */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-card-bg border border-white/10 rounded-2xl text-center"
            >
              <h3 className="text-xl font-serif mb-2">Basic Detail</h3>
              <div className="text-4xl font-bold mb-6">From <span className="text-gold">$60</span></div>
              <ul className="text-muted text-sm space-y-4 mb-10">
                <li>Exterior Hand Wash</li>
                <li>Tire Shine & Rim Clean</li>
                <li>Basic Interior Wipe</li>
                <li>Window Cleaning</li>
              </ul>
              <a href="#contact" className="block w-full py-3 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all">Book This</a>
            </motion.div>

            {/* Full */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-card-bg border-2 border-gold rounded-2xl text-center relative scale-105 z-10 shadow-[0_20px_50px_-10px_rgba(201,168,76,0.2)]"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular ⭐
              </div>
              <h3 className="text-xl font-serif mb-2">Full Detail</h3>
              <div className="text-5xl font-bold mb-6 text-gold">From $120</div>
              <ul className="text-muted text-sm space-y-4 mb-10">
                <li>Complete Exterior Detail</li>
                <li>Deep Interior Vacuum</li>
                <li>Steam Clean Vents</li>
                <li>Upholstery Shampoo</li>
                <li>Leather Conditioning</li>
              </ul>
              <a href="#contact" className="block w-full py-4 bg-gold text-black rounded-full font-bold hover:bg-white transition-all">Book This</a>
            </motion.div>

            {/* Premium */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-card-bg border border-white/10 rounded-2xl text-center"
            >
              <h3 className="text-xl font-serif mb-2">Premium Detail</h3>
              <div className="text-4xl font-bold mb-6">From <span className="text-gold">$180</span></div>
              <ul className="text-muted text-sm space-y-4 mb-10">
                <li>Full Detail Package</li>
                <li>Clay Bar Treatment</li>
                <li>Paint Sealant / Wax</li>
                <li>Engine Bay Cleaning</li>
                <li>Odor Elimination</li>
              </ul>
              <a href="#contact" className="block w-full py-3 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all">Book This</a>
            </motion.div>
          </div>
          
          <p className="text-center text-muted text-xs italic mt-12">
            "Final price may vary based on vehicle size and condition. Message us for an exact quote."
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark-bg">
        <div className="container mx-auto px-6">
          <SectionHeading title="Why Edmonton Trusts FIFI Touch" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: "🚗", title: "We Come To You", desc: "No drop-off. No waiting. We work around your schedule." },
              { icon: "💰", title: "Affordable Pricing", desc: "Premium results without the premium price tag." },
              { icon: "🧼", title: "Attention To Detail", desc: "We treat your car like it's our own." },
              { icon: "⚡", title: "Fast & Reliable", desc: "Same-day appointments available." },
              { icon: "📍", title: "Local Business", desc: "Serving all Edmonton neighborhoods." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="The FIFI Touch Difference" 
            subtitle="See the transformation for yourself. Real results from real Edmonton customers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Interior Deep Clean", before: "bg-neutral-800", after: "bg-neutral-900" },
              { title: "Exterior Shine", before: "bg-neutral-700", after: "bg-neutral-950" },
              { title: "Full Transformation", before: "bg-neutral-600", after: "bg-black" }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-card-bg border border-white/5">
                <div className="flex h-64">
                  <div className={`w-1/2 ${item.before} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="absolute top-4 left-4 bg-black/50 px-2 py-1 text-[10px] uppercase tracking-widest font-bold">Before</div>
                  </div>
                  <div className={`w-1/2 ${item.after} relative overflow-hidden border-l border-gold/30`}>
                    <div className="absolute inset-0 gold-shimmer opacity-40" />
                    <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 text-[10px] uppercase tracking-widest font-bold">After</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-serif font-bold text-center">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 text-muted text-sm">
            📸 Real results from real Edmonton customers.
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-dark-bg overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading title="Who We Are" centered={false} />
              <p className="text-muted text-lg leading-relaxed mb-8">
                FIFI Touch Detailing is an Edmonton-based mobile car detailing service. We started because we believe your car deserves professional care — without the hassle of going to a shop.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                We bring everything we need right to your door, and we don't leave until your vehicle looks its absolute best. Our team is passionate about automotive restoration and customer satisfaction.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatsCounter value={100} label="Happy Customers" suffix="+" />
                <StatsCounter value={5} label="Average Rating" suffix="⭐" />
                <StatsCounter value={100} label="Reliability" suffix="%" />
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 bg-card-bg border-l-4 border-gold rounded-2xl relative"
              >
                <div className="absolute -top-6 -left-6 text-8xl text-gold/10 font-serif">"</div>
                <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 leading-tight">
                  We don't just clean cars. We restore pride.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">FT</div>
                  <div>
                    <div className="font-bold">FIFI Touch Team</div>
                    <div className="text-muted text-sm uppercase tracking-widest">Edmonton, AB</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Book Your Detail Today" 
            subtitle="Call, text, or fill out the form — we'll get back to you fast."
          />

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-muted text-sm uppercase tracking-widest mb-1">Call or Text</div>
                    <a href="tel:587-568-2601" className="text-2xl font-bold hover:text-gold transition-colors">587-568-2601</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-muted text-sm uppercase tracking-widest mb-1">Service Area</div>
                    <div className="text-xl font-bold">Edmonton & Surrounding Areas</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-muted text-sm uppercase tracking-widest mb-1">Availability</div>
                    <div className="text-xl font-bold text-gold">Same-day appointments available</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4">
                <a href="tel:587-568-2601" className="bg-gold text-black px-8 py-4 rounded-full font-bold text-center hover:bg-white transition-all">
                  Call Now
                </a>
                <a href="#contact" className="border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white hover:text-black transition-all">
                  Get a Free Quote
                </a>
              </div>
            </div>

            <div className="lg:w-2/3">
              <form action="#" className="bg-card-bg p-8 md:p-12 rounded-2xl border border-white/5 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted font-bold">Name</label>
                    <input type="text" className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted font-bold">Phone Number</label>
                    <input type="tel" className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="587-000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted font-bold">Vehicle Type</label>
                    <select className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors appearance-none">
                      <option>Sedan</option>
                      <option>SUV / Truck</option>
                      <option>Van</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted font-bold">Service Interested In</label>
                    <select className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors appearance-none">
                      <option>Basic Detail</option>
                      <option>Full Detail</option>
                      <option>Premium Detail</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Message / Special Requests</label>
                  <textarea rows={4} className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors resize-none" placeholder="Tell us about your car's condition..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gold text-black py-4 rounded-lg font-bold text-lg hover:bg-white transition-all transform active:scale-95">
                  Send My Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
            <div>
              <a href="#" className="flex items-center gap-3 group mb-4">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-black font-serif font-bold text-2xl group-hover:scale-110 transition-transform">
                  F
                </div>
                <span className="text-3xl font-serif font-bold text-gold tracking-tight">
                  FIFI <span className="text-white">Touch</span>
                </span>
              </a>
              <p className="text-muted max-w-xs">
                Professional mobile car detailing in Edmonton. We bring the shine to your doorstep.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-16">
              <div className="space-y-4">
                <h5 className="font-bold uppercase tracking-widest text-xs text-gold">Quick Links</h5>
                <ul className="space-y-2 text-muted text-sm">
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="font-bold uppercase tracking-widest text-xs text-gold">Contact</h5>
                <ul className="space-y-2 text-muted text-sm">
                  <li>587-568-2601</li>
                  <li>Serving Edmonton, AB</li>
                  <li>Same-Day Appointments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-xs">
            <div>© 2025 FIFI Touch Detailing. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
