export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News', to: '/news' },
  { label: 'Portal', to: '/portal' },
  { label: 'Contact', to: '/contact' },
];

export const PROGRAM_CATEGORIES = ['All', 'Undergraduate', 'Postgraduate', 'Diploma', 'Online Courses'];

export const PROGRAMS = [
  {
    icon: '💻',
    name: 'Computer Science',
    category: 'Undergraduate',
    description: 'AI, ML, Software Engineering, Cybersecurity & Data Science.',
    duration: '4 Years',
    credits: '120 credits',
    price: '$24,500/yr',
    lead: 'Prof. Alan Whitaker',
  },
  {
    icon: '📊',
    name: 'Business Administration',
    category: 'Undergraduate',
    description: 'Strategy, Finance, Marketing, Entrepreneurship & Leadership.',
    duration: '4 Years',
    credits: '120 credits',
    price: '$23,800/yr',
    lead: 'Dr. Marina Costa',
  },
  {
    icon: '⚙️',
    name: 'Engineering',
    category: 'Undergraduate',
    description: 'Mechanical, Electrical, Civil & Aerospace pathways.',
    duration: '4 Years',
    credits: '132 credits',
    price: '$26,100/yr',
    lead: 'Dr. Rajesh Iyer',
  },
  {
    icon: '🎨',
    name: 'Arts & Humanities',
    category: 'Undergraduate',
    description: 'Literature, Philosophy, Visual Arts & Cultural Studies.',
    duration: '3 Years',
    credits: '108 credits',
    price: '$19,400/yr',
    lead: 'Prof. Lina Okafor',
  },
  {
    icon: '🩺',
    name: 'Medical Sciences',
    category: 'Undergraduate',
    description: 'Pre-Med, Nursing, Public Health & Biomedical Research.',
    duration: '5 Years',
    credits: '160 credits',
    price: '$32,000/yr',
    lead: 'Dr. Hana Suzuki',
  },
  {
    icon: '⚖️',
    name: 'Law',
    category: 'Postgraduate',
    description: 'Constitutional, Corporate, International & Human Rights Law.',
    duration: '3 Years',
    credits: '96 credits',
    price: '$28,200/yr',
    lead: 'Prof. Daniel Hart',
  },
  {
    icon: '🏆',
    name: 'MBA – Executive',
    category: 'Postgraduate',
    description: 'Globally ranked 2-year MBA with Silicon Valley capstone.',
    duration: '2 Years',
    credits: '60 credits',
    price: '$48,000/yr',
    lead: 'Dr. Priya Anand',
  },
  {
    icon: '📈',
    name: 'MSc Data Science',
    category: 'Postgraduate',
    description: 'Statistics, ML, Big Data, Deep Learning & Analytics.',
    duration: '2 Years',
    credits: '48 credits',
    price: '$31,500/yr',
    lead: 'Prof. Kenji Tanaka',
  },
  {
    icon: '🖥️',
    name: 'Diploma in Digital Marketing',
    category: 'Diploma',
    description: 'SEO, Performance, Content & Analytics.',
    duration: '1 Year',
    credits: '30 credits',
    price: '$8,400',
    lead: 'Ms. Carla Mendes',
  },
  {
    icon: '🎨',
    name: 'Diploma in Graphic Design',
    category: 'Diploma',
    description: 'Branding, UX, Motion & Illustration.',
    duration: '1 Year',
    credits: '30 credits',
    price: '$9,200',
    lead: 'Mr. Theo Vance',
  },
  {
    icon: '🌐',
    name: 'Online: Full-Stack Web Dev',
    category: 'Online Courses',
    description: 'Live cohorts, projects, and career mentorship.',
    duration: '6 Months',
    credits: '18 credits',
    price: '$3,900',
    lead: 'Mr. Adrian Cole',
  },
  {
    icon: '📊',
    name: 'Online: Financial Analytics',
    category: 'Online Courses',
    description: 'Excel, SQL, Python, Power BI & forecasting.',
    duration: '4 Months',
    credits: '12 credits',
    price: '$2,400',
    lead: 'Ms. Yuki Watanabe',
  },
];

export const ADMISSIONS = [
  { step: '01', title: 'Submit online application', description: 'Complete our portal form with academic, personal, and recommender details.' },
  { step: '02', title: 'Share your documents', description: 'Upload transcripts, statement of purpose, ID, and test scores where required.' },
  { step: '03', title: 'Review & interview', description: 'Our admissions team reviews applications and invites qualifying candidates to interview.' },
  { step: '04', title: 'Receive your offer', description: 'Decisions are communicated via email with next-step guidance.' },
];

export const BENEFITS = [
  { icon: '🌍', title: 'Global Career Network', description: 'Immediate access to international employers, mentors, and alumni opportunities.' },
  { icon: '🔬', title: 'Research-Driven Curriculum', description: 'Programs shaped by real-world problem solving and faculty-led innovation.' },
  { icon: '🤝', title: 'Personalized Mentorship', description: 'Small cohorts supported by faculty mentors, advisors, and industry coaches.' },
  { icon: '🏫', title: 'Modern Campus Experience', description: 'Flexible learning spaces, labs, studios, and dedicated wellbeing support.' },
];

