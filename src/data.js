import corporate from './asserts/corporate-and-commercial.jpg'
import education from './asserts/education-1-1.jpg'
import realestate from './asserts/real-estate-2-2.jpg'
import intellectualproperty from './asserts/intellectual-property-1.jpg'
import insurance from './asserts/insurance-1-1.jpg'
import telecommunication from './asserts/telecommunication-1.jpg'
import lifesciences from './asserts/life-sciences-1.jpg'
import labour from './asserts/labour-1-1.jpg'
import media from './asserts/media-1-1.jpg'
import banking from './asserts/banking-1-1.jpg'
import licensing from './asserts/licensing-1-1.jpg'
import outsourcing from './asserts/outsourcing-1.jpg'
import infrastructure from './asserts/infra-2.jpg'
import taxation from './asserts/taxation-1-1.jpg'
import dispute from './asserts/dispute-resolution-1-1.jpg'


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
                image: { corporate },
                description: 'Recognized among the best corporate law firms in India, Integrity Legal Centre houses some of the finest corporate lawyers advising a diverse client base from Fortune 500 companies to startups with precision and speed.',
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
                image: { education },
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
                image: { realestate },
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
                image: { intellectualproperty },
                description: 'Protection and monetization of IP assets including trademarks, patents, and copyrights.'
            },
            {
                name: 'Insurance',
                path: '/practice-areas/insurance',
                image: { insurance },
                description: 'Expertise in regulatory compliance, licensing, and insurance law products.'
            },
            {
                name: 'Telecommunications, Satellite and IT',
                path: '/practice-areas/telecommunications-satellite-and-it',
                image: { telecommunication },
                description: 'Cutting-edge legal advice for the tech, telecom, and satellite sectors.'
            },
            {
                name: 'Life Sciences & Healthcare',
                path: '/practice-areas/life-sciences-healthcare',
                image: { lifesciences },
                description: 'Specialized support for healthcare providers and pharmaceutical companies.'
            },
            {
                name: 'Litigation & ADR',
                path: '/practice-areas/dispute-resolution',
                image: { dispute },
                description: 'Strategic representation in litigation, arbitration, and alternative dispute resolution.'
            },
            {
                name: 'Labour and Employment',
                path: '/practice-areas/labour-and-employment',
                image: { labour },
                description: 'Advisory on employment contracts, labor disputes, and workplace compliance.'
            },
            {
                name: 'Media & Entertainment',
                path: '/practice-areas/media-entertainment',
                image: { media },
                description: 'Legal solutions for content producers, broadcasters, and artists.'
            },
            {
                name: 'Banking & Finance',
                path: '/practice-areas/banking-finance-and-capital-markets',
                image: { banking },
                description: 'Expertise in banking regulations, capital markets, and debt financing.'
            },
            {
                name: 'Licensing & Franchising',
                path: '/practice-areas/licensing-franchising-and-trading',
                image: { licensing },
                description: 'Strategic advice on licensing models and franchise expansion.'
            },
            {
                name: 'Outsourcing',
                path: '/practice-areas/outsourcing',
                image: { outsourcing },
                description: 'Legal support for IT and BPO outsourcing contracts and models.'
            },
            {
                name: 'Infrastructure & Mining',
                path: '/practice-areas/infrastructure-projects-energy-mining-transportation-water',
                image: { infrastructure },
                description: 'Specialized advice on energy, mining, and large-scale infrastructure projects.'
            },
            {
                name: 'Taxation',
                path: '/practice-areas/taxation',
                image: { taxation },
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
        slug: 'muksheed',
        name: 'Adv Mukseed',
        role: 'Counsel',
        addres: 'Delhi'
    },
    {
        slug: 'Awadhesh',
        name: 'Adv Awadhesh Mishra',
        role: 'Counsel',
        addres: 'Delhi'
    },
    {
        slug: 'Syed',
        name: 'Adv Syed Rehan',
        role: 'Counsel',
        addres: 'Delhi'
    },
    {
        slug: 'sheebu',
        name: 'Adv Sheebu',
        role: 'Counsel',
        addres: 'Delhi'
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
        description: "Integrity Legal Center advises on a strategic acquisition.",
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
