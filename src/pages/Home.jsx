import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, CheckCircle, BookOpen, ArrowRight, Award, Shield, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import hero1 from '../asserts/hero1.avif'
import hero2 from '../asserts/hero2.jpg'
import hero3 from '../asserts/hero3.avif'
import hero4 from '../asserts/hero4.avif'
import lady from '../asserts/lady.avif'
import aeaLogo from '../asserts/AEA-logo.png'
import ilnLogo from '../asserts/ILN.jpg'
import irgLogo from '../asserts/IRG-logo.png'
import pmaLogo from '../asserts/PMA.jpg'

const heroSlides = [
    {
        image: hero1,
    },
    {
        image: hero2,
    },
    {
        image: hero3,
    },
    {
        image: hero4,
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

    return (
        <section className="relative h-screen bg-black overflow-hidden flex items-center">
            {/* Carousel Background */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
                    <img
                        src={heroSlides[currentSlide].image}
                        alt="Background"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-12"
                >
                    <div className="w-24 h-1 bg-brand mb-4"></div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1.1] max-w-5xl tracking-tight px-2">
                        Integrity Legal Center <br className="hidden md:block" /> the most trusted <span className="italic text-brand-light">Law firm</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-brand-light transition-all duration-500 shadow-premium-btn text-center">
                            Request Consultation
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand text-brand font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-brand hover:text-white transition-all duration-500 backdrop-blur-sm text-center">
                            Our Services
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden lg:block"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent"></div>
            </motion.div>
        </section>
    );
}

const AboutSection = () => (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-background/50 rounded-l-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <span className="text-brand font-bold text-sm tracking-[0.3em] uppercase mb-4 block">About the Firm</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text-main mb-6 md:mb-8 leading-tight">
                        Integrity Legal Centre is recognized among the most <span className="italic text-brand">trusted Law firms in India</span>
                    </h2>
                    <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-text-muted leading-relaxed">
                        <p>
                            Integrity Legal Centre is an award-winning law firm in India, having offices at New Delhi NCR, Bhubaneswar, Chandigarh, Kolkata, Allahabad and associate offices across India.
                        </p>
                        <p className="hidden sm:block">
                            We provide comprehensive legal services and solutions to a broad spectrum of domestic and foreign clients. Integrity Legal Centre is a top law firm in Delhi awarded across its practice areas.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
                        <Link to="/contact" className="premium-btn w-full sm:w-auto text-center">
                            Contact Us
                        </Link>
                        <Link to="/team" className="w-full sm:w-auto px-6 py-4 border border-brand text-brand font-bold text-[0.75rem] uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-all duration-500 text-center">
                            Our Team
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 relative"
                >
                    <div className="relative z-10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-edge">
                        <img
                            src={lady}
                            alt="Law Office"
                            className="w-full h-[300px] md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const PracticeAreaItem = ({ title, icon: Icon, to, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative"
    >
        <Link to={to} className="block p-6 md:p-8 bg-background border border-border/50 hover:bg-white hover:shadow-premium-hover transition-all duration-500 rounded-xl h-full">
            <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center group-hover:bg-brand transition-all duration-500">
                    <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <ArrowRight className="w-5 h-5 text-brand opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </div>
            <h3 className="text-xl font-serif font-bold text-text-main group-hover:text-brand transition-colors">{title}</h3>
            <div className="mt-6 h-px w-0 group-hover:w-full bg-brand/20 transition-all duration-700"></div>
        </Link>
    </motion.div>
);

const PracticeSection = () => {
    const areas = [
        { title: "Corporate & Commercial", icon: Briefcase, to: "/practice-areas/corporate-commercial" },
        { title: "Dispute Resolution", icon: CheckCircle, to: "/practice-areas/dispute-resolution" },
        { title: "Life Sciences & Healthcare", icon: Shield, to: "/practice-areas/life-sciences-healthcare" },
        { title: "Education", icon: BookOpen, to: "/practice-areas/education" },
        { title: "Real Estate", icon: Globe, to: "/practice-areas/real-estate" },
        { title: "Intellectual Property", icon: Shield, to: "/practice-areas/intellectual-property" },
        { title: "Banking & Finance", icon: Briefcase, to: "/practice-areas/banking-finance-and-capital-markets" },
        { title: "Taxation", icon: CheckCircle, to: "/practice-areas/taxation" },
        { title: "Labour & Employment", icon: Briefcase, to: "/practice-areas/labour-and-employment" }
    ];

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-brand font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Our Specializations</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text-main">
                        Comprehensive Legal <span className="italic text-brand">Solutions</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, idx) => (
                        <PracticeAreaItem key={area.title} title={area.title} icon={area.icon} to={area.to} delay={idx * 0.1} />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <Link to="/services" className="inline-flex items-center gap-4 text-brand font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all group">
                        Explore All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ quote, author, position, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="p-6 md:p-10 bg-white border border-border rounded-2xl shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col justify-between"
    >
        <div>
            <div className="text-brand mb-6">
                <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.333 4.667C5.654 4.667 2.667 7.654 2.667 11.333v11.334c0 1.104.896 2 2 2h7.333c1.104 0 2-.896 2-2V13.333c0-1.104-.896-2-2-2h-5.333c0-2.209 1.791-4 4-4 .552 0 1-.448 1-1V5.667c0-.552-.448-1-1-1zm16.667 0c-3.679 0-6.667 2.987-6.667 6.666v11.334c0 1.104.896 2 2 2h7.333c1.104 0 2-.896 2-2V13.333c0-1.104-.896-2-2-2H23.333c0-2.209 1.791-4 4-4 .552 0 1-.448 1-1V5.667c0-.552-.448-1-1-1z" />
                </svg>
            </div>
            <p className="text-xl text-text-main font-serif italic mb-8 leading-relaxed">
                "{quote}"
            </p>
        </div>
        <div>
            <div className="font-bold text-text-main text-base uppercase tracking-wider">{author}</div>
            <div className="text-text-muted text-sm mt-1">{position}</div>
        </div>
    </motion.div>
);

const TestimonialsSection = () => (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl text-center md:text-left">
                    <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main leading-tight">
                        What Our <span className="italic text-brand">Clients Say</span>
                    </h2>
                </div>
                <div className="hidden md:block">
                    <Link to="/contact" className="text-brand font-bold uppercase tracking-widest text-xs hover:text-brand-light transition-colors">
                        Share Your Experience
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard
                    quote="ADV. Yazdani hassan is a brilliant lawyer and understands the legality of the education system of India. He was able to understand and analyse my problems and give solutions instantly."
                    author="Tarannum khan"
                    delay={0.1}
                />
                <TestimonialCard
                    quote="Ashish Mishra is all praise for the services provided and commends partner Dimpy Mohanty for their extraordinarily high skills and competence."
                    author="Ashish Mishra"
                    delay={0.2}
                />
                <TestimonialCard
                    quote="Integrity Legal Centre is a reliable and trustworthy law firm in India. We continue to trust their services."
                    author="Fauzia Hasan Siddiqui"
                    delay={0.3}
                />
            </div>
        </div>
    </section>
);

const AffiliationsSection = () => {
    const affiliations = [
        { name: "AEA", logo: aeaLogo },
        { name: "ILN", logo: ilnLogo },
        { name: "IRG", logo: irgLogo },
        { name: "PMA", logo: pmaLogo }
    ];

    const marqueeItems = [...affiliations, ...affiliations, ...affiliations];

    return (
        <section className="py-16 md:py-24 bg-white border-t border-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <span className="text-brand font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Global Network</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main">
                        Our <span className="italic text-brand">Affiliations</span>
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-hidden w-full group py-4 items-center">
                <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    animate={{ x: ["0%", "-33.333333%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex items-center shrink-0 gap-16 md:gap-32 min-w-max pr-16 md:pr-32"
                >
                    {marqueeItems.map((item, i) => (
                        <div key={i} className="flex-shrink-0 flex items-center justify-center w-32 h-16 md:w-48 md:h-24">
                            <img
                                src={item.logo}
                                alt={`${item.name} Logo`}
                                className="w-full h-full object-contain  transition-all duration-300"
                            />
                        </div>
                    ))}
                </motion.div>

                <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div className="bg-background">
            <Hero />
            <AboutSection />
            <PracticeSection />
            <TestimonialsSection />
            <AffiliationsSection />
        </div>
    );
};

export default Home;

