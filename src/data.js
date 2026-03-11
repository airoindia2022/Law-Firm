export const MENU_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    {
        name: 'Practice Areas',
        path: '/practice-areas',
        submenu: [
            {
                name: 'Corporate & Commercial',
                path: '/practice-areas/corporate-commercial',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/corporate-and-commercial-1.jpg',
                description: 'Recognized among the best corporate law firms in India, LexCounsel houses some of the finest corporate lawyers advising a diverse client base from Fortune 500 companies to startups with precision and speed.',
                services: [
                    'Mergers, acquisitions, amalgamations, and buy-outs',
                    'Strategic alliances, joint ventures, and technical collaborations',
                    'India Entry strategies and business incorporation',
                    'Regulatory, investment, and licensing approvals (RBI, FIPB, MCA)',
                    'Exchange control regulations and foreign equity restrictions',
                    'Exit options, minority protection, and shareholders disputes',
                    'Corporate Governance and statutory secretarial compliances'
                ],
                notableRepresentations: [
                    'IVM Intersurer B.V. in its investment in Toffee Insurance group.',
                    'Healthians in raising USD 7.5 million in multiple rounds of funding.',
                    'G4S Securities on foreign exchange control and customs regulations.',
                    'Hindustan Coca-Cola Beverages on setting-up merchandise kiosks.',
                    'Invictus Fund Singapore in sale of equity shares to iTutor.com.'
                ]
            },
            {
                name: 'Education',
                path: '/practice-areas/education',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/education-1-1.jpg',
                description: 'Pioneering practice advising on schools, higher education, and vocational training, navigating the charitable/not-for-profit sector regulations.',
                services: [
                    'Structuring educational service models (AICTE & UGC compliance)',
                    'Drafting Trust Deeds, Society bye-laws and registrations',
                    'Tax issues for non-profit organizations and FCRA compliance',
                    'Due diligence of school operations and compulsory filings',
                    'Joint development of educational institutions in township projects',
                    'PE funding and acquisition structuring for educational land',
                    'Franchise, Collaboration and Operation & Management Agreements'
                ],
                notableRepresentations: [
                    'FICCI ARISE in drafting the Framework Document for management and governance.',
                    'Association of Unaided CBSE Schools against notifications restricting online classes.',
                    'Galgotias University on private university laws and YEIDA land allotment terms.',
                    'C2C Global Education Group (Japan) on viability of proposed structures in India.',
                    'The Sanskaar Valley School in conducting operational audits and license reviews.'
                ]
            },
            {
                name: 'Real Estate',
                path: '/practice-areas/real-estate',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/real-estate-2-2.jpg',
                description: 'Recognized among the finest real estate law firms, advising developers and financiers on all aspects of property transactions and RERA compliance.',
                services: [
                    'Compliances, registrations and reporting under RERA',
                    'Negotiation of acquisitions and sales across India',
                    'Drafting of conveyance, financing, and mortgage documentation',
                    'Lease and license arrangements for retail, office, and industrial space',
                    'Development and construction agreements for mixed-use complexes',
                    'Land acquisition process and comprehensive title searches',
                    'Representations before town planning and municipal bodies'
                ],
                notableRepresentations: [
                    'Edvance Pre-Schools in title verification for office premises in Gurugram.',
                    'Hill Top India Warehousing LLP in lease finalization with Amazon for a major warehouse.',
                    'Goldspace LLP in land acquisition for DHL warehouse setup.',
                    'Felix Plaza (BarMalt Group) in shopping mall construction and development contracts.',
                    'IMS Society in title verification for an IB school setup in Mumbai.'
                ]
            },
            {
                name: 'Intellectual Property',
                path: '/practice-areas/intellectual-property',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/intellectual-property-1.jpg',
                description: 'Protection and monetization of IP assets including trademarks, patents, and copyrights.'
            },
            {
                name: 'Insurance',
                path: '/practice-areas/insurance',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/insurance-1-1.jpg',
                description: 'Expertise in regulatory compliance, licensing, and insurance law products.'
            },
            {
                name: 'Telecommunications, Satellite and IT',
                path: '/practice-areas/telecommunications-satellite-and-it',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/Telecommunication-1.jpg',
                description: 'Cutting-edge legal advice for the tech, telecom, and satellite sectors.'
            },
            {
                name: 'Life Sciences & Healthcare',
                path: '/practice-areas/life-sciences-healthcare',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/life-sciences-1.jpg',
                description: 'Specialized support for healthcare providers and pharmaceutical companies.'
            },
            {
                name: 'Litigation & ADR',
                path: '/practice-areas/dispute-resolution',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/dispute-resolution-1-1.jpg',
                description: 'Strategic representation in litigation, arbitration, and alternative dispute resolution.'
            },
            {
                name: 'Labour and Employment',
                path: '/practice-areas/labour-and-employment',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/labour-1-1.jpg',
                description: 'Advisory on employment contracts, labor disputes, and workplace compliance.'
            },
            {
                name: 'Media & Entertainment',
                path: '/practice-areas/media-entertainment',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/media-1-1.jpg',
                description: 'Legal solutions for content producers, broadcasters, and artists.'
            },
            {
                name: 'Banking & Finance',
                path: '/practice-areas/banking-finance-and-capital-markets',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/banking-1-1.jpg',
                description: 'Expertise in banking regulations, capital markets, and debt financing.'
            },
            {
                name: 'Licensing & Franchising',
                path: '/practice-areas/licensing-franchising-and-trading',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/licensing-1-1.jpg',
                description: 'Strategic advice on licensing models and franchise expansion.'
            },
            {
                name: 'Outsourcing',
                path: '/practice-areas/outsourcing',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/outsourcing-1.jpg',
                description: 'Legal support for IT and BPO outsourcing contracts and models.'
            },
            {
                name: 'Infrastructure & Mining',
                path: '/practice-areas/infrastructure-projects-energy-mining-transportation-water',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/infra-2.jpg',
                description: 'Specialized advice on energy, mining, and large-scale infrastructure projects.'
            },
            {
                name: 'Taxation',
                path: '/practice-areas/taxation',
                image: 'https://lexcounsel.in/wp-content/uploads/2021/03/taxation-1-1.jpg',
                description: 'Expertise in direct and indirect taxation, offering tax efficient structures for investments and operations in India.',
                services: [
                    'Comparative analysis of tax efficient investment structures',
                    'Direct and Indirect taxation (Income Tax, GST, Customs)',
                    'Service Tax on cross-border transactions and outsourcing',
                    'Excise/Customs duties for SKD products and manufacturing',
                    'Withholding tax on equipment leases and capacities',
                    'Tax implications on ECB and restructuring agreements',
                    'Representation in assessments and tax department proceedings'
                ],
                notableRepresentations: [
                    'Four Tower, LLC (USA) on PE implications and OIDAR services.',
                    'Kamonohashi Project on direct/indirect taxes under Indo-Japan DTAA.',
                    'Freud Communications on tax implications for public relations in UK/India.',
                    'Autus Capital Mauritius on benefits of India-Mauritius Tax Treaty.',
                    'Usha Breco on customs duty and GST structuring for ropeway equipment.'
                ]
            },
        ]
    },
    { name: 'Newsletters', path: '/newsletters' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact Us', path: '/contact' },
]

