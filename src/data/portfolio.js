import {
  FaAws,
  FaBrain,
  FaCertificate,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaPython,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { SiCplusplus, SiDocker, SiGithub, SiJavascript, SiTensorflow } from "react-icons/si";

const asset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const profile = {
  name: "Sanjana Medapati",
  headline: "AI/ML Engineer | Software Developer | Data Analyst",
  intro:
    "B.Tech Artificial Intelligence and Machine Learning student at Aditya University, focused on building practical ML systems, reliable web apps, and data products that turn messy information into clear decisions.",
  location: "Andhra Pradesh, India",
  email: "medapatisanjana0212@gmail.com",
  phone: "+91 9666336986",
  github: "https://github.com/Medapatisanjana12",
  githubUser: "Medapatisanjana12",
  linkedin: "https://www.linkedin.com/in/sanjana-medapati-65744b2b4/",
  resume: asset("SANJANA MEDAPATI(RESUME).pdf"),
  image: asset("sanjana_black.png"),
  aboutImage: asset("mine.png"),
};

export const quickFacts = [
  { label: "CGPA", value: "8.67", detail: "B.Tech AIML" },
  { label: "LeetCode", value: "600+", detail: "Problems solved" },
  { label: "CodeChef", value: "400+", detail: "Problems solved" },
  { label: "Certifications", value: "9+", detail: "Cloud, data, dev" },
];

export const resumeHighlights = [
  "Data Specialist Intern at Technical Hub with Power BI, Power Automate, and SharePoint delivery experience.",
  "Data Analyst Intern at Labmentix with Python EDA, visualization, and reusable analytics pipelines.",
  "Certified across AWS AI Practitioner, Snowflake SnowPro Core, Microsoft PL-400, and Microsoft PL-600.",
  "Strong DSA foundation with 1000+ combined coding problems across LeetCode, CodeChef, and GeeksforGeeks.",
];

export const skills = [
  {
    title: "Programming",
    icon: FaCode,
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    title: "AI/ML",
    icon: FaBrain,
    items: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "Deep Learning", icon: SiTensorflow },
      { name: "NLP", icon: FaBrain },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: FaChartLine },
    ],
  },
  {
    title: "Data",
    icon: FaDatabase,
    items: [
      { name: "SQL", icon: FaDatabase },
      { name: "Power BI", icon: FaChartLine },
      { name: "Data Analytics", icon: FaChartLine },
    ],
  },
  {
    title: "Development",
    icon: FaReact,
    items: [
      { name: "HTML", icon: FaCode },
      { name: "CSS", icon: FaCode },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "APIs", icon: FaServer },
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    items: [
      { name: "Git", icon: FaCode },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Cloud Platforms", icon: FaAws },
    ],
  },
];

