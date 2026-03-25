import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ChevronRight, Briefcase, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MENU_ITEMS } from '../data'

const PracticeAreaCard = ({ name, path, image, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative h-[420px] rounded-[2rem] overflow-hidden bg-white border border-border shadow-soft hover:shadow-premium transition-all duration-500"
    >
        <Link to={path} className="h-full flex flex-col">
            <div className="relative h-2/3 overflow-hidden">
                <img
                    src={image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={name}
                    loading="lazy"
                />

                <div className="absolute top-4 right-4">
                    <div className="h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft text-brand opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="h-5 w-5" />
                    </div>
                </div>
            </div>

            <div className="p-6 h-1/3 flex flex-col justify-between -mt-6 bg-white rounded-t-[1.5rem] relative z-10 mx-2 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
                <div>
                    <h3 className="text-2xl font-bold font-display text-text-main group-hover:text-brand transition-colors tracking-tight leading-tight mb-2">
                        {name}
                    </h3>
                    <p className="text-sm text-text-muted font-medium uppercase tracking-widest">Practice Domain</p>
                </div>

                <div className="flex items-center gap-2 text-base font-semibold text-brand transition-all duration-300">
                    Discover Expertise <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    </motion.div>
)

const PracticeAreas = () => {
    const practiceAreas = MENU_ITEMS[2].submenu;

    return (
        <div className="bg-background min-h-screen pt-32 pb-48 overflow-hidden subtle-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-12"
                    >
                        <div className="max-w-3xl">
                            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-border mb-8">
                                <span className="text-secondary font-bold text-sm tracking-widest uppercase">Specialized Advisory</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold font-display text-text-main leading-tight mb-8">
                                Infinite <br />
                                <span className="gradient-text italic">Expertise.</span>
                            </h1>

                            <p className="text-xl text-text-muted leading-relaxed max-w-xl">
                                Integrity Legal Centre provides specialized legal intelligence across a broad spectrum of practice areas, delivering strategic solutions tailored to the world's most innovative sectors.
                            </p>
                        </div>

                        <div className="hidden lg:block pb-4">
                            <div className="flex flex-col items-center">
                                <div className="h-24 w-[2px] bg-gradient-to-t from-brand to-transparent rounded-full"></div>
                                <div className="mt-6 -rotate-90 origin-center text-[12px] font-bold text-text-muted uppercase tracking-widest whitespace-nowrap translate-y-8">Global Focus</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practiceAreas.map((area, index) => (area.path && (
                        <PracticeAreaCard key={area.name} {...area} index={index} />
                    )))}
                </div>
            </div>

            <section className="mt-32 section-padding bg-white relative border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                        <div className="lg:col-span-1">
                            <h2 className="text-5xl font-bold font-display text-text-main tracking-tight leading-tight mb-6">
                                Why Strategic <br /><span className="gradient-text">Insight Matters.</span>
                            </h2>
                            <p className="text-text-muted text-xl leading-relaxed">
                                Beyond the letter of the law, we navigate the spirit of the industry.
                            </p>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: 'Industry Depth', desc: 'Focus into niche sectors like Satellite Tech, Education, and Healthcare.', icon: Briefcase },
                                { title: 'Strategic Velocity', desc: 'Result-oriented advice that moves with the speed of your innovation.', icon: CheckCircle },
                                { title: 'Bespoke Logic', desc: 'Custom tailored strategies that respect both global standards and local nuances.', icon: Award }
                            ].map((item, idx) => (
                                <div key={idx} className="group p-8 rounded-2xl bg-background border border-transparent hover:bg-white hover:border-border hover:shadow-soft transition-all duration-300">
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand mb-6 shadow-sm group-hover:bg-brand group-hover:text-white transition-colors">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-bold text-text-main text-2xl mb-3">{item.title}</h4>
                                    <p className="text-text-muted text-base leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PracticeAreas
