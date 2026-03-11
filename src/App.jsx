import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Search, ArrowRight } from 'lucide-react'
import { MENU_ITEMS } from './data'

import Home from './pages/Home'
import Team from './pages/Team'
import PracticeAreas from './pages/PracticeAreas'
import PracticeArea from './pages/PracticeArea'
import Newsletters from './pages/Newsletters'
import Awards from './pages/Awards'
import Contact from './pages/Contact'
import PartnerDetail from './pages/PartnerDetail'


import Navbar from './components/Navbar'
import Footer from './components/Footer'

const PageLayout = ({ children }) => (
    <div className="relative flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
    </div>
)

const ScrollToTop = () => {
    const { pathname } = useLocation()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

const App = () => {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <ScrollToTop />
            <PageLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/team/:slug" element={<PartnerDetail />} />
                    <Route path="/practice-areas" element={<PracticeAreas />} />
                    <Route path="/practice-areas/:slug" element={<PracticeArea />} />
                    <Route path="/newsletters" element={<Newsletters />} />
                    <Route path="/awards" element={<Awards />} />

                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </PageLayout>

        </Router>
    )
}

export default App