export const experiences = [
  {
    role: "Data Specialist Intern",
    company: "Technical Hub Pvt. Ltd",
    duration: "Sept 2024 - Dec 2024",
    type: "Internship",
    highlights: [
      "Developed automated workflows using Microsoft Power Automate to reduce manual reporting effort.",
      "Managed and structured enterprise-level document libraries and datasets on SharePoint.",
      "Built interactive Power BI dashboards so leadership could track operational KPIs faster.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Labmentix Edtech Pvt. Ltd.",
    duration: "May 2024 - Aug 2024",
    type: "Internship",
    highlights: [
      "Performed exploratory data analysis on health and wellness datasets with 50,000+ records.",
      "Built clean, reusable data preparation scripts in Python using Pandas and NumPy.",
      "Created static and dynamic visualizations with Matplotlib and Seaborn for stakeholder insights.",
    ],
  },
];

export const projects = [
  {
    title: "Multi Assistant Router",
    category: "AI Multi-Agent System",
    image: asset("AiPract.png"),
    description:
      "Intent-aware assistant router that sends user queries to specialized agents for code, analytics, writing, and career support.",
    impact: "Improves answer quality by matching every query to the right expert workflow.",
    tech: ["FastAPI", "React", "Groq LLMs", "Multi-Agent AI"],
    github: "https://github.com/Medapatisanjana12",
    demo: "",
  },
  {
    title: "AI Resume ATS Score Checker",
    category: "NLP and Generative AI",
    image: asset("23A91A61G9.png"),
    description:
      "Resume analyzer that compares resumes with job descriptions, calculates ATS alignment, detects skill gaps, and gives improvement tips.",
    impact: "Helps job seekers improve role fit before applying.",
    tech: ["Python", "Streamlit", "Gemini API", "NLP"],
    github: "https://github.com/Medapatisanjana12",
    demo: "",
  },
  {
    title: "Movie Review Sentiment Analysis",
    category: "Machine Learning Web App",
    image: asset("mine.png"),
    description:
      "Flask app powered by a trained Naive Bayes classifier that predicts whether movie reviews are positive or negative.",
    impact: "Turns unstructured feedback into instant sentiment signals.",
    tech: ["Python", "Flask", "Naive Bayes", "NLTK"],
    github: "https://github.com/Medapatisanjana12",
    demo: "https://movie-reviews-0dtt.onrender.com/",
  },
  {
    title: "LogPing Attendance Automation",
    category: "Data Analytics and BI",
    image: asset("AiPract.png"),
    description:
      "Power BI automation system for daily lab attendance tracking, milestone analysis, and automated progress reporting.",
    impact: "Reduces manual faculty reporting and makes attendance progress visible.",
    tech: ["Power BI", "Power Automate", "SharePoint", "Data Modeling"],
    github: "",
    demo: "https://app.powerbi.com/reportEmbed?reportId=a5067cf2-fdf9-4362-afd7-97c4ea17143d&autoAuth=true&ctid=7359f896-71e2-4dae-b8a3-15cdf97f2f10",
  },
  {
    title: "Livetech AI Newsletter",
    category: "Full-Stack Automation",
    image: asset("mine.png"),
    description:
      "Automated news pipeline that aggregates AI and technology updates and sends a daily newsletter to subscribers.",
    impact: "Consolidates scattered tech news into a practical daily digest.",
    tech: ["React", "Node.js", "Express", "APIs", "Nodemailer"],
    github: "https://github.com/Medapatisanjana12",
    demo: "https://livetech-newsletter.onrender.com/",
  },
  {
    title: "Customer Feedback Analytics",
    category: "Business Intelligence",
    image: asset("AiPract.png"),
    description:
      "Interactive BI dashboard for order distribution, category trends, monthly sales cycles, and payment behavior.",
    impact: "Supports faster business decisions through visual analytics.",
    tech: ["Power BI", "Data Cleaning", "DAX", "Visualization"],
    github: "",
    demo: "https://app.powerbi.com/reportEmbed?reportId=aadabb92-d727-4c1c-a285-6071764aaf55&autoAuth=true&ctid=7359f896-71e2-4dae-b8a3-15cdf97f2f10",
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Power Platform Solution Architect Expert (PL-600)",
    provider: "Microsoft",
    tags: ["Architecture", "PL-600", "Enterprise"],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-solution-architect-expert/",
  },
  {
    title: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
    provider: "Microsoft",
    tags: ["Developer", "PL-400", "Automation"],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/",
  },
  {
    title: "AWS Certified AI Practitioner",
    provider: "Amazon Web Services",
    tags: ["AWS", "AI/ML", "Cloud"],
    link: "https://drive.google.com/file/d/1y_mmMDhnK6LhamrYIPd3scg8FTAW5tzf/view?usp=sharing",
  },
  {
    title: "Snowflake SnowPro Core Associate",
    provider: "Snowflake",
    tags: ["Data Cloud", "Warehouse", "Analytics"],
    link: "https://drive.google.com/file/d/16edMqT4eNGpjj9REfmNoIQS7L1jcAPR_/view?usp=drive_link",
  },
  {
    title: "Oracle Java Foundations Associate",
    provider: "Oracle",
    tags: ["Java", "OOP", "Foundations"],
    link: "https://drive.google.com/file/d/1--3FNpMiyO2GKm31xBZbrbCymjx9Qiri/view?usp=drive_link",
  },
  {
    title: "Oracle Database Foundations Associate",
    provider: "Oracle",
    tags: ["SQL", "DBMS", "Design"],
    link: "https://drive.google.com/file/d/1_7tYT6BYrYMJQC-S8DsC3QDgV-OOl84B/view?usp=drive_link",
  },
  {
    title: "IT Specialist: HTML and CSS",
    provider: "Certiport / Pearson",
    tags: ["HTML", "CSS", "Web"],
    link: "https://drive.google.com/file/d/1gunF7uifkMpXTtG_0vPQH2FydgDNyM_Q/view?usp=drive_link",
  },
  {
    title: "Python Essentials and C++ Essentials",
    provider: "Cisco Networking Academy",
    tags: ["Python", "C++", "Programming"],
    link: "https://drive.google.com/file/d/16dSv4a5ms-g0eTdSRkdrcFsIa3l7IzrQ/view?usp=drive_link",
  },
  {
    title: "Operating Systems Essentials",
    provider: "Cisco Networking Academy",
    tags: ["OS", "Linux", "Systems"],
    link: "https://drive.google.com/file/d/16dSv4a5ms-g0eTdSRkdrcFsIa3l7IzrQ/view?usp=drive_link",
  },
];

export const achievements = [
  "Solved 600+ LeetCode problems with a 1550+ rating.",
  "Solved 400+ CodeChef problems with a 1250+ rating.",
  "Solved 120+ GeeksforGeeks problems and continue strengthening DSA fundamentals.",
  "Built projects across AI assistants, NLP resume analysis, sentiment analysis, BI dashboards, and automation.",
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Medapatisanjana12",
    solved: "600+",
    rating: "1550+ Max Rating",
    link: "https://leetcode.com/u/Medapatisanjana12/",
    color: "from-amber-500/10 to-amber-500/5 text-amber-500 border-amber-500/20",
    hoverColor: "hover:border-amber-500/30",
  },
  {
    platform: "CodeChef",
    username: "medapatisanjan",
    solved: "400+",
    rating: "1250+ (2-Star)",
    link: "https://www.codechef.com/users/medapatisanjan",
    color: "from-amber-800/15 to-amber-700/5 text-amber-600 border-amber-800/20",
    hoverColor: "hover:border-amber-700/30",
  },
  {
    platform: "GeeksforGeeks",
    username: "medapatisanjana12",
    solved: "120+",
    rating: "DSA Specialist",
    link: "https://www.geeksforgeeks.org/user/medapatisanjana12/",
    color: "from-emerald-500/10 to-emerald-500/5 text-emerald-400 border-emerald-500/20",
    hoverColor: "hover:border-emerald-500/30",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Artificial Intelligence and Machine Learning",
  institute: "Aditya University",
  duration: "Sept 2023 - Present",
  grade: "8.67 CGPA",
  coursework: ["Data Structures and Algorithms", "Machine Learning", "Neural Networks", "Database Systems", "Web Architectures"],
};

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
];