export const ADMISSION_REQUIREMENTS = [
  'Completed online application',
  'Official transcripts from previous institutions',
  'Two letters of recommendation',
  '500-word personal statement',
  'Standardized test scores (where applicable)',
  'English proficiency: TOEFL / IELTS (international)',
];

export const APPLICATION_PROCESS = [
  { step: '01', title: 'Create your account', description: 'Sign up on our applicant portal to get started.' },
  { step: '02', title: 'Complete the application', description: 'Provide academic history, essays, and recommenders.' },
  { step: '03', title: 'Upload documents', description: 'Transcripts, ID, test scores, statement, and portfolio (if needed).'},
  { step: '04', title: 'Pay $75 application fee', description: 'Fee waivers available for qualifying applicants.' },
  { step: '05', title: 'Interview & decision', description: 'Selected applicants invited for a virtual interview.' },
];

export const TUITION_FEES = [
  { type: 'Undergraduate', price: '$19,400–$32,000/yr' },
  { type: 'Postgraduate', price: '$24,000–$48,000/yr' },
  { type: 'Diploma', price: '$8,200–$8,400' },
  { type: 'Online', price: '$2,400–$3,900' },
];

export const SCHOLARSHIPS = [
  'Greenfield Merit Award',
  'International Excellence',
  'STEM Leaders Grant',
  'Arts & Humanities Fund',
];

export const IMPORTANT_DATES = [
  { label: 'Early Action Deadline', date: 'Nov 01, 2026' },
  { label: 'Regular Decision Deadline', date: 'Feb 15, 2027' },
  { label: 'Admission Results Released', date: 'Mar 30, 2027' },
  { label: 'Enrollment Confirmation', date: 'May 01, 2027' },
  { label: 'Orientation Week', date: 'Aug 25, 2027' },
];

export const FAQS = [
  { question: 'What are the admission requirements?', answer: 'Applicants must submit academic records, recommendations, a personal statement, and proof of English proficiency where required.' },
  { question: 'When are application deadlines?', answer: 'Early action closes on November 1 and regular decision closes on February 15 each year.' },
  { question: 'Is financial aid available?', answer: 'Yes. Merit awards, grants, and scholarships are available for eligible applicants.' },
  { question: 'Can international students apply?', answer: 'Absolutely. International students are welcome and supported through dedicated admissions counselors.' },
  { question: 'Do you offer campus tours?', answer: 'Yes, campus tours are available year-round by appointment for prospective students and families.' },
];

export const FACULTY_CATEGORIES = ['All', 'Computer Science', 'Business', 'Engineering', 'Arts & Humanities', 'Medical Sciences', 'Law'];

