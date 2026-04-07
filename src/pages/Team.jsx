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
    <div className={`max-w-4xl mb-20 md:mb-32 ${center ? 'mx-auto text-center' : ''}`}>
        <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#B8860B]"></div>
            <span className="text-[#B8860B] font-bold text-[0.7rem] tracking-[0.4em] uppercase">{tagline || "Expertise"}</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-[#0F172A] mb-10 leading-[0.9] tracking-tighter">
            {title}
        </h2>
        {description && (
            <p className="text-xl md:text-2xl text-[#64748B] font-light leading-relaxed max-w-2xl border-l border-[#B8860B]/20 pl-8 italic">
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
            <header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0A0F1C]">
                {/* Visual Background - Multi-layered */}
                <div className="absolute inset-0 z-0 text-white/5">
                    {/* Dark Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                    </div>
                    
                    {/* Animated Blobs */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            x: [0, 100, 0],
                            y: [0, -50, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B8860B]/10 rounded-full blur-[120px]"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1.2, 1, 1.2],
                            x: [0, -100, 0],
                            y: [0, 50, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#B8860B]/5 rounded-full blur-[100px]"
                    />

                    {/* Main Background Image with Parallax */}
                    <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-20 grayscale scale-110">
                        <img
                            src={thero}
                            alt="High-end Workspace"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-transparent to-[#0A0F1C]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-transparent to-[#0A0F1C] opacity-50"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-6xl"
                        >
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-[#B8860B] animate-pulse"></span>
                                <span className="text-white/80 font-bold text-[0.65rem] tracking-[0.4em] uppercase">
                                    Empowering Global Ambitions
                                </span>
                            </motion.div>

                            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-display font-bold text-white leading-[0.85] tracking-tighter mb-10">
                                <motion.span 
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                    className="block"
                                >
                                    The <p className="inline italic font-light text-[#B8860B]">Architects</p>
                                </motion.span>
                                <motion.span 
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="block mt-2"
                                >
                                    of Strategy.
                                </motion.span>
                            </h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="relative py-8"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#B8860B]/30"></div>
                                <p className="text-lg md:text-3xl text-white/50 font-display italic font-light max-w-3xl mx-auto leading-relaxed px-4">
                                    "Innovation in thought, precision in execution. We are the partners to your global growth."
                                </p>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#B8860B]/30"></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator - Enhanced */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/20 text-[0.5rem] uppercase tracking-[0.6em] font-bold">Scroll to Discover</span>
                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-[1px] h-20 bg-gradient-to-b from-[#B8860B] to-transparent"
                        />
                    </div>
                </motion.div>

                {/* Side Labels */}
                <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-24 opacity-20 hover:opacity-100 transition-opacity duration-500">
                    <p className="rotate-90 text-[0.65rem] font-bold tracking-[0.5em] text-white uppercase whitespace-nowrap">INTEGRITY • EXCELLENCE</p>
                </div>
                <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-24 opacity-20 hover:opacity-100 transition-opacity duration-500">
                    <p className="-rotate-90 text-[0.65rem] font-bold tracking-[0.5em] text-white uppercase whitespace-nowrap">GLOBAL PARTNERSHIP</p>
                </div>
            </header>

            {/* 2. STAT STRIP */}
            <section className="relative z-20 -mt-16 md:-mt-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 border border-white/40 flex flex-col md:flex-row items-center justify-around gap-12 md:gap-16">
                    {[
                        { label: "Collective Expertise", val: "500+", detail: "Professional Years" },
                        { label: "Recognition", val: "Tier 1", detail: "Chambers Ranked" },
                        { label: "Capabilities", val: "PAN-INDIA", detail: "Full Service" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group w-full md:w-auto">
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-[0.7rem] font-bold text-[#B8860B] uppercase tracking-[0.2em] mb-3">{stat.label}</p>
                                <p className="text-4xl md:text-6xl font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#B8860B] transition-colors">{stat.val}</p>
                                <p className="text-[0.75rem] text-[#64748B] italic font-light tracking-wide">{stat.detail}</p>
                            </motion.div>
                            {i < 2 && <div className="hidden md:block absolute right-[-50%] top-1/2 -translate-y-1/2 h-12 w-[1px] bg-neutral-200"></div>}
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
                                <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-8 text-white leading-[0.9] tracking-tighter">
                                    Discuss your next <br />
                                    <span className="text-brand italic font-light">strategic milestone.</span>
                                </h2>
                                <p className="text-white/50 text-2xl font-light mb-12 max-w-lg leading-relaxed">
                                    Our award-winning partners are ready to bring global precision to your most complex legal challenges.
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                                    <Link to="/contact" className="px-10 py-5 bg-brand hover:bg-brand-light text-white text-[0.8125rem] font-bold uppercase tracking-[0.3em] rounded-full transition-all flex items-center justify-center gap-3 group shadow-premium-btn w-full sm:w-auto">
                                        Partner Collaboration
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                    <Link to="/practice-areas" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-[0.8125rem] font-bold uppercase tracking-[0.3em] rounded-full transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center w-full sm:w-auto">
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

