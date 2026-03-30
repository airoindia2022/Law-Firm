import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter, User, Briefcase, FileText } from 'lucide-react'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "aada99dc-987c-402c-baac-baf21cef5e62");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
                setTimeout(() => setResult(""), 5000);
            } else {
                setResult("Error: " + data.message);
            }
        } catch (error) {
            setResult("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-[#B8860B] selection:text-white">
            {/* HEROS SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A0F1C]">
                {/* Abstract Premium Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B8860B]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse"></span>
                            <span className="text-white/80 font-bold text-[0.8125rem] tracking-[0.2em] uppercase">Global Reach</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold font-display text-white leading-[1.1] mb-6 md:mb-8">
                            Connect with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37] italic">
                                Strategic Counsel.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-light">
                            Our global dispatch is ready to facilitate your legal transformation across six strategic Indian jurisdictions. Reach out to secure your consultation.
                        </p>
                    </motion.div>
                </div>

                {/* Subtle bottom border gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </section>

            <section className="py-16 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 relative z-20 -mt-8 md:-mt-10">
                {/* Left Side: Form */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 md:mb-16 bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
                    >
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"></div>

                        <div className="mb-12">
                            <h2 className="text-4xl font-bold font-display text-[#0F172A] mb-4">Initialize Inquiry</h2>
                            <p className="text-lg text-[#64748B] leading-relaxed max-w-md">
                                Secure a confidential consultation with our specialized legal task force. Responses are dispatched within one business cycle.
                            </p>
                        </div>

                        <form onSubmit={onSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 relative group">
                                    <label className="text-[0.8125rem] font-bold text-[#94A3B8] uppercase tracking-[0.15em] ml-1 group-focus-within:text-[#B8860B] transition-colors">Principal Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#B8860B] transition-colors" />
                                        </div>
                                        <input name="name" required type="text" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-12 pr-6 py-4 text-base text-[#0F172A] focus:ring-2 focus:ring-[#B8860B]/20 focus:border-[#B8860B] outline-none transition-all placeholder:text-gray-400" placeholder="Full legal name" />
                                    </div>
                                </div>
                                <div className="space-y-2 relative group">
                                    <label className="text-[0.8125rem] font-bold text-[#94A3B8] uppercase tracking-[0.15em] ml-1 group-focus-within:text-[#B8860B] transition-colors">Corporate Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#B8860B] transition-colors" />
                                        </div>
                                        <input name="email" required type="email" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-12 pr-6 py-4 text-base text-[#0F172A] focus:ring-2 focus:ring-[#B8860B]/20 focus:border-[#B8860B] outline-none transition-all placeholder:text-gray-400" placeholder="institutional@enterprise.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 relative group">
                                <label className="text-[0.8125rem] font-bold text-[#94A3B8] uppercase tracking-[0.15em] ml-1 group-focus-within:text-[#B8860B] transition-colors">Jurisdiction / Subject</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Briefcase className="h-5 w-5 text-gray-400 group-focus-within:text-[#B8860B] transition-colors" />
                                    </div>
                                    <input name="subject" required type="text" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-12 pr-6 py-4 text-base text-[#0F172A] focus:ring-2 focus:ring-[#B8860B]/20 focus:border-[#B8860B] outline-none transition-all placeholder:text-gray-400" placeholder="Brief subject of advisory" />
                                </div>
                            </div>
                            <div className="space-y-2 relative group">
                                <label className="text-[0.8125rem] font-bold text-[#94A3B8] uppercase tracking-[0.15em] ml-1 group-focus-within:text-[#B8860B] transition-colors">Detailed Briefing</label>
                                <div className="relative">
                                    <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                                        <FileText className="h-5 w-5 text-gray-400 group-focus-within:text-[#B8860B] transition-colors" />
                                    </div>
                                    <textarea name="message" required rows="5" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-12 pr-6 py-4 text-base text-[#0F172A] focus:ring-2 focus:ring-[#B8860B]/20 focus:border-[#B8860B] outline-none transition-all placeholder:text-gray-400 resize-none" placeholder="Provide strategic context..."></textarea>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button disabled={isSubmitting} type="submit" className="w-full relative inline-flex items-center justify-center px-8 py-5 bg-[#0F172A] text-white text-[0.875rem] font-bold uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:bg-[#B8860B] hover:shadow-[0_10px_20px_rgba(184,134,11,0.2)] disabled:opacity-70 disabled:cursor-not-allowed group/btn">
                                    <span className="relative z-10 flex items-center gap-3">
                                        {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT INQUIRY'}
                                        <Send className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                            </div>

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl text-center text-sm font-bold tracking-[0.1em] border ${result.includes('Error')
                                        ? 'bg-red-50 text-red-600 border-red-100'
                                        : result === 'Sending....'
                                            ? 'bg-blue-50 text-blue-600 border-blue-100'
                                            : 'bg-green-50 text-[#B8860B] border-[#B8860B]/20'
                                        }`}
                                >
                                    {result}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Right Side: Contact Info */}
                <div className="w-full lg:w-[420px] space-y-8 lg:mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold font-display text-[#0F172A] mb-8 flex items-center gap-4">
                            Global Hubs
                            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                        </h3>

                        <div className="space-y-6">
                            {[
                                {
                                    city: 'Delhi HQ',
                                    address: ' near tis hazari court adjacent to St. Stephen\'s Hospital, Delhi, India',
                                    phone: '+91 7668392730',
                                    email: 'integritylegalcentre@gmail.com',
                                },
                                {
                                    city: 'Lucknow ',
                                    address: '23/B, new friends colony behind DPS school , Jankipuram Extension , Lucknow up',
                                    phone: '+91 7668392730',
                                    email: 'advocateyhsiddiqui@gmail.com',
                                }
                            ].map((office, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 md:p-8 rounded-2xl md:rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:border-[#B8860B]/30 hover:shadow-[0_20px_40px_-15px_rgba(184,134,11,0.1)] transition-all duration-500 group"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]"></span>
                                        <h4 className="text-[0.875rem] font-bold text-[#0F172A] uppercase tracking-[0.15em]">{office.city}</h4>
                                    </div>

                                    <div className="space-y-6">
                                        {office.address && (
                                            <div className="flex gap-4 group/item items-start">
                                                <div className="h-10 w-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#B8860B] group-hover/item:bg-[#B8860B] group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5 border border-gray-100">
                                                    <MapPin className="h-4 w-4" />
                                                </div>
                                                <span className="text-[0.9375rem] font-medium text-[#64748B] leading-relaxed pt-1">{office.address}</span>
                                            </div>
                                        )}
                                        {office.phone && (
                                            <div className="flex gap-4 group/item items-center relative overflow-hidden">
                                                <div className="h-10 w-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#B8860B] group-hover/item:bg-[#B8860B] group-hover/item:text-white transition-colors flex-shrink-0 border border-gray-100">
                                                    <Phone className="h-4 w-4" />
                                                </div>
                                                <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-[1rem] font-bold text-[#0F172A] hover:text-[#B8860B] transition-colors">{office.phone}</a>
                                            </div>
                                        )}
                                        <div className="flex gap-4 group/item items-center">
                                            <div className="h-10 w-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#B8860B] group-hover/item:bg-[#B8860B] group-hover/item:text-white transition-colors flex-shrink-0 border border-gray-100">
                                                <Mail className="h-4 w-4" />
                                            </div>
                                            <a href={`mailto:${office.email}`} className="text-[0.9375rem] font-medium text-[#0F172A] hover:text-[#B8860B] transition-colors break-all">{office.email}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 rounded-[1.5rem] bg-[#0A0F1C] border border-[#1E293B] shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#B8860B]/10 rounded-bl-full blur-[20px] group-hover:bg-[#B8860B]/20 transition-all duration-1000"></div>
                        <h4 className="text-[0.8125rem] font-bold text-white/50 uppercase tracking-[0.2em] mb-6 relative z-10">Intelligence Network</h4>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Contact