export const FACULTY_MEMBERS = [
  { name: 'Dr. Alan Whitaker', department: 'Computer Science', role: 'Dean, School of Computing', school: 'PhD, Stanford University', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80', socials: ['f', 't', 'in'] },
  { name: 'Prof. Marina Costa', department: 'Business', role: 'Chair, Strategy & Innovation', school: 'PhD, MIT Sloan', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80', socials: ['t', 'in'] },
  { name: 'Dr. Rajesh Iyer', department: 'Engineering', role: 'Professor of Mechanical Eng.', school: 'PhD, IIT Bombay', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', socials: ['f', 'in'] },
  { name: 'Prof. Lina Okafor', department: 'Arts & Humanities', role: 'Director, Cultural Studies', school: 'PhD, Oxford', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80', socials: ['i', 'in'] },
  { name: 'Dr. Hana Suzuki', department: 'Medical Sciences', role: 'Chair, Clinical Research', school: 'MD, Tokyo Medical', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80', socials: ['f', 't'] },
  { name: 'Prof. Daniel Hart', department: 'Law', role: 'Professor of Constitutional Law', school: 'LLB, Harvard Law', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', socials: ['t', 'in'] },
  { name: 'Dr. Priya Anand', department: 'Business', role: 'Director, MBA Program', school: 'PhD, Wharton', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80', socials: ['f', 'in'] },
  { name: 'Prof. Kenji Tanaka', department: 'Computer Science', role: 'Professor, AI & Data Science', school: 'PhD, ETH Zurich', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', socials: ['t', 'in'] },
];

export const NEWS_FEATURED = {
  title: 'Greenfield ranked #14 globally for Engineering Research',
  date: 'Feb 03, 2026',
  summary: 'Our engineering school climbs eight spots in the latest QS subject rankings.',
};

export const NEWS_CATEGORIES = ['Research', 'Events', 'Rankings', 'Partnership', 'Announcements', 'Arts'];

export const NEWS_POSTS = [
  { title: 'Greenfield ranked #14 globally for Engineering Research', date: 'Feb 03, 2026', category: 'Rankings', description: 'Our engineering school climbs eight spots in the latest QS subject rankings.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80' },
  { title: 'AI Lab unveils a new generative biology platform', date: 'Jan 22, 2026', category: 'Research', description: 'A breakthrough that could accelerate drug discovery and bioengineering.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Annual Greenfest 2026 opens registrations', date: 'Jan 18, 2026', category: 'Events', description: 'Three days of music, art, hackathons, and global speakers across campus.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Greenfield partners with NASA for space climate research', date: 'Jan 04, 2026', category: 'Partnership', description: 'Faculty and graduate students join a multi-institutional climate mission.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80' },
];

export const PORTAL_FEATURES = [
  { icon: '📚', title: 'Live course list', description: 'Access your current schedule, enrolled classes, and future modules.' },
  { icon: '🗓️', title: 'Smart calendar', description: 'Track assignments, exams, and campus events in one view.' },
  { icon: '📤', title: 'Assignment uploads', description: 'Submit coursework, feedback, and revisions directly through the portal.' },
  { icon: '🔔', title: 'Real-time alerts', description: 'Receive instant notifications for grades, deadlines, and announcements.' },
];

export const CONTACT_CARDS = [
  { title: 'Visit Campus', icon: '📍', details: '1247 University Ave\nGreenfield, CA 94025' },
  { title: 'Call Us', icon: '📞', details: '+1 (650) 555-0142\n+1 (650) 555-0166 (Admissions)' },
  { title: 'Email', icon: '✉️', details: 'admissions@greenfield.edu\nsupport@greenfield.edu' },
  { title: 'Office Hours', icon: '⏰', details: 'Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 2:00 PM' },
];

export const GALLERY_ITEMS = [
  { title: 'Campus Life', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Student Collaboration', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Innovation Labs', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Lecture Halls', image: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Student Events', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Study Spaces', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80' },
];

export const STATS = [
  { num: '25,000+', lbl: 'Students Enrolled' },
  { num: '120+', lbl: 'Programs Offered' },
  { num: '85+', lbl: 'Countries Represented' },
  { num: '98%', lbl: 'Graduate Employability' },
];

export const TESTIMONIALS = [
  { quote: 'Greenfield opened doors I never imagined possible. The faculty here aren’t just teachers — they’re mentors who invest in your success.', name: 'Priya Sharma', program: 'MSc Computer Science', avatar: 'P' },
  { quote: 'The global network and project-based learning gave me an edge in the job market before I even graduated.', name: 'James Okonkwo', program: 'MBA Business', avatar: 'J' },
  { quote: 'The campus community helped me discover my strengths and build a career in health sciences.', name: 'Sofia Mendes', program: 'MBBS Medicine', avatar: 'S' },
];

export const NEWS = [
  { date: 'May 2, 2025', title: 'Greenfield Ranked #12 Globally for Research Output', label: 'Achievement' },
  { date: 'Apr 18, 2025', title: 'New Engineering Innovation Lab Inaugurated with £5M Investment', label: 'Campus' },
  { date: 'Apr 5, 2025', title: 'Applications Open for 2025–26 International Scholarship Program', label: 'Admissions' },
];

export const ABOUT_INFO = {
  hero: {
    title: 'Four decades of academic excellence, research, and global impact.',
    description: 'Greenfield International College was founded in 1985 with a singular ambition — build a college where curiosity is currency and where every student is empowered to lead change in their field.',
  },
  highlights: [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To empower a diverse community of learners through rigorous academics, original research, and a culture of inclusion that turns ambition into measurable impact.',
    },
    {
      icon: '🔭',
      title: 'Our Vision',
      description: 'To be a globally relevant college recognized for educating curious minds, advancing science and art, and partnering with industry to solve real-world challenges.',
    },
  ],
  quote: {
    text: 'At Greenfield, we don’t just prepare students for jobs — we prepare them to define what’s next. Every classroom, lab, and studio is designed for the rigor and creativity tomorrow demands.',
    name: 'Dr. Helena Brooks',
    role: 'Chairperson & President',
  },
  stats: [
    { value: '0+', label: 'Students Enrolled' },
    { value: '0+', label: 'Faculty Members' },
    { value: '0+', label: 'Academic Programs' },
    { value: '0%', label: 'Placement Rate' },
  ],
  accreditations: ['AACSB Accredited', 'QS Top 50 Worldwide', 'ABET Engineering', 'Times Higher Education ★★★★★'],
  timeline: [
    {
      year: '1985',
      event: 'Foundation',
      description: 'Greenfield was established with a vision for global education.',
    },
    {
      year: '1995',
      event: 'First International Campus',
      description: 'Opened our first satellite campus in Singapore.',
    },
    {
      year: '2008',
      event: 'AACSB Accreditation',
      description: 'Business school joined elite global accreditation list.',
    },
    {
      year: '2016',
      event: 'AI Research Center',
      description: 'Launched a multidisciplinary AI & Robotics research center.',
    },
    {
      year: '2024',
      event: 'Top 50 Worldwide',
      description: 'Entered the QS World University Top 50 for the first time.',
    },
  ],
};