export const TEAM_MEMBERS = [
    {
        slug: 'seema-jhingan',
        name: 'Seema Jhingan',
        role: 'Founding Partner',
        bio: 'Seema Jhingan is a Founding Partner at LexCounsel with over 25 years of experience. She is recognized for structuring innovative investment models and has considerable transactional experience in infrastructure, telecom, and education sectors.',
        fullBio: 'Seema Jhingan is a Founding Partner at LexCounsel with over 25 years of experience. She has substantial expertise in representing investors, developers, venture capital and private equity funds, international corporations, and strategic investors. She is recognized for structuring innovative investment models and has considerable transactional experience in infrastructure, telecom, and education sectors.\n\nSeema has been pivotal in advising some of the largest global corporations on their entry into the Indian market. Her practice is characterized by a deep understanding of regulatory landscapes and a pragmatic approach to complex legal hurdles. She is a frequent speaker at international legal summits and has published extensively on M&A and corporate governance.\n\nHer leadership extends beyond client work as she mentors the next generation of lawyers at LexCounsel, fostering a culture of excellence and integrity.',
        practiceFocus: 'Mergers & Acquisition, Infrastructure, Telecommunications, Venture Capital & Private Equity, Education, Media & Entertainment, Franchising, Software/IT, General Corporate and Commercial.',
        experience: [
            'Advised Fortune 500 companies on multi-billion dollar India-entry strategies.',
            'Structured a landmark 300MW renewable energy infrastructure project.',
            'Lead counsel for a major US-based venture capital fund’s expansion into India.',
            'Authored several influential papers on Education sector regulations in India.'
        ],
        education: [
            'LLB from University of Delhi (1994)',
            'B.A. Hons. (Political Science) from University of Delhi (1991)'
        ],
        memberships: [
            'Bar Council of Delhi',
            'International Bar Association',
            'American Bar Association (Associate Member)'
        ],
        languages: ['English', 'Hindi'],
        email: 'sjhingan@lexcounsel.in'
    },
    {
        slug: 'alishan-naqvee',
        name: 'Alishan Naqvee',
        role: 'Founding Partner',
        bio: 'Alishan Naqvee is a Founding Partner at LexCounsel with extensive experience in corporate and commercial laws, infrastructure projects, and dispute resolution.',
        fullBio: 'Alishan Naqvee is a Founding Partner at LexCounsel with extensive experience in corporate and commercial laws, infrastructure projects, and dispute resolution. He is recognized as a company law expert for his deep understanding of Indian company and regulatory frameworks.\n\nAlishan has successfully represented many multinational corporations, Indian corporates, venture capital funds and high net worth individuals in various sectors of economy and disputes resolution. His practice combines technical legal mastery with a sharp business acumen, ensuring that legal strategies align perfectly with commercial objectives.\n\nHe has been at the forefront of several landmark litigation cases in the pharmaceutical and healthcare sectors, representing some of the world\'s largest biotech firms.',
        practiceFocus: 'Corporate & Commercial, Infrastructure, Dispute Resolution, Energy & Mining, Pharma & Healthcare.',
        experience: [
            'Successfully defended a global pharmaceutical giant in a high-stakes patent dispute.',
            'Advised on the structured financing of a major Trans-India highway project.',
            'Regularly represents clients before the National Company Law Tribunal (NCLT).',
            'Expert advisor to the ICMR on Ethics Guidelines for Biomedical Research.'
        ],
        education: [
            'LL.B. from University of Delhi (1998)',
            'Post Graduate Diploma in Financial Laws'
        ],
        memberships: [
            'Bar Council of Delhi',
            'Supreme Court Bar Association',
            'Delhi High Court Bar Association'
        ],
        languages: ['English', 'Hindi', 'Urdu'],
        email: 'anaqvee@lexcounsel.in'
    },
    {
        slug: 'dimpy-mohanty',
        name: 'Dimpy Mohanty',
        role: 'Founding Partner',
        bio: 'Dimpy Mohanty leads the Labor and Employment practice. She specializes in corporate commercial, education, and real estate laws, advising on employment contracts, workplace audits, and regulatory compliance.',
        fullBio: 'Dimpy Mohanty leads the Labor and Employment practice at LexCounsel. She specializes in corporate commercial, education, and real estate laws, advising on employment contracts, workplace audits, and regulatory compliance. With nearly two decades of experience, she has become a trusted advisor for HR directors and legal counsels of multinational firms.\n\nHer practice focuses on the intersection of labor laws and corporate restructuring, ensuring seamless transitions during mergers and acquisitions. She is also an expert in the Prevention of Sexual Harassment (POSH) at the workplace and frequently conducts training for Internal Committees.',
        practiceFocus: 'Labor & Employment, Corporate Commercial, Education, Real Estate, Compliance.',
        experience: [
            'Conducted comprehensive labor law audits for over 50 multinational companies.',
            'Advised a leading tech firm on the largest workforce restructuring in its history.',
            'Key speaker on diversity and inclusion at national HR conferences.',
            'Expertise in drafting complex executive employment and severance agreements.'
        ],
        education: [
            'LL.B. from University of Delhi',
            'Diploma in Human Resource Management'
        ],
        memberships: [
            'Bar Council of Delhi',
            'National HRD Network'
        ],
        languages: ['English', 'Hindi'],
        email: 'dmohanty@lexcounsel.in'
    },
    {
        slug: 'rupal-bhatia',
        name: 'Rupal Bhatia',
        role: 'Partner',
        bio: 'Rupal Bhatia specializes in corporate and commercial laws, mergers and acquisitions, and regulatory compliance.',
        fullBio: 'Rupal Bhatia specializes in corporate and commercial laws, mergers and acquisitions, and regulatory compliance. She has a proven track record of managing complex multi-jurisdictional transactions and providing strategic advice on private equity and venture capital investments.\n\nHer approach is defined by meticulous attention to detail and a commitment to protecting client interests in volatile market environments. She has been instrumental in several successful exits for early-stage investors.',
        practiceFocus: 'Corporate & Commercial, M&A, Private Equity, Venture Capital.',
        experience: [
            'Managed a USD 500M acquisition of a domestic manufacturing firm by a European conglomerate.',
            'Structured series-A and series-B funding rounds for several high-growth startups.',
            'Advised on complex corporate governance issues for listed entities.',
            'Expert in cross-border trade regulations and FEMA compliance.'
        ],
        education: [
            'LL.B. from University of Pune',
            'Master of Laws (LLM) in Corporate Law'
        ],
        memberships: [
            'Bar Council of Delhi',
            'Institute of Company Secretaries of India (Fellow Member)'
        ],
        languages: ['English', 'Hindi', 'Punjabi'],
        email: 'rbhatia@lexcounsel.in'
    },
    {
        slug: 'abhijeet-das',
        name: 'Abhijeet Das',
        role: 'Partner',
        bio: 'Abhijeet Das is one of the leading litigation and arbitration experts in India, heading the Firm’s well-established disputes resolution practice across Indian courts and tribunals at all levels. Bringing extensive experience across diverse practice areas, he offers comprehensive, one-stop legal solutions tailored to the business needs of his clients. His strong foundation in commercial laws, transactions, and disputes enables him to deliver practical, result-oriented advice with a strategic vision.',
        fullBio: 'Abhijeet brings extensive experience across his diverse and well-established practice areas. He offers comprehensive, one-stop legal solutions tailored to their legal and business needs of the clients. His equally strong foundation in the areas of commercial laws, commercial transactions and disputes has shaped his strategic vision, enabling him to deliver practical and result-oriented advice across his practice areas.\n\nAbhijeet is recognized as a company law expert for his deep understanding of Indian company and regulatory frameworks. He has successfully represented many multinational corporations, Indian corporates, venture capital funds and high net worth individuals in various sectors of economy and disputes resolution. His experience includes transactions across all sectors of economy, acquisitions and mergers, cross-border investments, tax and policy benefits.\n\nHe is an expert in Pharma and Healthcare laws. He is considered an authority in India in the areas of biotechnology, MedTech and healthcare, having advised clients such as Pfizer, Takeda Pharmaceutical Company Limited, Boston Scientific, Biogen Idec, IQVIA, Medanta Duke Research Institute, and Apple Inc. on a wide range of matters including clinical research and trials, regulatory and ethical compliance, and data protection in health research.',
        practiceFocus: 'Dispute Resolution, Acquisitions and Investments, Pharma and Healthcare, AI, MedTech and Data Privacy.',
        experience: [
            'Headed dispute resolution practice across Indian courts and tribunals at all levels.',
            'Represented prominent clients such as Coca-Cola, Carlsberg India, and several others in complex commercial disputes.',
            'Extensive experience in both domestic and international arbitration (SKF India, Depa LLC).',
            'Authority in biotechnology, MedTech and healthcare regulatory compliance.',
            'Represented the Indian Society of Clinical Research before the Supreme Court of India.'
        ],
        education: [
            'LL.B. (1998)',
            'Post Graduate Diploma in Financial Laws (2011)',
            'Diploma in Cyber Laws (1999)',
            'Post Graduate Diploma in Industrial Relations and Personnel Management (1998)',
            'Graduation in Physics (1995)'
        ],
        memberships: [
            'Bar Council of Delhi',
            'Delhi High Court Bar Association',
            'International Bar Association'
        ],
        languages: ['English', 'Hindi', 'Urdu'],
        email: 'adas@lexcounsel.in'
    },
    {
        slug: 'dhruv-manchanda',
        name: 'Dhruv Manchanda',
        role: 'Counsel',
        bio: 'Dhruv specializes in intellectual property and commercial litigation.',
        fullBio: 'Dhruv specializes in intellectual property and commercial litigation. He has extensive experience in trademark prosecution, copyright law, and representing clients in patent infringement suits before the High Courts across India.\n\nHis practice also includes advising on the protection of trade secrets and data privacy in the digital age. Dhruv is known for his aggressive yet professional approach in the courtroom.',
        practiceFocus: 'IP, Commercial Litigation, Data Privacy, Copyright Law.',
        experience: [
            'Represented a leading media house in a landmark copyright infringement case.',
            'Successfully managed trademark portfolios for several international fasion brands in India.',
            'Argued several high-priority commercial disputes in the Delhi High Court.',
            'Expertise in domain name dispute resolution and cyber laws.'
        ],
        education: [
            'LL.B. from Amity Law School',
            'Post Graduate Diploma in IP Rights'
        ],
        memberships: [
            'Bar Council of Delhi',
            'IP Attorneys Association'
        ],
        languages: ['English', 'Hindi'],
        email: 'dmanchanda@lexcounsel.in'
    },
    {
        slug: 'sumer-singh-brar',
        name: 'Sumer Singh Brar',
        role: 'Counsel',
        bio: 'Sumer specializes in criminal defense and white-collar crime investigations.',
        fullBio: 'Sumer Singh Brar is a Counsel at LexCounsel specializing in criminal defense and white-collar crime investigations. He has represented high-profile individuals and corporate entities in investigations by the CBI and ED.\n\nHis practice involves navigating the complexities of the Prevention of Money Laundering Act (PMLA) and the Prevention of Corruption Act.',
        practiceFocus: 'White-Collar Crime, Criminal Defense, Investigations, Regulatory Compliance.',
        experience: [
            'Defended a major politician in a significant PMLA investigation.',
            'Conducted internal investigations for a multinational bank regarding fraud.',
            'Expert advisor on compliance with anti-corruption laws.',
            'Regularly appears before special courts for CBI and ED matters.'
        ],
        education: [
            'LL.B. from Panjab University',
            'Bachelor of Arts in Economics'
        ],
        memberships: [
            'Bar Council of Punjab & Haryana',
            'International Bar Association (Criminal Law Committee)'
        ],
        languages: ['English', 'Punjabi', 'Hindi'],
        email: 'sbrar@lexcounsel.in'
    },
    {
        slug: 'rajeev-trivedi',
        name: 'Rajeev Trivedi',
        role: 'Counsel',
        bio: 'Rajeev is an expert in tax planning and indirect taxation, including GST compliance.',
        fullBio: 'Rajeev Trivedi is a Counsel specializing in tax planning and indirect taxation. He provides strategic advice on GST implementation, tax-efficient supply chain management, and handles tax disputes at the appellate level.\n\nHis expertise helps clients navigate the evolving tax landscape in India effectively.',
        practiceFocus: 'Taxation, Indirect Tax, GST, Corporate Tax.',
        experience: [
            'Strategized a tax-efficient restructuring for a major e-commerce platform.',
            'Represented clients in major GST refund disputes before appellate authorities.',
            'Advised on the tax implications of cross-border technical services.',
            'Conducted tax-due diligence for several multi-million dollar M&A deals.'
        ],
        education: [
            'LL.B. from Mumbai University',
            'Chartered Accountant (ICAI)'
        ],
        memberships: [
            'Bar Council of Maharashtra & Goa',
            'The Institute of Chartered Accountants of India'
        ],
        languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
        email: 'rtrivedi@lexcounsel.in'
    },
    {
        slug: 'ankit-kanodia',
        name: 'Ankit Kanodia',
        role: 'Counsel',
        bio: 'Ankit focuses on technology, satellite laws, and telecommunications regulation.',
        fullBio: 'Ankit Kanodia is a Counsel with a niche practice in technology, satellite laws, and telecommunications. He advises global tech giants on licensing requirements, spectrum allocation, and space law regulations in India.\n\nHe is one of the few lawyers in India with a specialized understanding of the commercial satellite sector.',
        practiceFocus: 'TMT, Satellite Laws, Telecom Regulation, IT Law.',
        experience: [
            'Advised a global satellite operator on India entry and licensing.',
            'Assisted the Department of Telecom (DoT) on policy recommendations for 5G.',
            'Drafted complex software licensing and SLA agreements for tech firms.',
            'Represented a major ISP in a regulatory dispute before TDSAT.'
        ],
        education: [
            'LL.B. from NALSAR University of Law'
        ],
        memberships: [
            'Bar Council of Delhi',
            'International Institute of Space Law'
        ],
        languages: ['English', 'Hindi', 'Bengali'],
        email: 'akanodia@lexcounsel.in'
    },
    {
        slug: 'prithvirajsinhji-a-jadeja',
        name: 'Prithvirajsinhji A. Jadeja',
        role: 'Counsel',
        bio: 'Prithvirajsinhji specializes in real estate, land acquisition, and RERA compliance.',
        fullBio: 'Prithvirajsinhji A. Jadeja is a Counsel specializing in real estate and land acquisition. He has extensive experience in title search, drafting conveyance deeds, and ensuring RERA compliance for major township projects.\n\nHis practice covers rural and urban property disputes across multiple states.',
        practiceFocus: 'Real Estate, Land Laws, RERA, Construction Law.',
        experience: [
            'Managed land acquisition for a 1000-acre industrial park.',
            'Successfully resolved a long-standing title dispute for a heritage property.',
            'Advised several real estate developers on RERA registration and reporting.',
            'Expertise in local property laws of Gujarat and Rajasthan.'
        ],
        education: [
            'LL.B. from Gujarat University',
            'B.A. LL.B. (Hons.)'
        ],
        memberships: [
            'Bar Council of Gujarat',
            'Real Estate Bar Association'
        ],
        languages: ['English', 'Gujarati', 'Hindi'],
        email: 'pjadeja@lexcounsel.in'
    },
];

