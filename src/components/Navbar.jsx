import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Shield } from 'lucide-react'
import { MENU_ITEMS } from '../data'
import logo from '../asserts/logo.jpg'
import lady from '../asserts/lady.avif'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const [activeCategory, setActiveCategory] = useState('All')
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
        setActiveSubmenu(null)
    }, [location.pathname])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const navClass = isHome && !scrolled
        ? "fixed top-0 left-0 right-0 z-[100] bg-transparent transition-all duration-700 pt-4 px-4"
        : "fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-2xl border-b border-black/5 shadow-premium transition-all duration-500 py-2 px-4"

    const linkClass = isHome && !scrolled
        ? "text-white/90 hover:text-white"
        : "text-slate-600 hover:text-brand"

    const renderMegaMenu = (item) => {
        if (!item.submenu) return null;

        const practiceCategories = {
            'All': item.submenu,
            'Corporate': item.submenu.filter(s => ['Corporate & Commercial', 'Licensing & Franchising', 'Outsourcing'].includes(s.name)),
            'Finance & Tax': item.submenu.filter(s => ['Banking & Finance', 'Insurance', 'Taxation'].includes(s.name)),
            'Tech & IP': item.submenu.filter(s => ['Telecommunications, Satellite and IT', 'Intellectual Property', 'Media & Entertainment'].includes(s.name)),
            'Property & Infra': item.submenu.filter(s => ['Real Estate', 'Infrastructure & Mining'].includes(s.name)),
            'Social & Regulatory': item.submenu.filter(s => ['Education', 'Life Sciences & Healthcare', 'Labour and Employment', 'Litigation & ADR'].includes(s.name))
        }

        const filteredItems = practiceCategories[activeCategory] || item.submenu

        return (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50 border border-black/5 flex h-[480px]">
                {/* Left Side: Specializations */}
                <div className="w-1/4 bg-slate-50 p-6 border-r border-black/5">
                    <h3 className="text-[12px] font-bold text-brand uppercase tracking-[0.3em] mb-6">Specializations</h3>
                    <div className="space-y-1">
                        {Object.keys(practiceCategories).map((cat) => (
                            <button
                                key={cat}
                                onMouseEnter={() => setActiveCategory(cat)}
                                className={`w-full group/cat flex items-center justify-between p-2.5 rounded-xl transition-all ${activeCategory === cat ? 'bg-white shadow-sm text-brand' : 'text-slate-600 hover:bg-white/50'}`}
                            >
                                <span className="text-[14px] font-bold">{cat}</span>
                                <ArrowRight className={`w-3.5 h-3.5 transition-all ${activeCategory === cat ? 'text-brand translate-x-1' : 'text-slate-300 opacity-0 group-hover/cat:opacity-100'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Middle: Grid of Filtered Practice Areas */}
                <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-white">
                    <div className="mb-5">
                        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                            {activeCategory === 'All' ? 'All Practice Areas' : `Practice Areas in ${activeCategory}`}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="col-span-full grid grid-cols-2 gap-x-6 gap-y-5"
                            >
                                {filteredItems.map((sub) => (
                                    <Link
                                        key={sub.name}
                                        to={sub.path}
                                        className="group/sub flex flex-col gap-1 p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-black/5"
                                    >
                                        <span className="text-[15px] font-bold text-slate-800 group-hover/sub:text-brand transition-colors">
                                            {sub.name}
                                        </span>
                                        {sub.description && (
                                            <p className="text-[13px] text-slate-500 line-clamp-2 leading-relaxed">
                                                {sub.description}
                                            </p>
                                        )}
                                    </Link>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Side: Featured Content/CTA */}
                <div className="w-1/5 relative overflow-hidden group/cta">
                    <img
                        src={lady}
                        alt="Legal Expertise"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/cta:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/90 to-transparent"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <Shield className="w-7 h-7 text-white mb-3" />
                        <h4 className="text-lg font-serif font-bold text-white mb-2 leading-tight">Elite Legal Representation</h4>
                        <p className="text-white/80 text-[12px] mb-4 font-medium">Trusted by Fortune 500 companies.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 text-white text-[12px] font-bold uppercase tracking-widest hover:gap-4 transition-all">
                            Consult <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <nav className={navClass}>
                <div className={`max-w-7xl mx-auto transition-all duration-500 ${isHome && !scrolled ? 'bg-white/10 backdrop-blur-md rounded-2xl border border-white/20' : ''}`}>
                    <div className="flex justify-between items-center h-16 lg:h-20 px-4 lg:px-6">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="group flex items-center gap-3">
                                <div className="relative overflow-hidden bg-white rounded-lg p-1.5 lg:p-2 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-0.5">
                                    <img
                                        className="h-10 lg:h-14 w-auto"
                                        src={logo}
                                        alt="Integrity Legal Center"
                                    />
                                    <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Links — visible at lg+ */}
                        <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
                            {MENU_ITEMS.map((item) => (
                                <div key={item.name} className="relative group px-3 xl:px-4 py-2">
                                    <Link
                                        to={item.path}
                                        className={`relative py-2 text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.12em] xl:tracking-[0.15em] transition-all duration-300 ${linkClass} group-hover:text-brand`}
                                    >
                                        {item.name}
                                        {item.submenu && <ChevronDown className="inline-block ml-1 h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform" />}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    {renderMegaMenu(item)}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Actions — visible at lg+ */}
                        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <Link
                                to="/contact"
                                className={`px-5 xl:px-8 py-3 xl:py-3.5 rounded-full text-[12px] font-bold uppercase tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-500 shadow-lg hover:shadow-brand/20 active:scale-95 whitespace-nowrap ${isHome && !scrolled
                                    ? 'bg-white text-slate-900 hover:bg-slate-50'
                                    : 'bg-brand text-white hover:bg-[#8B6508]'
                                    }`}
                            >
                                Consultation
                            </Link>
                        </div>

                        {/* Mobile / Tablet Toggle — visible below lg */}
                        <div className="lg:hidden flex items-center gap-3">

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                                className={`p-2 rounded-xl transition-all duration-300 ${isHome && !scrolled
                                    ? 'bg-white/15 text-white hover:bg-white/25'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90] lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-in Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-white z-[100] lg:hidden shadow-2xl flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="p-5 border-b border-slate-100 flex justify-between items-center flex-shrink-0">
                                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand p-1.5 flex-shrink-0">
                                        <img
                                            src={logo}
                                            alt="Integrity Legal Center"
                                            className="w-full h-full object-contain brightness-0 invert"
                                        />
                                    </div>
                                    <span className="font-bold text-slate-900 tracking-widest text-base">Integrity Legal Center</span>
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close menu"
                                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Drawer Body */}
                            <div className="flex-1 overflow-y-auto overscroll-contain">
                                <div className="p-4 space-y-1">
                                    {MENU_ITEMS.map((item, idx) => (
                                        <div key={item.name} className="border-b border-slate-100 last:border-0">
                                            <div
                                                className="flex items-center justify-between py-3.5 cursor-pointer group"
                                                onClick={() => item.submenu
                                                    ? setActiveSubmenu(activeSubmenu === idx ? null : idx)
                                                    : null
                                                }
                                            >
                                                <Link
                                                    to={item.path}
                                                    className="text-base font-serif font-bold text-slate-800 group-hover:text-brand transition-colors flex-1"
                                                    onClick={(e) => {
                                                        if (item.submenu) {
                                                            e.preventDefault();
                                                        } else {
                                                            setIsOpen(false);
                                                        }
                                                    }}
                                                >
                                                    {item.name}
                                                </Link>
                                                {item.submenu && (
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-2 ${activeSubmenu === idx ? 'rotate-180 text-brand' : ''}`}
                                                    />
                                                )}
                                            </div>

                                            <AnimatePresence>
                                                {item.submenu && activeSubmenu === idx && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-4 pl-3 grid gap-2">
                                                            {item.submenu.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    to={sub.path}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="flex items-center gap-3 py-2 px-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 transition-all"
                                                                >
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand/40 flex-shrink-0"></div>
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Drawer Footer CTA */}
                            <div className="p-5 bg-slate-50 border-t border-slate-100 flex-shrink-0">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-white rounded-2xl text-base font-bold uppercase tracking-widest shadow-lg shadow-brand/20 active:scale-[0.98] transition-all hover:bg-[#8B6508]"
                                >
                                    Consult Our Experts <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
