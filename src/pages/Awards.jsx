import React from 'react'
import { motion } from 'framer-motion'
import {
    Trophy,
    BookOpen,
    Scale,
    Shield,
    Building2,
    Cpu,
    TrendingUp,
    Stethoscope,
    Gavel,
    Award,
    Star,
    ChevronRight
} from 'lucide-react'
import { AWARDS } from '../data'

const iconMap = {
    BookOpen: BookOpen,
    Scale: Scale,
    Shield: Shield,
    Building2: Building2,
    Cpu: Cpu,
    TrendingUp: TrendingUp,
    Stethoscope: Stethoscope,
    Gavel: Gavel
}

const Awards = () => {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-border">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-px w-8 bg-brand"></div>
                            <span className="text-brand font-bold text-sm tracking-widest uppercase">Recognition & Excellence</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-display text-text-main leading-tight mb-6 md:mb-8">
                            A Legacy of <br />
                            <span className="text-brand italic">Distinction.</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-text-muted leading-relaxed max-w-2xl mb-10 font-light">
                            Integrity Legal Centre is consistently recognized by premier international and domestic legal directories for our unwavering commitment to legal excellence and client success.
                        </p>

                        <div className="flex flex-wrap gap-8 py-8 border-t border-border mt-8">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-text-main">20+</span>
                                <span className="text-base text-text-muted uppercase tracking-wider">Years of Excellence</span>
                            </div>
                            <div className="w-px h-12 bg-border hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-text-main">50+</span>
                                <span className="text-base text-text-muted uppercase tracking-wider">Major Awards</span>
                            </div>
                            <div className="w-px h-12 bg-border hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-text-main">100%</span>
                                <span className="text-base text-text-muted uppercase tracking-wider">Client Dedication</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-24 bg-background relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-main mb-4">Honors & Accolades</h2>
                            <p className="text-text-muted text-xl">Explore the recognition we have received from the world's most prestigious legal institutions.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {AWARDS.map((item, idx) => {
                            const IconComponent = iconMap[item.icon] || Trophy
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative flex flex-col bg-white p-8 rounded-3xl border border-border hover:border-brand/30 shadow-soft hover:shadow-premium transition-all duration-500 overflow-hidden"
                                >
                                    {/* Accent background on hover */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand/10 transition-colors duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-border/50">
                                            <IconComponent className="h-7 w-7" />
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-brand/70 bg-brand/5 px-2 py-1 rounded-md">{item.year}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold font-display text-text-main mb-3 group-hover:text-brand transition-colors leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm font-medium text-text-muted/80 uppercase tracking-wider mb-4 border-b border-border pb-4 w-fit">
                                            {item.organization}
                                        </p>

                                        <p className="text-base text-text-muted leading-relaxed line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom aesthetic bar */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full"></div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Quote Section */}
            <section className="py-32 bg-white relative overflow-hidden border-y border-border">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[40px] border-brand rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Award className="h-16 w-16 text-brand mx-auto mb-10 opacity-40" />
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-display text-text-main leading-tight mb-8 md:mb-10 italic px-4">
                            "Excellence is not an act, but a habit. Our awards reflect a decades-long commitment to setting the highest benchmarks in the legal profession."
                        </h2>
                        <div className="h-px w-24 bg-brand mx-auto mb-6"></div>
                        <p className="text-base font-bold uppercase tracking-[0.3em] text-text-muted">Integrity Legal Centre</p>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA/Info Section */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white leading-tight">Partnering for Excellence</h2>
                                <p className="text-white/70 text-xl mb-8 max-w-lg">
                                    Our recognition is a testament to the trust our clients place in us. Let us bring our award-winning expertise to your legal challenges.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-8 py-4 bg-brand hover:bg-brand-light text-white font-bold rounded-full transition-all flex items-center gap-2 group shadow-premium-btn">
                                        Consult with Experts
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20 backdrop-blur-sm">
                                        Our Practice Areas
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: 'Top Tier 1', sub: 'Legal 500' },
                                    { label: 'Recommended', sub: 'Chambers & Partners' },
                                    { label: 'Winner', sub: 'IBLJ 2021' },
                                    { label: 'Elite Firm', sub: 'BW Legal World' }
                                ].map((badge, i) => (
                                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                                        <Star className="h-5 w-5 text-brand mb-4 fill-brand/20" />
                                        <h4 className="font-bold text-2xl mb-1">{badge.label}</h4>
                                        <p className="text-white/50 text-base uppercase tracking-widest">{badge.sub}</p>
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

export default Awards