export const AWARDS = [
    {
        title: "Indian Law Firm Award - Education",
        description: "Recognized as a leading firm in the Education sector for 2021.",
        organization: "India Business Law Journal",
        year: "2021",
        icon: "BookOpen"
    },
    {
        title: "Distinguished Firm of the Year for IBC",
        description: "Awarded for exceptional performance in Insolvency and Bankruptcy Code (IBC) matters.",
        organization: "CCAI Legal Excellence Awards",
        year: "2021",
        icon: "Scale"
    },
    {
        title: "Legal Advisory Services Award",
        description: "Honored at the 7th Edition India Legal Awards for excellence in advisory services.",
        organization: "India Legal Awards by Biz Integration",
        year: "2021",
        icon: "Shield"
    },
    {
        title: "Indian Law Firm Award - Corporate & Commercial",
        description: "Awarded for outstanding work in Corporate and Commercial law practices.",
        organization: "India Business Law Journal",
        year: "2020",
        icon: "Building2"
    },
    {
        title: "TMT Law Firm of the Year",
        description: "Recognized as the top firm for Technology, Media, and Telecommunications.",
        organization: "BW Legal World - Global Legal Summit",
        year: "2020",
        icon: "Cpu"
    },
    {
        title: "Private Equity Law Firm of the Year",
        description: "Honored for excellence in Private Equity transactions and advisory.",
        organization: "BW Legal World - Global Legal Summit",
        year: "2020",
        icon: "TrendingUp"
    },
    {
        title: "Best Life Science & Healthcare Law Firm",
        description: "Recognized for specialized legal services in India for Life Sciences and Healthcare.",
        organization: "APAC Legal Awards",
        year: "2020",
        icon: "Stethoscope"
    },
    {
        title: "Indian Law Firm Award - Dispute Resolution",
        description: "Awarded for excellence in litigation and alternative dispute resolution practices.",
        organization: "India Business Law Journal",
        year: "2019",
        icon: "Gavel"
    }
];

