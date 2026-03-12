import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Mail, Search, Calendar, ArrowRight, BarChart3, Zap, ShieldCheck, Globe2 } from 'lucide-react'
import { NEWSLETTERS } from '../data'

const Newsletters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "0399f4f3-e72e-4690-9d27-84afbf032987");
        formData.append("subject", "New Newsletter Subscription (Newsletters Page)");

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
    
    const filteredNewsletters = NEWSLETTERS.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-[#F8FAFC] min-h-screen selection:bg-brand selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-12 h-[1px] bg-brand"></span>
                            <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase">Intelligence & Insights</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-8 leading-[0.9]">
                            Legal <br />
                            <span className="italic font-normal text-brand-light">Briefings.</span>
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed max-w-2xl font-light">
                            Strategically distilled insights on the evolving Indian regulatory landscape, curated for global decision-makers and legal professionals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content & Search Section */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="mb-16 relative">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-border">
                            <div className="relative group max-w-md w-full">
                                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-text-light group-focus-within:text-brand transition-colors" />
                                <input 
                                    type="text" 
                                    placeholder="Search newsletters..."
                                    className="w-full bg-transparent border-none pl-8 pr-4 py-2 text-primary focus:ring-0 placeholder:text-text-light/50 text-lg font-light"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-text-light">
                                <span className="text-brand">Latest First</span>
                                <span className="opacity-20">|</span>
                                <span className="hover:text-brand cursor-pointer transition-colors">Archive</span>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
                        <AnimatePresence mode='popLayout'>
                            {filteredNewsletters.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="flex flex-col h-full bg-white p-8 md:p-12 rounded-[2rem] border border-border shadow-soft hover:shadow-premium transition-all duration-700">
                                        <div className="flex items-start justify-between mb-10">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 text-brand font-bold text-[10px] tracking-[0.2em] uppercase mb-2">
                                                    <Calendar className="h-3 w-3" />
                                                    {item.month} {item.year}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary group-hover:text-brand transition-colors duration-500 leading-tight">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] border border-border flex items-center justify-center text-text-light group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-500 shadow-sm">
                                                <Download className="h-6 w-6" />
                                            </div>
                                        </div>

                                        <p className="text-lg text-text-main font-medium mb-8 leading-relaxed">
                                            {item.description}
                                        </p>

                                        <div className="space-y-4 mb-12 flex-grow">
                                            {item.items.map((bullet, bIdx) => (
                                                <div key={bIdx} className="flex gap-4 group/item">
                                                    <div className="flex-shrink-0 mt-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand/30 group-hover/item:bg-brand group-hover/item:scale-125 transition-all duration-300"></div>
                                                    </div>
                                                    <span className="text-text-muted text-sm leading-relaxed group-hover/item:text-text-main transition-colors">
                                                        {bullet}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-8 border-t border-border flex items-center justify-between">
                                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-brand transition-colors group/btn">
                                                Read Full Analysis
                                                <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-2 transition-transform" />
                                            </button>
                                            <button className="p-3 text-text-light hover:text-brand transition-colors">
                                                <Mail className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredNewsletters.length === 0 && (
                        <div className="py-20 text-center">
                            <h3 className="text-2xl font-serif text-text-muted">No newsletters found matching your search.</h3>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-white">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="h-px w-8 bg-brand"></div>
                                    <span className="text-brand font-bold text-xs tracking-widest uppercase">Institutional Feed</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white leading-tight">
                                    Stay Ahead of the <br />
                                    <span className="text-brand italic font-normal">Regulatory Curve.</span>
                                </h2>
                                <p className="text-white/70 text-lg mb-10 max-w-lg">
                                    Receive strategic legal briefings designed for global decision-makers. High-impact intelligence, delivered directly.
                                </p>
                                
                                <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-md">
                                    <input 
                                        name="email"
                                        type="email" 
                                        required
                                        placeholder="Institutional email" 
                                        className="flex-grow bg-transparent border-none px-6 py-4 text-white focus:ring-0 placeholder:text-white/30 text-sm"
                                    />
                                    <button className="px-8 py-4 bg-brand hover:bg-brand-light text-white font-bold rounded-xl transition-all shadow-premium-btn whitespace-nowrap text-xs uppercase tracking-widest">
                                        {result || "Subscribe"}
                                    </button>
                                </form>
                                <p className="mt-4 text-[10px] text-white/30 uppercase tracking-[0.2em] ml-2">
                                    Guaranteed privacy. Unsubscribe anytime.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: 'Strategic', sub: 'Insights', icon: BarChart3 },
                                    { label: 'Real-time', sub: 'Updates', icon: Zap },
                                    { label: 'Expert', sub: 'Analysis', icon: ShieldCheck },
                                    { label: 'Global', sub: 'Scoping', icon: Globe2 }
                                ].map((badge, i) => (
                                    <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md group hover:bg-white/10 transition-all duration-500">
                                        <badge.icon className="h-6 w-6 text-brand mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                                        <h4 className="font-bold text-xl mb-1 text-white">{badge.label}</h4>
                                        <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">{badge.sub}</p>
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

export default Newsletters;
