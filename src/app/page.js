"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Award,
  Briefcase,
  Code,
  Brain,
  GraduationCap,
  Phone,
  Sun,
  Moon,
} from "lucide-react";
import { motion } from "framer-motion";

// Define projects data
const projects = [
  {
    title: "🧠🛒 AI-Driven CRM + Marketplace for PPE & Eyewear Fitting (Milestone Project)",
    description:
      "A large-scale, AI-powered CRM integrated with a marketplace for PPE and eyewear, featuring an intelligent recommendation engine that uses facial scans to match employees with the perfect eyewear — by brand, size, and fit — with high precision.🧠 Uses Google’s Mesh 478-point model + OpenCV for facial landmark detection🛍️ Includes a complete marketplace module for PPE and eyewear products 🤖 AI engine recommends eyewear fit per user’s face geometry 🧩 Built for enterprises needing scalable employee onboarding + gear allocation. Other than that it's a full fledged large scale application that encompasses encompasses more than just storing customer data. It integrates all business processes, communication channels, and departments that interact with employes, primarily labours and service. It uses AI and advanced analytics to offer real-time reporting and got separate sections of employee | partner | admin | superadmin" ,
    tags: ["Python", "Redis", "Docker", "Django", "Django rest framework", "PostgresQL", "Artificial Intelligence", "scalable API architecture", "Facial data processing", "python-dotenv", "opencv", "stripe", "Git", "GitHub" ],
  },
  {
    title: "🏎️📲 – Social Commerce Platform for Car & Bike Enthusiasts",
    description:
      "🚘 Buy, Sell & List: Post listings for cars, bikes, and parts with images, specs, and pricing🧑‍🤝‍🧑 Auto Communities: Create & join interest-based groups (e.g. EV lovers, 4x4 fans, classic car collectors) 🎥 Live Broadcasting: Stream live from car meets or garages — just like Instagram Live💬 Real-Time Chat: 1-on-1 DMs, group chats, & threaded discussions 📣 Event Boards: Organize or RSVP to car shows, races, or meetups👤 Profile System: Follow users, view timelines, share builds, and update car collections 🔍 Search Boosting: Paid profile boosting and featured listings — rank higher in search🛡️ Role-Based Groups: Full role control (Owner, Admin, Member) in each community 📊 Dashboard Analytics: Track listing views, engagement, and reach🎯 Personalized Feed: Posts, stories, listings, and events based on your niche and interests" ,
    tags: ["Python", "Docker", "Django", "Django rest framework", "PostgresQL", "Artificial Intelligence", "scalable API architecture", "Facial data processing", "python-dotenv", "opencv", "stripe", "Git", "GitHub" ],
  },

  {
    title: "🛠️🛒 Smart Gear Management & E-commerce System",
    description:
      "A robust, scalable application that merges gear selling, real-time communication, stock control, and location-aware logistics — ideal for modern retailers and marketplaces. 💼 Features: Seamless gear buying/selling workflows Real-time chat between buyers & sellers Location tracking for order and seller coordination Booking & stock management with automated updates Integrated payment flows (Stripe-ready) Designed with enterprise scalability in mind" ,
    tags: ["Python", "Docker", "Django", "Django rest framework", "PostgresQL", "scalable API architecture", "python-dotenv", "opencv", "stripe", "Git", "GitHub", "#LocationTracking", "RealTimeChat" ],
  },
  {
    title: "🩺 AI-Powered Voice & Vision Medical Assistant ",
    description:
      "A smart prototype that combines voice and image input to deliver accurate, AI-driven medical feedback — built for accessibility and remote diagnostics.🧠 Understands symptoms from voice and images using LLaMA 4 Maverick 👁️ Analyzes medical visuals with Groq’s multimodal model 🎙️ Converts speech to text and speaks results back💡 Built for real-time, intuitive healthcare support",
    tags: ["Python", "Gradio", "Groq API", "meta-llama/llama-4-maverick", "python-dotenv"],
  },
  {
    title: "✨ RAG-Powered AI System (Real-Time Document Retrieval)",
    description:
      "A cutting-edge Retrieval-Augmented Generation (RAG) prototype that delivers real-time, context-aware, and factually accurate responses from stored documents — outperforming standard LLMs in precision.",
    tags: ["Mistral-7B-Instruct (Hugging Face)", "FAISS", "Sentence-Transformers (all-MiniLM-L6-v2)", "Custom prompt engineering", "PDF ingestion for real-time query resolution"],
  },
  {
    title: "🧾💬 CerebroZen – Talk to Your Docs for Free",
    description:
      "A powerful, real-time AI assistant that lets users chat with their PDF documents — no subscriptions, no limits. Just upload, ask, and get accurate answers instantly.💬 Ask unlimited questions about any uploaded PDF⚡ Fast, intelligent, and 100% free — no API/token restrictions 🌐 Built for everyone — accessible, open-source, and user-friendly",
    tags: ["Microservices", "SonarQube", "Grafana"],
  },
  {
    title: " 🤖 RAG-Based Smart Assistant (AI-Powered Document Retrieval)",
    description:
      "An advanced AI assistant that retrieves and understands real-time data from structured and unstructured sources using RAG (Retrieval-Augmented Generation) — delivering context-rich, accurate answers instantly.🔎 Retrieves & processes web/document data in real-time  💬 Powered by Google Gemini Pro for reliable, fact-based responses ⚡ Seamless UI with dark mode for instant user interaction 📚 Ideal for customer support, research, legal, and enterprise use",
    tags: ["Google Gemini Pro", "Hugging Face (all-MiniLM-L6-v2)", "UnstructuredURLLoader", "RecursiveCharacterTextSplitter", "Streamlit (Dark Mode)", "Python, LangChain"],
  },
  {
    title: "🛍️ AI-Powered Retail Inventory & Profit Forecasting Assistant",
    description:
      "A next-gen AI application that connects directly to retail databases and allows store owners to ask natural language questions about stock levels, pricing, profit forecasting, and discount impacts — all in real-time.   🧾 Understands complex queries like:“How many white Nike T-shirts in L size are in stock?”  “If I sell all Levi’s shirts tomorrow with a 10% discount, how much profit will I make?”  💡 Gives instant insights using SQL query generation powered by Google Gemini Pro + LangChain  📊 Built for retail chains to optimize inventory, plan discounts, and forecast revenue intelligently",
    tags: ["Google Gemini Pro", "FewShotPromptTemplate", "SemanticSimilarityExampleSelector", "SQLDatabase", "Streamlit (Dark Mode)", "Python, Hugging Face (all-MiniLM-L6-v2)", "MySQL", "ChromaDB", "Python, Fast SQL-based reasoning", "Streamlit"],
  },
];

