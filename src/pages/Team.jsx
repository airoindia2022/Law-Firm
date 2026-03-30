import React, { useState, useMemo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
    Linkedin, Mail, ArrowRight, Award, Shield, Globe,
    Users, Briefcase, ChevronRight, Search, Target,
    Quote, ExternalLink, Star, ArrowUpRight, Plus, Minus
} from 'lucide-react'
import { TEAM_MEMBERS } from '../data'
import thero from '../asserts/thero.avif'
import tim from '../asserts/tim.avif'

// Helper to get image URL with fallback logic
const getMemberImage = (slug) => {
    return new URL(`../asserts/${slug}.jpeg`, import.meta.url).href;
}

const TeamMemberCard = ({ member, index, isLarge = false }) => {
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className={`group relative ${isLarge ? 'md:col-span-1' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="block relative">
                <div className={`relative overflow-hidden transition-all duration-700 ${isLarge ? 'aspect-[4/5] rounded-[3rem]' : 'aspect-[3/4] rounded-[2rem]'} bg-neutral-100 border border-neutral-200/50 shadow-sm group-hover:shadow-2xl group-hover:border-brand/20`}>

                    {/* Image Layer */}
                    <div className="absolute inset-0 bg-[#f8f9fa]">
                        <img
                            src={!imageError ? getMemberImage(member.slug) : 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'}
                            alt={member.name}
                            className={`w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${!imageError ? 'group-hover:grayscale-0' : 'opacity-40'} group-hover:scale-105`}
                            onError={() => setImageError(true)}
                        />
                    </div>

                    {/* Gradient Overlay - Always visible but deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                        {/* Role & Name */}
                        <div className="space-y-1 mb-4">

                            <h3 className={`font-serif font-bold text-white transition-all duration-500 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                                {member.name}
                            </h3>
                            <motion.span
                                initial={false}
                                animate={{ color: isHovered ? '#B6890C' : '#FFFFFF' }}
                                className="text-[1.0625rem] font-bold uppercase tracking-[0.3em]"
                            >
                                {member.role}
                            </motion.span>
                        </div>

                        {/* Expandable Info */}
                        <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                            <div className="w-8 h-[1px] bg-brand/50 mb-4"></div>
                            <p className="text-white/60 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 italic font-light mb-6">
                                {member.addres}.
                            </p>
                        </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-6 right-6 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Plus className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const CategoryTitle = ({ title, tagline, description, center = false }) => (
    <div className={`max-w-3xl mb-16 md:mb-24 ${center ? 'mx-auto text-center' : ''}`}>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text-main mb-8 leading-tight">
            {title}
        </h2>
        {description && (
            <p className="text-xl text-text-muted font-light leading-relaxed">
                {description}
            </p>
        )}
    </div>
)

const Team = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState('All')
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

    const filteredMembers = useMemo(() => {
        let members = TEAM_MEMBERS
        if (activeFilter !== 'All') {
            members = members.filter(m => m.role.includes(activeFilter))
        }
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase()
            members = members.filter(m =>
                m.name.toLowerCase().includes(query) ||
                (m.practiceFocus && m.practiceFocus.toLowerCase().includes(query))
            )
        }
        return members
    }, [searchQuery, activeFilter])

    const equityPartners = filteredMembers.filter(m => m.role === 'Partner')
    const technicalCounsels = filteredMembers.filter(m => m.role === 'Counsel')
    const legalAdvisors = filteredMembers.filter(m => m.role === 'Legal Advisor')

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-brand selection:text-white" ref={containerRef}>
            {/* 1. IMMERSIVE HERO SECTION */}
            <header className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0A0F1C]">
                {/* Visual Background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                    <img
                        src={thero}
                        alt="High-end Workspace"
                        className="w-full h-full object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/50 via-transparent to-[#0A0F1C]"></div>
                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-5xl mx-auto"
                    >
                        <span className="inline-block text-brand font-bold text-[0.75rem] tracking-[0.5em] uppercase mb-8">
                            Empowering Global Ambitions
                        </span>
                        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-display font-bold text-white leading-[0.85] tracking-tighter mb-12">
                            The <span className="italic font-light text-brand">Architects</span> <br />
                            of Strategy.
                        </h1>
                        <p className="text-2xl md:text-3xl text-white/40 font-display italic font-light max-w-2xl mx-auto leading-relaxed">
                            "Innovation in thought, precision in execution. We are the partners to your global growth."
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-white/20 text-[0.5625rem] uppercase tracking-[0.4em] font-bold">Discover</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand/50 to-transparent"></div>
                </motion.div>
            </header>

            {/* 2. STAT STRIP */}
            <section className="relative z-20 -mt-10 md:-mt-20 px-4 md:px-6">
                <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-neutral-100 grid grid-cols-2 md:flex md:flex-wrap items-center justify-around gap-8 md:gap-12">
                    {[
                        { label: "Collective Expertise", val: "500+", detail: "Professional Years" },
                        { label: "Recognition", val: "Tier 1", detail: "Chambers Ranked" },
                        { label: "Capabilities", val: "PAN-INDIA", detail: "Full Service" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-[0.6875rem] md:text-[0.75rem] font-bold text-brand uppercase tracking-[0.12em] md:tracking-[0.14em] mb-2">{stat.label}</p>
                            <p className="text-4xl md:text-5xl font-display font-bold text-text-main mb-1 group-hover:text-brand transition-colors">{stat.val}</p>
                            <p className="text-[0.6875rem] md:text-[0.75rem] text-text-muted italic">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* 4. TEAM CONTENT */}
            <main className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeFilter}-${searchQuery}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-32"
                        >

                            {/* Legal Advisor */}
                            {legalAdvisors.length > 0 && (
                                <section>
                                    <CategoryTitle
                                        title="Legal Advisor"
                                        description="Strategic advisors providing expert legal guidance and comprehensive representation."
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                                        {legalAdvisors.map((member, idx) => (
                                            <TeamMemberCard key={member.slug} member={member} index={idx} />
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Counsel */}
                            {technicalCounsels.length > 0 && (
                                <section>
                                    <CategoryTitle
                                        title="Counsel"
                                        description="Deep-domain specialists providing granular insights into Intellectual Property, Tax, and Specialized Litigation."
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                                        {technicalCounsels.map((member, idx) => (
                                            <TeamMemberCard key={member.slug} member={member} index={idx} />
                                        ))}
                                    </div>
                                </section>
                            )}


                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            {/* 5. BRAND PHILOSOPHY SECTION */}
            <section className="py-32 lg:py-48 bg-[#FDFCFB] border-y border-neutral-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/[0.02] -skew-x-12 translate-x-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <CategoryTitle
                                title="Why Visionaries Choose Us."
                                tagline="Our Philosophy"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                                {[
                                    { title: "Pan-India Reach", detail: "Seamless legal services across every commercial hub in India.", icon: Globe },
                                    { title: "Global Fluency", detail: "Advisory excellence spanning 25+ international jurisdictions.", icon: Target },
                                    { title: "Elite Recognition", detail: "Tier 1 rankings from Chambers, IBLJ, and APAC Awards.", icon: Award },
                                    { title: "Bespoke Solutions", detail: "Not just advice, but customized architectures for growth.", icon: Shield }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center group-hover:bg-brand transition-colors duration-500">
                                            <item.icon className="w-5 h-5 text-brand group-hover:text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-text-main group-hover:text-brand transition-colors tracking-tight uppercase">{item.title}</h4>
                                        <p className="text-base text-text-muted font-light leading-snug">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium relative">
                                <img
                                    src={tim}
                                    alt="Professionalism"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-x-8 bottom-8 bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-neutral-100">
                                    <Quote className="w-10 h-10 text-brand/20 mb-6" />
                                    <p className="text-2xl md:text-3xl font-display italic text-text-main leading-relaxed mb-8">
                                        "In legal practice, precision is not a goal—it is our fundamental baseline."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white">
                                            <Star className="w-4 h-4 fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-text-main">Legacy of Trust</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#0A0F1C] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-white">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-[120px]"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="h-px w-8 bg-brand"></div>
                                    <span className="text-brand font-bold text-[0.75rem] tracking-[0.4em] uppercase">Strategic Intersection</span>
                                </div>
                                <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 text-white leading-[0.9] tracking-tighter">
                                    Discuss your next <br />
                                    <span className="text-brand italic font-light">strategic milestone.</span>
                                </h2>
                                <p className="text-white/50 text-2xl font-light mb-12 max-w-lg leading-relaxed">
                                    Our award-winning partners are ready to bring global precision to your most complex legal challenges.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <Link to="/contact" className="px-10 py-5 bg-brand hover:bg-brand-light text-white text-[0.8125rem] font-bold uppercase tracking-[0.3em] rounded-full transition-all flex items-center gap-3 group shadow-premium-btn">
                                        Partner Collaboration
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                    <Link to="/practice-areas" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-[0.8125rem] font-bold uppercase tracking-[0.3em] rounded-full transition-all border border-white/10 backdrop-blur-sm">
                                        Explore Practices
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: 'Pan-India', sub: 'Hub Coverage', icon: Globe },
                                    { label: '25+', sub: 'Jurisdictions', icon: Target },
                                    { label: 'Full', sub: 'Service Advisory', icon: Briefcase },
                                    { label: 'Elite', sub: 'Recognition', icon: Star }
                                ].map((badge, i) => (
                                    <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all group">
                                        <badge.icon className="w-6 h-6 text-brand mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-2xl mb-1">{badge.label}</h4>
                                        <p className="text-white/40 text-[0.6875rem] uppercase tracking-[0.3em] font-bold">{badge.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team

