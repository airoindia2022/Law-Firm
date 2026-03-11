import React, { useState, useMemo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
    Linkedin, Mail, ArrowRight, Award, Shield, Globe,
    Users, Briefcase, ChevronRight, Search, Target,
    Quote, ExternalLink, Star, ArrowUpRight, Plus, Minus
} from 'lucide-react'
import { TEAM_MEMBERS } from '../data'

// Helper to get image URL with fallback logic
const getMemberImage = (slug) => {
    const base = 'https://lexcounsel.in/wp-content/uploads/2021/04/'
    const overrides = {
        'dimpy-mohanty': 'dimpy-bio-img.png',
        'seema-jhingan': 'seema-bio-img.png',
        'alishan-naqvee': 'alishan-bio-img.png',
    }
    if (overrides[slug]) return base + overrides[slug]
    return `${base}${slug}-bio-img.png`
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
            <Link to={`/team/${member.slug}`} className="block relative">
                <div className={`relative overflow-hidden transition-all duration-700 ${isLarge ? 'aspect-[4/5] rounded-[3rem]' : 'aspect-[3/4] rounded-[2rem]'} bg-neutral-100 border border-neutral-200/50 shadow-sm group-hover:shadow-2xl group-hover:border-brand/20`}>

                    {/* Image Layer */}
                    <div className="absolute inset-0 bg-[#f8f9fa]">
                        <img
                            src={!imageError ? getMemberImage(member.slug) : 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'}
                            alt={member.name}
                            className={`w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${!imageError ? 'grayscale group-hover:grayscale-0' : 'opacity-40'} group-hover:scale-105`}
                            onError={() => setImageError(true)}
                        />
                    </div>

                    {/* Gradient Overlay - Always visible but deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                        {/* Role & Name */}
                        <div className="space-y-1 mb-4">
                            <motion.span
                                initial={false}
                                animate={{ color: isHovered ? '#B6890C' : '#FFFFFF' }}
                                className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70"
                            >
                                {member.role}
                            </motion.span>
                            <h3 className={`font-serif font-bold text-white transition-all duration-500 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                                {member.name}
                            </h3>
                        </div>

                        {/* Expandable Info */}
                        <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                            <div className="w-8 h-[1px] bg-brand/50 mb-4"></div>
                            <p className="text-white/60 text-xs leading-relaxed line-clamp-2 md:line-clamp-3 italic font-light mb-6">
                                {member.bio?.split('.')[0]}.
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white flex items-center gap-2">
                                    Full Profile <ArrowUpRight className="w-3 h-3 text-brand" />
                                </span>
                                <div className="flex gap-2">
                                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors">
                                        <Linkedin className="w-3 h-3 text-white" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors">
                                        <Mail className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-6 right-6 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Plus className="w-4 h-4 text-white" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

const CategoryTitle = ({ title, tagline, description, center = false }) => (
    <div className={`max-w-3xl mb-16 md:mb-24 ${center ? 'mx-auto text-center' : ''}`}>
        <div className={`flex items-center gap-4 mb-6 ${center ? 'justify-center' : ''}`}>
            <div className="h-[1px] w-8 bg-brand"></div>
            <span className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase">{tagline}</span>
            {center && <div className="h-[1px] w-8 bg-brand"></div>}
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-text-main mb-8 leading-tight">
            {title}
        </h2>
        {description && (
            <p className="text-lg text-text-muted font-light leading-relaxed">
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

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-brand selection:text-white" ref={containerRef}>
            {/* 1. IMMERSIVE HERO SECTION */}
            <header className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0A0F1C]">
                {/* Visual Background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
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
                        <span className="inline-block text-brand font-bold text-[10px] tracking-[0.5em] uppercase mb-8">
                            Empowering Global Ambitions
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-[140px] font-serif font-bold text-white leading-[0.85] tracking-tighter mb-12">
                            The <span className="italic font-light text-brand">Architects</span> <br />
                            of Strategy.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/40 font-serif italic font-light max-w-2xl mx-auto leading-relaxed">
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
                    <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">Discover</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand/50 to-transparent"></div>
                </motion.div>
            </header>

            {/* 2. STAT STRIP */}
            <section className="relative z-20 -mt-20 px-6">
                <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-[3rem] p-12 lg:p-16 border border-neutral-100 flex flex-wrap items-center justify-around gap-12">
                    {[
                        { label: "Founded", val: "1994", detail: "Global Excellence" },
                        { label: "Collective Expertise", val: "500+", detail: "Professional Years" },
                        { label: "Recognition", val: "Tier 1", detail: "Chambers Ranked" },
                        { label: "Capabilities", val: "PAN-INDIA", detail: "Full Service" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-[10px] font-bold text-brand uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                            <p className="text-4xl font-serif font-bold text-text-main mb-1 group-hover:text-brand transition-colors">{stat.val}</p>
                            <p className="text-[10px] text-text-muted italic">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. STICKY FILTER & SEARCH */}
            <div className="sticky top-[72px] z-[90] bg-white/80 backdrop-blur-2xl border-b border-neutral-100 py-6 mt-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {['All', 'Partner', 'Counsel'].map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative py-2 ${activeFilter === filter ? 'text-brand' : 'text-text-muted hover:text-text-main'}`}
                            >
                                {filter === 'All' ? 'Every Expert' : filter + 's'}
                                {activeFilter === filter && (
                                    <motion.div layoutId="teamUnderline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72 group">
                        <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-hover:text-brand transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by Name or Practice..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-b border-neutral-200 focus:border-brand px-8 py-2 text-xs font-medium focus:outline-none transition-all placeholder:text-neutral-400"
                        />
                    </div>
                </div>
            </div>

            {/* 4. TEAM CONTENT */}
            <main className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                        {filteredMembers.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-32 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-neutral-50 flex items-center justify-center mb-6">
                                    <Users className="w-8 h-8 text-neutral-200" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-text-muted mb-4">No results found.</h3>
                                <p className="text-neutral-400 mb-8 max-w-md">We couldn't find any team members matching your specific criteria. Please try a different search or filter.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                                    className="px-8 py-3 bg-brand text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:shadow-xl transition-all"
                                >
                                    Reset Filters
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={`${activeFilter}-${searchQuery}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-32"
                            >

                                {/* Partners */}
                                {equityPartners.length > 0 && (
                                    <section>
                                        <CategoryTitle
                                            title="Partners"
                                            tagline="Operational Excellence"
                                            description="Navigaling complex global transactions and regulatory landscapes with unmatched sector-specific intelligence."
                                        />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                                            {equityPartners.map((member, idx) => (
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
                                            tagline="Specialized Expertise"
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
                        )}
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
                                        <h4 className="text-base font-bold text-text-main group-hover:text-brand transition-colors tracking-tight uppercase">{item.title}</h4>
                                        <p className="text-sm text-text-muted font-light leading-snug">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium relative">
                                <img
                                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
                                    alt="Professionalism"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-x-8 bottom-8 bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-neutral-100">
                                    <Quote className="w-10 h-10 text-brand/20 mb-6" />
                                    <p className="text-xl md:text-2xl font-serif italic text-text-main leading-relaxed mb-8">
                                        "In legal practice, precision is not a goal—it is our fundamental baseline."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white">
                                            <Star className="w-4 h-4 fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-text-main">Legacy of Trust</p>
                                            <p className="text-[10px] text-text-muted">Since 1994</p>
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
                                    <span className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase">Strategic Intersection</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-[0.9] tracking-tighter">
                                    Discuss your next <br />
                                    <span className="text-brand italic font-light">strategic milestone.</span>
                                </h2>
                                <p className="text-white/50 text-xl font-light mb-12 max-w-lg leading-relaxed">
                                    Our award-winning partners are ready to bring global precision to your most complex legal challenges.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <Link to="/contact" className="px-10 py-5 bg-brand hover:bg-brand-light text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full transition-all flex items-center gap-3 group shadow-premium-btn">
                                        Partner Collaboration
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                    <Link to="/practice-areas" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full transition-all border border-white/10 backdrop-blur-sm">
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
                                        <h4 className="font-bold text-xl mb-1">{badge.label}</h4>
                                        <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">{badge.sub}</p>
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