export const NEWSLETTERS = [
    {
        title: "Missed MCA Filings?",
        month: "February",
        year: "2026",
        description: "This Scheme Could Save Your Company’s Significant Costs.",
        items: ["Significant cost savings for companies", "MCA filing amnesty scheme details", "Compliance requirements and deadlines"]
    },
    {
        title: "Drug Changes & Ethics Committees",
        month: "February",
        year: "2026",
        description: "India Proposes New Rules for Post-Approval Drug Changes.",
        items: ["Proposed amendments to drug rules", "Role of Ethics Committees in clinical trials", "Regulatory compliance for pharmaceutical companies"]
    },
    {
        title: "FDI from China",
        month: "February",
        year: "2026",
        description: "India set to welcome China for small investments.",
        items: ["Policy shift for Chinese investments", "Small investment window guidelines", "Security clearance and regulatory pathway"]
    },
    {
        title: "DEAL ANNOUNCEMENT",
        month: "February",
        year: "2026",
        description: "LexCounsel advises on a strategic acquisition.",
        items: ["Transaction structure and advisory", "Regulatory approvals and filings", "Legal due diligence and cross-border elements"]
    },
    {
        title: "IT Rules on Synthetic Media",
        month: "January",
        year: "2026",
        description: "A Structural Shift in Intermediary Liability.",
        items: ["Analysis of 2026 IT Rules", "Impact on Synthetic Media and Deepfakes", "Liability of Intermediaries and fact-checkers"]
    },
    {
        title: "AI Governance Guidelines",
        month: "January",
        year: "2026",
        description: "India’s framework for responsible Artificial Intelligence.",
        items: ["Ethical AI development standards", "Risk assessment for AI systems", "Government oversight and industry compliance"]
    }
];