const certifications = [
  {
    title: "Certified Django Developer",
    issuer: "Udemy",
    date: "February 2024",
    credentialId: "UC-5afe20bd-fd34-460b-9ab7-7d9159facfa0",
  },
  {
    title: "Aptech Certified Python Application Developer",
    issuer: "Aptech Pakistan",
    date: "December 2023",
  },
  {
    title: "Python Programmer",
    issuer: "DataCamp",
    date: "December 2022",
    credentialId: "0c0c27e0a18ab59bae8fa3b2b2cc3529f4588f0d",
  },
  {
    title: "Python - Object Oriented Programming",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-ebc587d8-57b8-4b5d-8bed-7d857e877eb3",
  },
  {
    title: "Python And Flask Framework Complete",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-55425efa-3688-4059-8e06-d34ef1bdc986",
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    date: "2024",
    credentialId: "RWBYFK9C3BKC",
  },
  {
    title: "Python For Everybody Capstone",
    issuer: "Coursera",
    date: "2024",
    credentialId: "GY3CM53PWYU5",
  },
  {
    title: "Python For Web Data",
    issuer: "Coursera",
    date: "2024",
    credentialId: "LXZ5MA3ZXPFQ",
  },
  {
    title: "Python Programming Basic To Advance",
    issuer: "Coursera",
    date: "2024",
    credentialId: "LC6X8TENNFUM",
  },
];


// Tag color configurations
const tagColors = [
  {
    bg: "bg-green-100",
    text: "text-green-800",
    darkBg: "dark:bg-green-900/50",
    darkText: "dark:text-green-400",
  },
];

