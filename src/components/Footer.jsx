import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../asserts/logo.jpg'
import {
    Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail,
    ArrowRight, GraduationCap, Scale, Heart, Briefcase, Globe,
    Newspaper, Shield, Gavel, Building2, ExternalLink
} from 'lucide-react'

const Footer = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "aada99dc-987c-402c-baac-baf21cef5e62");
        formData.append("subject", "New Newsletter Subscription (Footer)");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Success!");
            event.target.reset();
            setTimeout(() => setResult(""), 5000);
        } else {
            setResult("Error");
        }
    };

    const footerLinks = {
        firm: [
            { name: 'Meet Our Partners', path: '/team' },
            { name: 'Our Services', path: '/services' },
            { name: 'Practice Areas', path: '/practice-areas' },
            { name: 'Latest Newsletters', path: '/newsletters' },
            { name: 'Contact Us', path: '/contact' },
        ],
        practice: [
            { name: 'Corporate & Commercial', path: '/practice-areas/corporate-commercial' },
            { name: 'Real Estate Law', path: '/practice-areas/real-estate' },
            { name: 'Education Law', path: '/practice-areas/education' },
            { name: 'Intellectual Property', path: '/practice-areas/intellectual-property' },
            { name: 'Dispute Resolution', path: '/practice-areas/dispute-resolution' },
        ],
        ecosystem: [
            { name: 'Academics', url: 'https://airoindia.net', icon: GraduationCap },
            { name: 'Legal', url: 'https://www.integritylegalcentre.in/', icon: Scale },
            { name: 'Matrimony', url: 'https://shubhvivah.org.in/', icon: Heart },
            { name: 'Jobs', url: 'https://jobcenterindia.com', icon: Briefcase },
            { name: 'NGO', url: 'https://www.navnirmanwelfaresociety.in/', icon: Globe },
            { name: 'News', url: 'https://www.hindustanradiance.co.in/', icon: Newspaper },
        ]
    }

    return (
        <footer className="bg-[#0A0F1C] text-white pt-24 pb-12 relative overflow-hidden">
            {/* Advanced Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-30"></div>
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Upper Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 border-b border-white/5">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start"
                        >
                            <Link to="/" className="mb-8 bg-white p-3 rounded-xl shadow-2xl group transition-transform hover:scale-105">
                                <img className="h-12 w-auto" src={logo} alt="Integrity Legal Center" />
                            </Link>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                                Navigating Global Landscapes with <span className="text-brand">Integrity</span>.
                            </h2>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                    <motion.a
                                        key={idx}
                                        href="#"
                                        whileHover={{ y: -5, color: '#B8860B' }}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-colors hover:bg-white/10"
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Strategic Insights</h3>
                                <p className="text-white/40 text-sm">Subscribe for monthly legal updates and firm announcements.</p>
                            </div>
                            <form onSubmit={onSubmit} className="relative group max-w-sm">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Corporate Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-brand/50 transition-all text-white placeholder:text-white/20"
                                />
                                <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-brand text-white rounded-full text-[0.65rem] font-bold tracking-widest uppercase hover:bg-brand-light transition-all shadow-lg active:scale-95">
                                    {result || "Join"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
                    {/* The Firm */}
                    <div className="col-span-1">
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-8">The Firm</h4>
                        <ul className="space-y-4">
                            {footerLinks.firm.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-white/50 hover:text-white transition-colors text-sm flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div className="col-span-1">
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-8">Practice</h4>
                        <ul className="space-y-4">
                            {footerLinks.practice.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-white/50 hover:text-white transition-colors text-sm flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div className="col-span-1">
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-8">Ecosystem</h4>
                        <ul className="space-y-4">
                            {footerLinks.ecosystem.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm flex items-center group">
                                        <link.icon size={16} className="mr-3 text-brand/70 group-hover:text-brand transition-colors" />
                                        {link.name}
                                        <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-50 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Global Presence */}
                    <div className="col-span-2 lg:col-span-2">
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-8">Global Presence</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-brand" />
                                </div>
                                <div className="text-white/50 text-sm leading-relaxed">
                                    <p className="text-white font-bold mb-1 italic">Delhi Headquarters</p>
                                    <p>Near Tis Hazari Court, Adjacent to St. Stephen's Hospital</p>
                                    <p>Delhi, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                                    <Phone size={20} className="text-brand" />
                                </div>
                                <a href="tel:+917668392730" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                                    +91 7668392730
                                </a>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                                    <Mail size={20} className="text-brand" />
                                </div>
                                <a href="mailto:info@integritylegal.in" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                                    info@integritylegal.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase text-white/30">
                    <p>© {new Date().getFullYear()} Integrity Legal Centre. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
                        <a href="https://airo-india.vercel.app/" className="text-brand hover:text-brand-light transition-colors">
                            Powered by AIRO India
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

