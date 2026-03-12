import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "0399f4f3-e72e-4690-9d27-84afbf032987");

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
    };

    return (
        <div className="bg-background min-h-screen subtle-pattern">
            <section className="relative h-[50vh] flex items-center overflow-hidden bg-background">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-border mb-8">
                            <span className="text-secondary font-bold text-xs tracking-widest uppercase">Global Reach</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif text-text-main leading-tight mb-8">
                            Connect with <br />
                            <span className="gradient-text italic">Strategic Counsel.</span>
                        </h1>
                        <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
                            Our global dispatch is ready to facilitate your legal transformation across six strategic Indian jurisdictions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="flex-1">
                    <div className="mb-16">
                        <div className="flex items-center gap-5 mb-10">
                            <h2 className="text-3xl font-bold font-serif text-text-main tracking-tight whitespace-nowrap">Initialize Inquiry</h2>
                            <div className="h-px w-full bg-border"></div>
                        </div>
                        <p className="text-base text-text-muted mb-12 leading-relaxed max-w-2xl">Secure a confidential consultation with our specialized legal task force. Responses are dispatched within one business cycle.</p>

                        <form onSubmit={onSubmit} className="space-y-8 group bg-white p-8 md:p-10 rounded-[2rem] border border-border shadow-soft">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Principal Name</label>
                                    <input name="name" required type="text" className="w-full bg-surface border border-border rounded-xl px-6 py-4 text-sm text-text-main focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-text-muted/50" placeholder="Full legal name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Corporate Email</label>
                                    <input name="email" required type="email" className="w-full bg-surface border border-border rounded-xl px-6 py-4 text-sm text-text-main focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-text-muted/50" placeholder="institutional@enterprise.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Jurisdiction / Subject</label>
                                <input name="subject" required type="text" className="w-full bg-surface border border-border rounded-xl px-6 py-4 text-sm text-text-main focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-text-muted/50" placeholder="Brief subject of advisory" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Detailed Briefing</label>
                                <textarea name="message" required rows="5" className="w-full bg-surface border border-border rounded-xl px-6 py-4 text-sm text-text-main focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-text-muted/50 resize-none" placeholder="Provide strategic context..."></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full py-5 text-sm uppercase tracking-widest flex items-center justify-center gap-3">
                                TRANSMIT INQUIRY <Send className="h-4 w-4" />
                            </button>
                            {result && (
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`text-center text-sm font-bold tracking-widest uppercase ${result.includes('Error') ? 'text-red-500' : 'text-brand'}`}
                                >
                                    {result}
                                </motion.p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="w-full lg:w-[420px] space-y-12">
                    <div>
                        <div className="flex items-center gap-5 mb-10">
                            <h2 className="text-2xl font-bold font-serif text-text-main tracking-tight whitespace-nowrap">Global Hubs</h2>
                            <div className="h-px w-full bg-border"></div>
                        </div>
                        <div className="space-y-6">
                            {[
                                {
                                    city: 'Delhi | National HQ',
                                    address: 'B-4/232, Safdarjung Enclave, New Delhi - 110029, India',
                                    phone: '+91 11 4166 2861',
                                    email: 'info@lexcounsel.in'
                                },
                                {
                                    city: 'Odisha | Regional Hub',
                                    address: 'D-36, Defence (AWHO) Colony, Niladri Vihar, Bhubaneswar - 751021',
                                    phone: '+91 77354 14855',
                                    email: 'odisha@lexcounsel.in'
                                },
                                {
                                    city: 'Strategic Jurisdictions',
                                    locations: ['Chandigarh', 'Kolkata', 'Prayagraj', 'Ahmedabad'],
                                    email: 'info@lexcounsel.in'
                                }
                            ].map((office, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-white border border-border shadow-sm hover:shadow-soft hover:border-brand/30 transition-all duration-500 group"
                                >
                                    <h4 className="text-xs font-bold text-brand uppercase tracking-widest mb-6">{office.city}</h4>
                                    <div className="space-y-5">
                                        {office.address && (
                                            <div className="flex gap-4 group/item items-start">
                                                <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted group-hover/item:bg-brand group-hover/item:text-white transition-colors shadow-sm flex-shrink-0 mt-0.5">
                                                    <MapPin className="h-4 w-4" />
                                                </div>
                                                <span className="text-sm font-medium text-text-main leading-relaxed">{office.address}</span>
                                            </div>
                                        )}
                                        {office.locations && (
                                            <div className="flex gap-4 items-start">
                                                <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted shadow-sm flex-shrink-0 mt-0.5">
                                                    <MapPin className="h-4 w-4" />
                                                </div>
                                                <div className="flex gap-2 flex-wrap pt-2">
                                                    {office.locations.map((loc, lIdx) => (
                                                        <span key={lIdx} className="text-[11px] font-bold text-secondary uppercase tracking-widest border border-border bg-surface px-2 py-1 rounded">{loc}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {office.phone && (
                                            <div className="flex gap-4 group/item items-center">
                                                <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted group-hover/item:bg-brand group-hover/item:text-white transition-colors shadow-sm flex-shrink-0">
                                                    <Phone className="h-4 w-4" />
                                                </div>
                                                <span className="text-sm font-medium text-text-main">{office.phone}</span>
                                            </div>
                                        )}
                                        <div className="flex gap-4 group/item items-center">
                                            <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted group-hover/item:bg-brand group-hover/item:text-white transition-colors shadow-sm flex-shrink-0">
                                                <Mail className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-medium text-text-main">{office.email}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="p-10 rounded-[2rem] bg-surface border border-border shadow-soft relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full group-hover:bg-secondary/10 transition-all duration-1000"></div>
                        <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-8">Intelligence Network</h4>
                        <div className="flex gap-4">
                            {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    className="h-12 w-12 rounded-xl bg-white border border-border flex items-center justify-center text-text-main hover:bg-brand hover:text-white hover:border-brand transition-all shadow-sm"
                                    href="#"
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
