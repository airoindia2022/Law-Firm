import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const Footer = () => (
    <footer className="bg-[#0A0F1C] text-white pt-32 pb-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

                {/* Brand Column */}
                <div className="lg:col-span-4 flex flex-col items-start">
                    <Link to="/" className="mb-10 bg-white p-3 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] group overflow-hidden relative">
                        <img className="h-10 w-auto relative z-10" src="https://lexcounsel.in/wp-content/uploads/2021/06/unnamed.png" alt="LexCounsel" />
                        <div className="absolute inset-0 bg-brand/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                    <p className="text-white/60 text-lg leading-relaxed mb-10 font-light italic max-w-sm">
                        "Your strategic partner in navigating complex global legal landscapes with integrity and innovation."
                    </p>
                    <div className="flex gap-4">
                        {[
                            { icon: Linkedin, label: 'LinkedIn' },
                            { icon: Twitter, label: 'Twitter' },
                            { icon: Facebook, label: 'Facebook' }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-500 shadow-xl"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="lg:col-span-2">
                    <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-10 border-l-2 border-brand pl-4">The Firm</h4>
                    <ul className="space-y-5 text-white/50 font-medium">
                        <li><Link to="/team" className="hover:text-brand transition-colors flex items-center group gap-2">
                            <span className="w-0 h-0.5 bg-brand transition-all group-hover:w-4"></span>
                            Meet Our Partners
                        </Link></li>
                        <li><Link to="/practice-areas" className="hover:text-brand transition-colors flex items-center group gap-2">
                            <span className="w-0 h-0.5 bg-brand transition-all group-hover:w-4"></span>
                            Practice Areas
                        </Link></li>
                        <li><Link to="/awards" className="hover:text-brand transition-colors flex items-center group gap-2">
                            <span className="w-0 h-0.5 bg-brand transition-all group-hover:w-4"></span>
                            Awards & Recognition
                        </Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="lg:col-span-3">
                    <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-10 border-l-2 border-brand pl-4">Global Reach</h4>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 group">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand/20 transition-colors">
                                <MapPin className="w-5 h-5 text-brand" />
                            </div>
                            <div className="text-white/50 leading-relaxed text-sm">
                                <p className="text-white font-bold mb-1">New Delhi (HQ)</p>
                                <p>C-10, Gulmohar Park,</p>
                                <p>New Delhi 110049, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand/20 transition-colors">
                                <Phone className="w-5 h-5 text-brand" />
                            </div>
                            <div className="text-white/50 font-medium text-sm">
                                <p className="text-white font-bold mb-1">Inquiry</p>
                                <p>+91 11 4166 2861</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Column */}
                <div className="lg:col-span-3">
                    <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-10 border-l-2 border-brand pl-4">Newsletter</h4>
                    <p className="text-white/50 text-sm mb-8 leading-relaxed">Subscribe to receive strategic legal insights and firm updates.</p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Corporate Email"
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand/50 focus:bg-white/10 transition-all text-white placeholder:text-white/30"
                        />
                        <button className="absolute right-2 top-2 bottom-2 px-6 bg-brand text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-brand-light transition-all shadow-lg active:scale-95">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-white/30 text-[11px] font-bold tracking-widest uppercase">
                    © {new Date().getFullYear()} LexCounsel Law Offices. All Rights Reserved.
                </p>
                <div className="flex gap-10 text-[11px] font-bold tracking-widest uppercase text-white/30">
                    <a href="#" className="hover:text-brand transition-colors underline-offset-4 hover:underline">Disclaimer</a>
                    <a href="#" className="hover:text-brand transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:text-brand transition-colors underline-offset-4 hover:underline">T&C</a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
