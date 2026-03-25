import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { MENU_ITEMS } from '../data'
import phero from '../asserts/hero1.jpeg'


const PracticeArea = () => {
    const { slug } = useParams()
    const area = MENU_ITEMS[2].submenu?.find(sub => sub.path.includes(slug)) || {}

    if (!area.name) return <div className="p-20 text-center font-bold font-display uppercase tracking-widest text-brand bg-background h-screen flex items-center justify-center">Resource Not Found</div>

    const services = area.services || [
        'Strategic Advisory',
        'Regulatory Compliance',
        'Legal Audit',
        'Drafting and Conveyancing',
        'General Counsel Services'
    ]

    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-background">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.15 }}
                        transition={{ duration: 3 }}
                        className="w-full h-full"
                    >
                        <img
                            src={phero}
                            className="w-full h-full object-cover grayscale"
                            alt={area.name}
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
                    <div className="absolute inset-0 subtle-pattern"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
                    <div className="flex items-center gap-3 text-secondary text-[12px] font-bold uppercase tracking-widest mb-10">
                        <Link to="/" className="hover:text-brand transition-colors">Home</Link>
                        <span className="text-border">&gt;</span>
                        <Link to="/practice-areas" className="hover:text-brand transition-colors">Practice Areas</Link>
                        <span className="text-border">&gt;</span>
                        <span className="text-brand">{area.name}</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-border mb-8">
                            <span className="text-secondary font-bold text-sm tracking-widest uppercase">Core Domain Expertise</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-text-main leading-tight mb-8">
                            {area.name}
                        </h1>
                        <p className="text-2xl text-text-muted leading-relaxed font-light italic max-w-2xl border-l-2 border-brand/20 pl-8">
                            "{area.description}"
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <div className="mb-24">
                            <div className="flex items-center gap-6 mb-16">
                                <h2 className="text-4xl font-display font-bold text-text-main whitespace-nowrap uppercase tracking-widest">Client <span className="italic gradient-text">Capabilities</span></h2>
                                <div className="h-[1px] w-full bg-border"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-8 card-light flex gap-6 items-start hover:-translate-y-1 transition-all"
                                    >
                                        <div className="w-12 h-12 bg-white border border-border shadow-sm rounded-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <CheckCircle className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-text-main group-hover:text-brand transition-colors mb-2">
                                                {service}
                                            </h4>
                                            <p className="text-base text-text-muted leading-relaxed">Comprehensive legal strategy focusing on regulatory compliance and risk mitigation.</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-[400px] space-y-10">
                        <div className="card-light !p-10 relative overflow-hidden group">
                            <h4 className="text-brand font-bold mb-10 text-xs uppercase tracking-widest">Global Expertise</h4>
                            <div className="space-y-6">
                                {MENU_ITEMS[2].submenu?.filter(s => s.path && !s.path.includes(slug)).slice(0, 6).map(s => (
                                    <Link key={s.name} to={s.path} className="group block">
                                        <div className="flex items-center justify-between border-b border-border pb-4 hover:border-brand/40 transition-colors">
                                            <span className="text-base font-semibold text-text-muted group-hover:text-brand transition-colors">
                                                {s.name}
                                            </span>
                                            <ArrowRight className="h-4 w-4 text-border group-hover:text-brand transition-colors" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Link to="/practice-areas" className="block mt-12 text-center text-xs font-bold text-brand uppercase tracking-widest pt-8 border-t border-border hover:text-text-main transition-colors">All Domains</Link>
                        </div>

                        <div className="p-10 bg-white border border-border shadow-soft rounded-[2rem] relative overflow-hidden group text-center">
                            <div className="absolute inset-0 bg-brand/5"></div>
                            <div className="relative z-10">
                                <h4 className="font-display font-bold text-text-main mb-4 text-3xl italic">Strategic Council</h4>
                                <p className="text-text-muted text-base mb-8 leading-relaxed">Connect with our Lead Partners for bespoke legal transformation strategies.</p>
                                <Link to="/contact" className="btn-primary !w-full justify-center">Request Consultation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PracticeArea
