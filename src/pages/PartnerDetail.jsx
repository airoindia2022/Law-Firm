import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Linkedin, Mail, ArrowLeft, ArrowRight, ChevronRight,
    Award, Shield, BookOpen, UserCheck,
    ExternalLink, MapPin, Briefcase, Star, Plus,
    Globe, Languages, FileText, Download
} from 'lucide-react'
import { TEAM_MEMBERS } from '../data'

const PartnerDetail = () => {
    const { slug } = useParams()
    const member = TEAM_MEMBERS.find(m => m.slug === slug) || {}
    const [imageError, setImageError] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!member.name) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-background">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-display font-bold text-deep-midnight mb-8 tracking-tighter"
                >
                    Profile Not Found
                </motion.h1>
                <Link to="/team" className="text-secondary font-bold text-xs uppercase tracking-[0.3em] border-b border-secondary/20 pb-2 hover:border-secondary transition-all">
                    Return to leadership
                </Link>
            </div>
        )
    }

    const firstName = member.name.split(' ')[0];
    const lastName = member.name.split(' ').slice(1).join(' ');

    return (
        <div className="bg-background min-h-screen font-sans selection:bg-secondary selection:text-white pb-20">
            {/* 1. ELEGANT TOP BAR */}
            <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-4' : 'bg-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                    <Link to="/team" className="group flex items-center gap-3 text-text-muted hover:text-secondary transition-all text-[11px] font-bold uppercase tracking-[0.3em]">
                        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-secondary transition-all">
                            <ArrowLeft className="w-3.5 h-3.5" />
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 hidden sm:inline">Our Team</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-4 border-r border-black/10 pr-6">
                            <a href={`mailto:${member.email || 'integritylegalcentre@gmail.com'}`} className="text-text-muted hover:text-secondary transition-colors">
                                <Mail className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-text-muted hover:text-secondary transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                        <Link to="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 bg-deep-midnight text-white hover:bg-secondary transition-all rounded-full">
                            Inquiry
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. MODERN HERO SECTION */}
            <section className="relative pt-40 lg:pt-56 pb-20 overflow-hidden">
                {/* Background Text Decor */}
                <div className="absolute top-40 right-[-10%] text-[20rem] font-display font-black text-black/[0.02] select-none pointer-events-none whitespace-nowrap hidden lg:block">
                    {firstName}
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="w-12 h-[1px] bg-secondary"></span>
                                    <span className="text-secondary font-bold text-[11px] tracking-[0.4em] uppercase">{member.role}</span>
                                </div>
                                <h1 className="text-7xl md:text-9xl lg:text-[140px] font-display font-medium text-deep-midnight leading-[0.9] tracking-tighter mb-8">
                                    {firstName} <br />
                                    <span className="text-secondary italic font-light">{lastName}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-text-muted max-w-xl font-light leading-relaxed mb-8">
                                    {member.bio}
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-edge bg-white"
                            >
                                <img
                                    src={!imageError ? new URL(`../asserts/${slug}.jpeg`, import.meta.url).href : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-all duration-1000"
                                    onError={() => setImageError(true)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-midnight/20 via-transparent to-transparent"></div>
                            </motion.div>

                            {/* Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-premium border border-black/5 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-display font-bold text-deep-midnight leading-none">25+</p>
                                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold mt-1">Years of Excellence</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PRACTICE AREAS TAGS */}
            <section className="py-12 bg-white/50 border-y border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold text-text-light uppercase tracking-[0.3em] mr-4">Expertise:</span>
                    {member.practiceFocus.split(',').map((tag, idx) => (
                        <span key={idx} className="px-5 py-2 bg-white border border-black/5 rounded-full text-[11px] font-medium text-text-muted hover:border-secondary/30 hover:text-secondary transition-all cursor-default">
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            </section>

            {/* 4. CONTENT GRID */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                        {/* Left: Biography */}
                        <div className="lg:col-span-7 space-y-16">
                            <div>
                                <h3 className="text-3xl font-display font-bold text-deep-midnight mb-8 flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-secondary/30"></span>
                                    Biography
                                </h3>
                                <div className="prose prose-lg text-text-muted font-light leading-relaxed space-y-6">
                                    {member.fullBio ? member.fullBio.split('\n\n').map((para, i) => (
                                        <p key={i}>{para}</p>
                                    )) : <p>{member.bio}</p>}
                                </div>
                            </div>

                            {member.experience && (
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-deep-midnight mb-10">Notable Career Milestones</h3>
                                    <div className="space-y-6">
                                        {member.experience.map((exp, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 10 }}
                                                className="flex gap-6 p-6 rounded-2xl bg-white border border-black/5 hover:border-secondary/20 transition-all"
                                            >
                                                <div className="mt-1">
                                                    <div className="w-6 h-6 rounded-full border border-secondary flex items-center justify-center text-secondary">
                                                        <ChevronRight className="w-3.5 h-3.5" />
                                                    </div>
                                                </div>
                                                <p className="text-text-main font-medium leading-relaxed">{exp}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Credentials & Education */}
                        <div className="lg:col-span-5 space-y-12">
                            {/* Education Card */}
                            <div className="p-10 rounded-[2.5rem] bg-deep-midnight text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-secondary/20 blur-3xl rounded-full"></div>
                                <h4 className="text-xl font-display font-bold mb-8 flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-secondary" />
                                    Academic Profile
                                </h4>
                                <div className="space-y-6">
                                    {member.education && member.education.map((edu, i) => (
                                        <div key={i} className="group pb-6 border-b border-white/10 last:border-0 last:pb-0">
                                            <p className="text-white/80 group-hover:text-white transition-colors leading-snug">{edu}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Memberships Card */}
                            <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-premium">
                                <h4 className="text-xl font-display font-bold text-deep-midnight mb-8 flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-secondary" />
                                    Professional Affiliations
                                </h4>
                                <div className="space-y-4">
                                    {member.memberships && member.memberships.map((mem, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-black/5">
                                            <div className="w-2 h-2 rounded-full bg-secondary/50"></div>
                                            <span className="text-sm font-bold text-text-muted uppercase tracking-tight">{mem}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            {member.languages && (
                                <div className="px-10 py-8 rounded-[2rem] bg-secondary/5 border border-secondary/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Languages className="w-5 h-5 text-secondary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Languages</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {member.languages.map((lang, i) => (
                                            <span key={i} className="text-xs font-bold text-deep-midnight">{lang}{i < member.languages.length - 1 ? ' • ' : ''}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action Card */}
                            <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-soft hover:shadow-premium transition-all text-center">
                                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
                                    <FileText className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-bold text-deep-midnight mb-4">Professional Dossier</h4>
                                <p className="text-sm text-text-muted mb-8 italic">Request a comprehensive track record and specific case studies related to {firstName}'s practice focus.</p>
                                <button className="w-full py-4 bg-deep-midnight text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-3 group">
                                    Request Full Profile
                                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BOTTOM NAVIGATION / CTA */}
            <section className="pt-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-2 bg-secondary/10 rounded-full mb-10">
                        <UserCheck className="w-4 h-4 text-secondary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Leadership Excellence</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-midnight mb-8 leading-tight">
                        Navigate complex legal landscapes with <span className="text-secondary italic">precision and depth.</span>
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto mb-12 font-light">
                        Consistent recognition as a “Leading Lawyer in India” underscores the depth of expertise and commitment to excellence that defines Integrity Legal Centre.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="px-10 py-4 bg-deep-midnight text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:shadow-premium-btn transition-all">
                            Connect with Abhijeet
                        </Link>
                        <Link to="/team" className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted hover:text-secondary group flex items-center gap-2">
                            View All Partners <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PartnerDetail
