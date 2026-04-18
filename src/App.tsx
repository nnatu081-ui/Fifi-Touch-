import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  Shield,
  Droplets,
  BadgeCheck,
  Star,
  Check,
} from 'lucide-react';

const services = [
  {
    title: 'Interior Reset',
    price: 'From $89',
    description:
      'Deep vacuum, plastics + leather wipe-down, glass cleaning, and a clean cabin scent finish.',
    icon: Sparkles,
  },
  {
    title: 'Exterior Shine',
    price: 'From $79',
    description:
      'Foam pre-wash, hand wash, wheel and tire clean, streak-free dry, and spray sealant protection.',
    icon: Droplets,
  },
  {
    title: 'Complete Detail',
    price: 'From $149',
    description:
      'Our most requested package: complete interior + exterior restoration for a showroom-ready result.',
    icon: Shield,
  },
];

const addOns = [
  'Pet hair removal',
  'Stain extraction',
  'Odor neutralization',
  'Headlight restoration',
  'Engine bay detail',
  'Ceramic spray upgrade',
];

const testimonials = [
  {
    quote:
      'Booked in the morning and my SUV looked brand new by the afternoon. Super easy and professional.',
    name: 'Ashley M.',
  },
  {
    quote:
      'They came prepared, were on time, and the interior detail was honestly better than any shop I have used.',
    name: 'David R.',
  },
  {
    quote:
      'Great value, great communication, and no hassle. I will definitely book again next month.',
    name: 'Priya K.',
  },
];

const process = [
  {
    title: 'Request a Quote',
    detail: 'Call, text, or submit the form with your vehicle type and service needs.',
  },
  {
    title: 'Choose a Time',
    detail: 'Pick a time that works for your home, office, or condo parking lot.',
  },
  {
    title: 'We Detail On-Site',
    detail: 'We arrive with the tools, water, and products to complete the service.',
  },
  {
    title: 'Drive Clean & Confident',
    detail: 'Inspect your vehicle and enjoy a spotless finish inside and out.',
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: 'Services', href: '#services' },
      { name: 'How It Works', href: '#process' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'Contact', href: '#contact' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-gold selection:text-black">
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-dark-bg/90 py-3 backdrop-blur-md border-b border-white/10' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gold text-black grid place-items-center font-bold font-serif">D</div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-gold leading-none">DetailCo</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Mobile Detailing</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium hover:text-gold transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-gold px-5 py-2 font-bold text-black hover:bg-white transition-colors">
              Get Quote
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen((v) => !v)} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-card-bg border-t border-white/10"
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gold transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      <header className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.20),_rgba(10,10,10,1)_45%)]" />
        <div className="absolute inset-0 gold-shimmer opacity-20" />

        <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
              <BadgeCheck size={14} /> Trusted Local Detailers
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-serif font-bold leading-tight max-w-4xl">
              Premium mobile car detailing for your business.
            </h1>
            <p className="mt-6 max-w-2xl text-muted text-lg md:text-xl">
              We come to your home or workplace with professional tools and products so your vehicle gets a spotless finish without disrupting your day.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black hover:bg-white transition-colors">
                <Phone size={18} /> Call (555) 123-4567
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-bold hover:bg-white hover:text-black transition-colors">
                <MessageSquare size={18} /> Book a Detail
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {['Same-day availability', 'Licensed & insured', '5-star customer care'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-card-bg/60 p-4 text-sm text-muted">
                  <Check size={16} className="text-gold mb-2" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <section id="services" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">Detail Packages</h2>
          <p className="text-muted text-center max-w-2xl mx-auto mt-4">
            Transparent pricing and polished results. Final quote depends on vehicle size, condition, and selected add-ons.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-card-bg p-8"
              >
                <service.icon className="text-gold" size={30} />
                <h3 className="mt-5 font-serif text-2xl">{service.title}</h3>
                <p className="mt-2 text-gold font-bold">{service.price}</p>
                <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
                <a href="#contact" className="mt-8 inline-block rounded-full border border-white/20 px-5 py-2 font-bold hover:bg-white hover:text-black transition-colors">
                  Select Package
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold/20 bg-dark-bg p-8">
            <h3 className="font-serif text-2xl mb-4">Popular Add-ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted">
              {addOns.map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <Star size={14} className="text-gold" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-dark-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">How It Works</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-card-bg p-6">
                <p className="text-gold font-serif text-2xl">0{index + 1}</p>
                <h3 className="font-bold mt-3">{step.title}</h3>
                <p className="text-muted text-sm mt-2">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">Client Reviews</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((review) => (
              <div key={review.name} className="rounded-2xl border border-white/10 bg-card-bg p-7">
                <p className="text-gold text-lg mb-4">★★★★★</p>
                <p className="text-muted leading-relaxed">“{review.quote}”</p>
                <p className="mt-5 font-bold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Let’s detail your ride.</h2>
              <p className="text-muted">Send us your details and we will get back quickly with a custom quote.</p>

              <div className="space-y-5 text-sm">
                <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> (555) 123-4567</p>
                <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Serving your local area</p>
                <p className="flex items-center gap-3"><Clock size={16} className="text-gold" /> Mon–Sat, 8:00 AM to 7:00 PM</p>
              </div>
            </div>

            <form className="lg:col-span-2 rounded-2xl border border-white/10 bg-card-bg p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted">Full Name</label>
                <input className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 outline-none focus:border-gold" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted">Phone</label>
                <input className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 outline-none focus:border-gold" placeholder="(555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted">Vehicle Type</label>
                <select className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 outline-none focus:border-gold">
                  <option>Sedan</option>
                  <option>SUV / Truck</option>
                  <option>Van</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted">Preferred Package</label>
                <select className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 outline-none focus:border-gold">
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-dark-bg px-4 py-3 outline-none focus:border-gold resize-none"
                  placeholder="Share your vehicle condition, location, and preferred date/time."
                />
              </div>
              <button type="submit" className="md:col-span-2 rounded-lg bg-gold py-4 font-bold text-black hover:bg-white transition-colors">
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gold/20 bg-[#050505] py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-muted">
          <p>© 2026 DetailCo Mobile Detailing. All rights reserved.</p>
          <p>Built for speed, trust, and standout results.</p>
        </div>
      </footer>
    </div>
  );
}
