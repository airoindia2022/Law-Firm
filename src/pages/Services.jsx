import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowUpRight, Shield, Clock, Award, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MENU_ITEMS } from '../data'

const Services = () => {
    // Extracting practice areas from MENU_ITEMS
    const practiceAreas = MENU_ITEMS.find(item => item.name === 'Practice Areas')?.submenu || [];

    return (
        <div className="bg-background min-h-screen pt-32 pb-48 overflow-hidden subtle-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="relative mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-border mb-8">
                            <span className="text-secondary font-bold text-sm tracking-widest uppercase">Comprehensive Legal Services</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-display text-text-main leading-tight mb-6 md:mb-8">
                            Essential <span className="gradient-text italic">Resources.</span>
                        </h1>

                        <p className="text-xl text-text-muted leading-relaxed max-w-xl">
                            Explore our comprehensive range of legal services designed to protect your interests and drive your success in a complex global market.
                        </p>
                    </motion.div>
                </div>

                {/* Specialized Resources / Useful Links Section */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-text-main mb-6">
                            Government <span className="gradient-text">Services.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Aadhar Card', url: 'https://uidai.gov.in/en/' },
                            { name: 'PAN Card', url: 'https://www.incometaxindia.gov.in/tax-services' },
                            { name: 'Driving Licence', url: 'http://parivahan.gov.in/' },
                            { name: 'Voter ID', url: 'https://voters.eci.gov.in/' },
                            { name: 'Death Certificate', url: 'https://dc.crsorgi.gov.in/crs/' },
                            { name: 'Disability Certificate', url: 'https://www.swavlambancard.gov.in/' },
                            { name: 'Income Certificate', url: 'https://edistrict.up.gov.in/edistrictup/' },
                            { name: 'Domicile Certificate', url: 'https://services.india.gov.in/service/detail/apply-for-domicile-certificate-uttar-pradesh' },
                            { name: 'E Shram Card', url: 'https://eshram.gov.in/indexmain' },
                            { name: 'Passport Apply', url: 'https://services2.passportindia.gov.in/psp' },
                            { name: 'Caste Certificate', url: 'https://edistrict.up.gov.in/edistrictup/' },
                            { name: 'PMJAY', url: 'https://pmjay.gov.in/' },
                            { name: 'Labour Card', url: 'https://labour.mp.gov.in/' },
                            { name: 'Ration Card', url: 'https://fcs.up.gov.in/' }
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-2xl bg-white border border-border hover:border-brand hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-[0.65rem] font-bold text-brand uppercase tracking-widest mb-3 block">{link.category}</span>
                                    <h4 className="font-bold text-text-main group-hover:text-brand transition-colors mb-4">{link.name}</h4>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-text-muted group-hover:text-brand font-medium">
                                    Visit Portal <ArrowUpRight className="h-3 w-3" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-text-main mb-6">
                            Registration & Tax Filing <span className="gradient-text">Services.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'GST Registration', url: 'https://services.gst.gov.in/services/quicklinks/registration' },
                            { name: 'One Person Company', url: 'https://www.mca.gov.in/' },
                            { name: 'Private Limited Registration', url: 'https://www.mca.gov.in/' },
                            { name: 'Change Business Name', url: 'https://www.mca.gov.in/' },
                            { name: 'Add/Remove Partner', url: 'https://www.mca.gov.in/' },
                            { name: 'GST Correction', url: 'https://services.gst.gov.in/services/quicklinks/registration' },
                            { name: 'Section 8 Company', url: 'http://www.barcouncilofindia.org/' },
                            { name: 'Income Tax Return', url: 'http://www.barcouncilofindia.org/' },
                            { name: 'GST Return', url: 'http://www.barcouncilofindia.org/' },
                            { name: 'FSSAI', url: 'http://www.barcouncilofindia.org/' },
                            { name: 'TDS Return', url: 'http://www.barcouncilofindia.org/' },
                            { name: 'TAN Registration', url: 'http://www.barcouncilofindia.org/' }
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-2xl bg-white border border-border hover:border-brand hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-[0.65rem] font-bold text-brand uppercase tracking-widest mb-3 block">{link.category}</span>
                                    <h4 className="font-bold text-text-main group-hover:text-brand transition-colors mb-4">{link.name}</h4>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-text-muted group-hover:text-brand font-medium">
                                    Visit Portal <ArrowUpRight className="h-3 w-3" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Integration with external or internal links section */}
                <div className="mt-32 p-12 rounded-[3rem] bg-text-main text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/20 to-transparent opacity-50"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-8">
                                Need Specialized <br /><span className="text-brand">Assistance?</span>
                            </h2>
                            <p className="text-white/70 text-xl leading-relaxed mb-10">
                                Our legal experts are ready to guide you through any complex legal landscape. Reach out for a consultation.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-brand text-white rounded-full font-bold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20">
                                    Contact Us Today
                                </Link>
                                <Link to="/team" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all duration-300 backdrop-blur-sm">
                                    Speak to the Team
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: 'Fast Results', icon: Clock, value: 'Rapid' },
                                { title: 'Legal Ethics', icon: Shield, value: 'Ethical' },
                                { title: 'Top Ranked', icon: Award, value: 'Top 1% ' },
                                { title: 'Global Reach', icon: Users, value: 'Global' }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <stat.icon className="h-8 w-8 text-brand mb-4" />
                                    <h4 className="font-bold text-xl mb-1">{stat.value}</h4>
                                    <p className="text-white/50 text-sm">{stat.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
