import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, CheckCircle, BookOpen, ArrowRight, Award, Shield, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
    },
    {
        image: "https://images.unsplash.com/photo-1505664177264-bba15037d0c7?auto=format&fit=crop&q=80&w=1920",
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920",
    },
    {
        image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1920",
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

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight max-w-5xl tracking-tight">
                        Recognized among the most trusted <span className="italic text-brand-light">Law firms in India</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <Link to="/contact" className="px-10 py-4 bg-brand text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-light transition-all duration-500 shadow-premium-btn">
                            Request Consultation
                        </Link>
                        <Link to="/practice-areas" className="px-10 py-4 bg-transparent border border-brand text-brand font-bold uppercase tracking-widest text-sm hover:bg-brand hover:text-white transition-all duration-500 backdrop-blur-sm">
                            Our Expertise
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-0 w-full flex justify-center items-center gap-12 z-30">
                <button
                    onClick={prevSlide}
                    className="hidden md:flex text-white/50 hover:text-white transition-colors items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] group"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                    PREV
                </button>

                <div className="flex gap-4">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-12 h-[2px] transition-all duration-500 ${currentSlide === idx ? 'bg-brand w-20' : 'bg-white/20'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="hidden md:flex text-white/50 hover:text-white transition-colors items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] group"
                >
                    NEXT
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
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
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-background/50 rounded-l-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-4 block">About the Firm</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
                        LexCounsel is recognized among the most <span className="italic text-brand">trusted Law firms in India</span>
                    </h2>
                    <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                        <p>
                            LexCounsel is an award-winning law firm in India, having offices at New Delhi NCR, Bhubaneswar, Chandigarh, Kolkata, Allahabad and associate offices across India.
                        </p>
                        <p>
                            We provide comprehensive legal services and solutions to a broad spectrum of domestic and foreign clients. LexCounsel is a top law firm in Delhi awarded across its practice areas, recognizing our members among the best business and litigation lawyers.
                        </p>
                    </div>
                    <div className="flex gap-6 mt-10">
                        <Link to="/contact" className="premium-btn">
                            Contact Us
                        </Link>
                        <Link to="/team" className="px-8 py-4 border border-brand text-brand font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-brand hover:text-white transition-all duration-500">
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
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-edge">
                        <img
                            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
                            alt="Law Office"
                            className="w-full h-[500px] object-cover"
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
        <Link to={to} className="block p-8 bg-background border border-border/50 hover:bg-white hover:shadow-premium-hover transition-all duration-500 rounded-xl h-full">
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
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Our Specializations</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main">
                        Comprehensive Legal <span className="italic text-brand">Solutions</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, idx) => (
                        <PracticeAreaItem key={area.title} title={area.title} icon={area.icon} to={area.to} delay={idx * 0.1} />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <Link to="/practice-areas" className="inline-flex items-center gap-4 text-brand font-bold uppercase tracking-widest text-xs hover:gap-6 transition-all group">
                        Explore All Practice Areas <ArrowRight className="w-4 h-4" />
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
        className="p-10 bg-white border border-border rounded-2xl shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col justify-between"
    >
        <div>
            <div className="text-brand mb-6">
                <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.333 4.667C5.654 4.667 2.667 7.654 2.667 11.333v11.334c0 1.104.896 2 2 2h7.333c1.104 0 2-.896 2-2V13.333c0-1.104-.896-2-2-2h-5.333c0-2.209 1.791-4 4-4 .552 0 1-.448 1-1V5.667c0-.552-.448-1-1-1zm16.667 0c-3.679 0-6.667 2.987-6.667 6.666v11.334c0 1.104.896 2 2 2h7.333c1.104 0 2-.896 2-2V13.333c0-1.104-.896-2-2-2H23.333c0-2.209 1.791-4 4-4 .552 0 1-.448 1-1V5.667c0-.552-.448-1-1-1z" />
                </svg>
            </div>
            <p className="text-lg text-text-main font-serif italic mb-8 leading-relaxed">
                "{quote}"
            </p>
        </div>
        <div>
            <div className="font-bold text-text-main text-sm uppercase tracking-wider">{author}</div>
            <div className="text-text-muted text-xs mt-1">{position}</div>
        </div>
    </motion.div>
);

const TestimonialsSection = () => (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main leading-tight">
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
                    quote="Seema Jhingan is a brilliant lawyer and understands the legality of the education system of India. She was able to understand and analyse my problems and give solutions instantly."
                    author="Siddharth Singh"
                    position="Director, The Emerald Heights International School"
                    delay={0.1}
                />
                <TestimonialCard
                    quote="Tomomi Shimizu is all praise for the services provided and commends partner Dimpy Mohanty for their extraordinarily high skills and competence."
                    author="Tomomi Shimizu"
                    position="Senior Project Manager, Kamonohashi Project"
                    delay={0.2}
                />
                <TestimonialCard
                    quote="LexCounsel remains the go-to law firm for us in India. We continue to trust Alfred and team's extensive experience."
                    author="Hollard India"
                    position="Liaison Office"
                    delay={0.3}
                />
            </div>
        </div>
    </section>
);

const AwardsSection = () => (
    <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Recognition</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                    Awards & <span className="italic text-brand">Accolades</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    "Distinguished Firm of the Year for IBC - CCAI Legal Excellence Awards 2021",
                    "“Legal Advisory Services” award - 7th Edition India Legal Awards 2021",
                    "‘Education’ - Indian Law Firm Awards (India Business Law Journal) 2021",
                    "‘TMT Law Firm of the Year’ - BW Legal World-Global Legal Summit 2020",
                    "‘Corporate & Commercial’ - Indian Law Firm Awards (IBLJ) 2020",
                    "“Best Life Science & Healthcare Law Firm” - APAC Legal Awards 2020"
                ].map((award, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-full border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/10 transition-colors">
                            <Award className="w-6 h-6 text-brand" />
                        </div>
                        <span className="text-white/80 font-serif text-lg">{award}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const AffiliationsSection = () => (
    <section className="py-24 bg-white border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Global Network</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main">
                    Our <span className="italic text-brand">Affiliations</span>
                </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
                {[
                    "Alliott Global Alliance",
                    "International Lawyers Network (ILN)",
                    "IR Global"
                ].map((name, i) => (
                    <motion.div
                        key={name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                    >
                        <span className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-[0.25em] group-hover:text-brand transition-all duration-500 cursor-default block text-center border-b border-transparent group-hover:border-brand/30 pb-2">
                            {name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <div className="bg-background">
            <Hero />
            <AboutSection />
            <PracticeSection />
            <AwardsSection />
            <TestimonialsSection />
            <AffiliationsSection />
        </div>
    );
};

export default Home;