// Function to get color based on tag name (consistent colors for same tags)
const getTagColor = (tag) => {
  // Create a simple hash from the tag name to get consistent colors
  const hash = Array.from(tag).reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );
  const index = hash % tagColors.length;
  return tagColors[index];
};

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Certifications",
    "Education",
    "Contact",
  ];

  // Check for user's preferred color scheme
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.getItem("darkMode") === "true" ||
        (!("darkMode" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      setDarkMode(isDark);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Abdul-Rafay-Atiq-2025.pdf";
    link.download = "Abdul-Rafay-Atiq.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='bg-gradient-to-b from-blue-50 via-indigo-50 to-white min-h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-md dark:bg-gray-900/90 dark:border-gray-700'
      >
        <div className='max-w-6xl mx-auto px-4 md:px-6'>
          <div className='flex items-center justify-between h-16'>
            <div className='font-bold text-lg text-blue-600 dark:text-blue-400'>
              AR
            </div>

            <div className='flex items-center space-x-6'>
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className='p-2 rounded-full focus:outline-none'
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun className='w-5 h-5 text-yellow-300' />
                ) : (
                  <Moon className='w-5 h-5 text-gray-700' />
                )}
              </button>

              {/* Desktop Navigation */}
              <div className='hidden md:flex space-x-6 text-sm font-medium'>
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className='text-gray-700 hover:text-blue-600 transition duration-200 px-2 py-1 rounded hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button
                className='text-gray-600 p-2 dark:text-gray-300'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className='md:hidden bg-white py-2 px-4 space-y-2 border-t dark:bg-gray-800 dark:border-gray-700'>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='block w-full text-left py-2 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400'
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className='relative pt-16 pb-28 overflow-hidden bg-gradient-to-b from-blue-900 to-black'>
        {/* Background Image with Overlay - with reduced height */}
        <div className='absolute inset-0'>
          {/* Using a public placeholder image with reduced height */}
          <div
            className="w-full h-full bg-[url('/api/placeholder/1920/800')] bg-cover bg-top opacity-60"
            style={{ maxHeight: "85vh" }}
          ></div>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70'></div>

          {/* Decorative Elements */}
          <div className='absolute top-0 right-0 w-full h-full overflow-hidden opacity-10'>
            <div className='absolute top-10 right-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl'></div>
            <div className='absolute bottom-20 left-10 w-80 h-80 rounded-full bg-indigo-500 blur-3xl'></div>
          </div>
        </div>

        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <motion.div
              initial='hidden'
              animate='show'
              variants={slideInFromLeft}
              className='text-center md:text-left text-white md:w-1/2 mb-10 md:mb-0 z-10'
            >
              <span className='inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-300 bg-blue-900/50 rounded-full border border-blue-400/30 backdrop-blur-sm'>
                AI & Backend Specialist
              </span>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200'>
                Abdul Rafay Atiq
              </h1>
              <p className='text-xl text-blue-100 mb-6 font-medium'>
                AI Software Engineer
              </p>
              <p className='text-blue-100 max-w-lg mb-8 leading-relaxed'>
              </p>
              <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                <button
                  className='px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition duration-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transform hover:-translate-y-1'
                  onClick={handleDownloadCV}
                >
                  <span className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                    Download CV
                  </span>
                </button>
                <button
                  className='px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-200 transform hover:-translate-y-1'
                  onClick={() => scrollToSection("contact")}
                >
                  <span className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                      />
                    </svg>
                    Hire Me
                  </span>
                </button>
              </div>

              {/* Merged Social Icons with Labels */}
              <div className='mt-8 flex justify-center md:justify-start space-x-6'>
                <a
                  href='https://github.com/itsmerafay'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href='https://www.linkedin.com/in/abdul-rafay-atiq-699008230/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href='mailto:abdulrafayatiq.03@gmail.com'
                  className='flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial='hidden'
              animate='show'
              variants={slideInFromRight}
              className='md:w-2/5 flex justify-center z-10'
            >
              <div className='relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition duration-300'>
                <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/20'></div>

                <Image
                  src="/images/profile.jpeg"
                  alt="Profile"
                  width={300}
                  height={300}
                />

                {/* Glowing effects */}
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse'></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated wave bottom */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            className='w-full h-24'
          >
            <path
              fill='#ffffff'
              fillOpacity='0.1'
              d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24'>
        {/* About Section */}
        <motion.section
          id='about'
          initial='hidden'
          whileInView='show'
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className='scroll-mt-20'
        >
          <motion.div variants={item}>
            <div className='flex items-center gap-4 mb-8'>
              <div className='bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50'>
                <Award className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                About Me
              </h2>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
              <div className='p-6 md:p-8'>
                <p className='text-gray-700 leading-relaxed dark:text-gray-300'>
                  I’m <strong>Abdul Rafay Atiq</strong>, an AI Software Engineer driven by a deep passion for solving real-world problems through intelligent, scalable, and user-focused technology.
                </p>
                <p className='text-gray-700 leading-relaxed mt-4 dark:text-gray-300'>
                  My journey merges the depth of <em>artificial intelligence</em> with the robustness of <em>backend engineering</em> — enabling me to build systems that not only perform but evolve.
                </p>
                <p className='text-gray-700 leading-relaxed mt-4 dark:text-gray-300'>
                  I’ve developed impactful applications like multimodal health assistants, RAG-based AI retrieval tools, community-driven automotive platforms, real-time ecommerce systems, and intelligent gear management tools — each engineered for performance, clarity, and scalability.
                </p>
                <p className='text-gray-700 leading-relaxed mt-4 dark:text-gray-300'>
                  I specialize in technologies such as <strong>LangChain, Gemini Pro, Mistral, OpenCV, Django REST, PostgreSQL, Docker</strong>, and more — combining deep-tech with clean design to create software that listens, learns, and adapts.
                </p>
                <p className='text-gray-700 leading-relaxed mt-4 dark:text-gray-300'>
                  &quot;I engineer software that doesn&#39;t just work — it engages, scales, and delivers lasting impact.&quot;
                </p>

              </div>
            </div>
          </motion.div>
        </motion.section>



        {/* Experience Section */}
        <motion.section
          id='experience'
          initial='hidden'
          whileInView='show'
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className='scroll-mt-20'
        >
          <motion.div variants={item}>
            <div className='flex items-center gap-4 mb-8'>
              <div className='bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50'>
                <Briefcase className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                Experience
              </h2>
            </div>
          </motion.div>

 

          <motion.div variants={item} className="mb-6">
          <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
              <div className='p-6 md:p-8'>
                <div className='border-l-4 border-blue-500 pl-4 py-1'>
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                    Software Engineer - Devroute (SMC-PVT) Ltd.
                  </h3>
                  <p className='text-gray-600 mt-1 dark:text-gray-400'>
                    Karachi Division, Sindh, Pakistan
                  </p>
                  <p className='text-gray-500 text-sm mt-1 dark:text-gray-500'>
                    July 2024 - Present
                  </p>
                </div>
                <div className='mt-6'>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Key Achievements & Responsibilities:
                  </p>
                  <ul className='mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside'>
                    <li>
                      Achieved 30% reduction in query execution time by implementing advanced query optimization techniques, including query refactoring, ensuring seamless database performance.
                    </li>
                    <li>
                      Automated repetitive tasks using custom Python scripts, resulting in 40% time savings across development and deployment pipelines.
                    </li>
                    <li>
                      Designed and developed robust RESTful APIs using Django REST Framework, ensuring high scalability and 99.9% uptime for data-intensive applications.
                    </li>
                    <li>
                      Implemented JWT-based authentication and token management systems, enhancing API security and performance.
                    </li>
                    <li>
                      Leveraged TensorFlow and YOLO models to implement real-time object detection and classification, improving system efficiency for AI-driven projects.
                    </li>
                    <li>
                      Developed scalable pipelines for computer vision applications using EfficientDet, enabling high accuracy and reduced inference time.
                    </li>
                    <li>
                      Built and managed high-performance PostgreSQL database systems, streamlining complex queries to handle large datasets efficiently.
                    </li>
                    <li>
                      Created automated data processing pipelines to clean and transform large datasets, reducing processing time by over 35%.
                    </li>
                    <li>
                      Improved system scalability by optimizing backend architectures, reducing API response times by up to 50% under high load conditions.
                    </li>
                    <li>
                      Successfully containerized applications using Docker, ensuring consistent environments across development and production.
                    </li>
                    <li>
                      Resolved critical bottlenecks in legacy systems, resulting in significant performance improvements and reduced downtime.
                    </li>
                  </ul>
                  <p className='mt-4 italic text-gray-600 dark:text-gray-400'>
                    Technologies used: Python, Django, Django REST Framework, TensorFlow, YOLO, PostgreSQL, OpenCV, Docker
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-6">
          <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
            <div className='p-6 md:p-8'>
              <div className='border-l-4 border-blue-500 pl-4 py-1'>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                  Associate Software Engineer - Tassaract
                </h3>
                <p className='text-gray-600 mt-1 dark:text-gray-400'>
                  Software Development || Python Development || Flask Framework || MySQL Database || RESTful APIs
                </p>
                <p className='text-gray-500 text-sm mt-1 dark:text-gray-500'>
                  November 2023 - July 2024
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-gray-700 dark:text-gray-300'>
                <li>Developed and maintained robust backend systems using Flask framework, ensuring seamless integration with MySQL databases for efficient data storage and retrieval. </li><br></br>  <li>Designed and implemented RESTful APIs that facilitated scalable and secure communication between frontend and backend components.</li>
                <li>Collaborated closely with cross-functional teams to analyze requirements and deliver optimized Python-based solutions, enhancing application performance and maintainability. </li><br></br> <li>Contributed to code reviews and automated testing to improve code quality and deployment reliability.</li>
                  </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="mb-6">
        <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
            <div className='p-6 md:p-8'>
              <div className='border-l-4 border-blue-500 pl-4 py-1'>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                  Python Developer - The Disrupt Labs
                </h3>
                <p className='text-gray-600 mt-1 dark:text-gray-400'>
                  Python Programming || Object Oriented Programming || Problem Solving || Flask | OpenCV
                </p>
                <p className='text-gray-500 text-sm mt-1 dark:text-gray-500'>
                  June 2023 - July 2023
                </p>
              </div>
              <div className='mt-6'>
              <p className='text-gray-700 dark:text-gray-300'>
              <ul className='list-disc list-inside space-y-2'>
                <li>Contributed to Python development projects focusing on modular and object-oriented design principles to build maintainable and reusable codebases.</li>
                <li>Developed web applications using Flask, integrating OpenCV for advanced computer vision features such as image processing and object detection.</li>
                <li>Engaged in problem-solving activities to debug and optimize code performance. Collaborated in an agile environment to deliver timely software releases and improve application functionalities based on user feedback.</li>
              </ul>
              </p>

              </div>
            </div>
          </div>
        </motion.div>




        </motion.section>

        {/* Projects Section */}
        <motion.section
          id='projects'
          initial='hidden'
          whileInView='show'
          variants={container}
          viewport={{ once: true }}
          className='scroll-mt-20'
        >
          <motion.div variants={item}>
            <div className='flex items-center gap-4 mb-8'>
              <div className='bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50'>
                <Code className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                Projects
              </h2>
            </div>
          </motion.div>
          <motion.div
            variants={container}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:hover:shadow-gray-700/50'
              >
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-3 dark:text-white'>
                    {project.title}
                  </h3>
                  <p className='text-gray-700 mb-4 dark:text-gray-300'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag, tagIndex) => {
                      const color = getTagColor(tag);
                      return (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200 dark:bg-gray-700 dark:hover:bg-gray-600'
                    >
                      <Github className='w-5 h-5 mr-2' />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>





{/* Skills Section */}
<motion.section
  id='skills'
  initial='hidden'
  whileInView='show'
  variants={container}
  viewport={{ once: true }}
  className='scroll-mt-20'
>
  <motion.div variants={item}>
    <div className='flex items-center gap-4 mb-8'>
      <div className='bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50'>
        <Brain className='w-6 h-6 text-blue-600 dark:text-blue-400' />
      </div>
      <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
        Skills
      </h2>
    </div>
  </motion.div>

  <motion.div
    variants={container}
    className='grid grid-cols-1 md:grid-cols-3 gap-6'
  >
    {/* Backend & APIs */}
    <motion.div
      variants={item}
      className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
    >
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white'>
          Backend & APIs
        </h3>
        <div className='flex flex-wrap gap-2 justify-center'>
          {["Django", "Django REST Framework", "Flask", "FastAPI", "Python"].map((skill, index) => {
            const color = getTagColor(skill);
            return (
              <span
                key={index}
                className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>

    {/* AI & Automation */}
    <motion.div
      variants={item}
      className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
    >
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white'>
          AI, ML & Automation
        </h3>
        <div className='flex flex-wrap gap-2 justify-center'>
          {["OpenCV", "YOLOv5", "Transformers", "Pandas", "NumPy", "Matplotlib"].map((skill, index) => {
            const color = getTagColor(skill);
            return (
              <span
                key={index}
                className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>

    {/* DevOps & Tools */}
    <motion.div
      variants={item}
      className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
    >
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white'>
          DevOps & Tools
        </h3>
        <div className='flex flex-wrap gap-2 justify-center'>
          {["Git", "GitHub Actions", "Docker", "Postman", "Linux", "VSCode"].map((skill, index) => {
            const color = getTagColor(skill);
            return (
              <span
                key={index}
                className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>

    {/* Database & Caching */}
    <motion.div
      variants={item}
      className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
    >
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white'>
          Database & Caching
        </h3>
        <div className='flex flex-wrap gap-2 justify-center'>
          {["PostgreSQL", "Redis", "SQLite", "MySQL"].map((skill, index) => {
            const color = getTagColor(skill);
            return (
              <span
                key={index}
                className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  </motion.div>
</motion.section>











        {/* Certifications Section */}
        <motion.section
          id='certifications'
          initial='hidden'
          whileInView='show'
          variants={container}
          viewport={{ once: true }}
          className='scroll-mt-20'
        >
          <motion.div variants={item}>
            <div className='flex items-center gap-4 mb-8'>
              <div className='bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50'>
                <Award className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                Certifications
              </h2>
            </div>
          </motion.div>
          <motion.div variants={container} className='grid grid-cols-1 gap-6'>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={item}
                className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
              >
                <div className='p-6'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <div>
                      <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                        {cert.title}
                      </h3>
                      <p className='text-gray-600 mt-1 dark:text-gray-400'>
                        {cert.issuer}
                      </p>
                    </div>
                    <div className='mt-2 md:mt-0'>
                      <div className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/50 dark:text-blue-400'>
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>





{/* Education Section */}
<motion.section
  id='education'
  initial='hidden'
  whileInView='show'
  variants={container}
  viewport={{ once: true }}
  className='scroll-mt-20'
>
  <motion.div variants={item}>
    <div className='flex items-center gap-4 mb-8'>
      <div className='bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50'>
        <GraduationCap className='w-6 h-6 text-blue-600 dark:text-blue-400' />
      </div>
      <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
        Education
      </h2>
    </div>
  </motion.div>

  {/* UBIT */}
  <motion.div variants={item}>
    <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
      <div className='p-6 md:p-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
              BS in Computer Software Engineering
            </h3>
            <p className='text-gray-600 mt-1 dark:text-gray-400'>
              University of Karachi – UBIT (Department of Computer Science)
            </p>
          </div>
          <div className='mt-2 md:mt-0'>
            <div className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/50 dark:text-blue-400'>
              Jan 2022 – Jan 2025
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <p className='text-gray-700 dark:text-gray-300'>
          Engineering robust digital ecosystems with a battle-hardened grip on backend systems, scalable architectures, and future-ready systems + AI practices.</p>
          <p className='text-gray-700 mt-2 dark:text-gray-300'>
            <strong>Skills:</strong> Problem Solving · Presentations · Software Development
          </p>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Adamjee College */}
  <motion.div variants={item} className='mt-6'>
    <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
      <div className='p-6 md:p-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
              Intermediate in Pre-Engineering
            </h3>
            <p className='text-gray-600 mt-1 dark:text-gray-400'>
              Adamjee Govt. Science College
            </p>
          </div>
          <div className='mt-2 md:mt-0'>
            <div className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/50 dark:text-blue-400'>
              Grade: 91%
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <p className='text-gray-700 dark:text-gray-300'>
            Focused on Mathematics, Physics, and Chemistry with a strong academic foundation for engineering disciplines.
          </p>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Matriculation */}
  <motion.div variants={item} className='mt-6'>
    <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
      <div className='p-6 md:p-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
              Matriculation (Science)
            </h3>
            <p className='text-gray-600 mt-1 dark:text-gray-400'>
              S.M. Public Academy C-5
            </p>
          </div>
          <div className='mt-2 md:mt-0'>
            <div className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/50 dark:text-blue-400'>
              Grade: 90%
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <p className='text-gray-700 dark:text-gray-300'>
            Strong academic base developed in Mathematics, Computer, and Science at the secondary level.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</motion.section>



        {/* Contact Section */}
        <motion.section
          id='contact'
          initial='hidden'
          whileInView='show'
          variants={container}
          viewport={{ once: true }}
          className='scroll-mt-20'
        >
          <motion.div variants={item}>
            <div className='flex items-center gap-4 mb-8'>
              <div className='bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50'>
                <Phone className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                Contact
              </h2>
            </div>
          </motion.div>
          <motion.div
            variants={container}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div
              variants={item}
              className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 dark:text-white'>
                  Get In Touch
                </h3>
                <ul className='space-y-4'>
                  <li className='flex items-start'>
                    <Mail className='w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400' />
                    <div>
                      <p className='text-gray-600 text-sm dark:text-gray-400'>
                        Email
                      </p>
                      <p className='text-gray-800 dark:text-gray-200'>
                        abdulrafayatiq.03@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <Phone className='w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400' />
                    <div>
                      <p className='text-gray-600 text-sm dark:text-gray-400'>
                        Phone
                      </p>
                      <p className='text-gray-800 dark:text-gray-200'>
                        +92 320 8331445
                      </p>
                      <p className='text-gray-800 dark:text-gray-200'>
                        +92 334 0725087
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    <div>
                      <p className='text-gray-600 text-sm dark:text-gray-400'>
                        Location
                      </p>
                      <p className='text-gray-800 dark:text-gray-200'>
                        Karachi, Pakistan
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
                      />
                    </svg>
                    <div>
                      <p className='text-gray-600 text-sm dark:text-gray-400'>
                        Languages
                      </p>
                      <p className='text-gray-800 dark:text-gray-200'>
                        Urdu, English
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 dark:text-white'>
                  Send Message
                </h3>
                <form>
                  <div className='mb-4'>
                    <input
                      type='text'
                      placeholder='Your Name'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
                    />
                  </div>
                  <div className='mb-4'>
                    <input
                      type='email'
                      placeholder='Your Email'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
                    />
                  </div>
                  <div className='mb-4'>
                    <textarea
                      placeholder='Your Message'
                      rows='4'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
                    ></textarea>
                  </div>
                  <button className='w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition duration-200 dark:bg-blue-700 dark:hover:bg-blue-600'>
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer
        initial='hidden'
        whileInView='show'
        variants={fadeIn}
        viewport={{ once: true }}
        className='bg-gray-900 text-white'
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>Abdul Rafay Atiq</h3>
              <p className='text-gray-400'>
              Architecting intelligent backend ecosystems with Python Frameworks And Eco System, and AI blending automation, performance, and cloud-native design to shape the future of scalable tech.

              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className='text-gray-400 hover:text-white transition duration-200'
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Get Connected</h3>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/itsmerafay'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition duration-200'
                >
                  <Github className='w-6 h-6' />
                </a>
                <a
                  href='https://www.linkedin.com/in/abdul-rafay-atiq-699008230/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition duration-200'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href='mailto:abdulrafayatiq.03@gmail.com'
                  className='text-gray-400 hover:text-white transition duration-200'
                >
                  <Mail className='w-6 h-6' />
                </a>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>
              © {new Date().getFullYear()} Abdul Rafay Atiq. All rights
              reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}