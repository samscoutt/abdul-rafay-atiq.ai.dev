"use client";

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
    title: "Automated Backup System",
    description:
      "Jenkins + rclone to AWS S3/Google Drive for automated and scheduled backup operations.",
    tags: ["Jenkins", "AWS S3", "rclone"],
  },
  {
    title: "AI/ML Deployment Pipeline",
    description:
      "CI/CD with Jenkins, Kubernetes, Docker, and Terraform for machine learning model deployment.",
    tags: ["Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Microservices CI/CD",
    description:
      "Docker, Kubernetes, Nexus, SonarQube, Grafana implementation for microservices architecture.",
    tags: ["Microservices", "SonarQube", "Grafana"],
  },
  {
    title: "AWS Serverless App",
    description:
      "API Gateway, Terraform, GitHub Actions for serverless application deployment.",
    tags: ["Serverless", "API Gateway", "GitHub Actions"],
  },
  {
    title: "Automated Cloud Infrastructure with Terraform & Ansible",
    description:
      "Automated deployment of AWS EC2 instances, security groups, and networking using Terraform, and seamless server configuration with Ansible.",
    tags: [
      "Terraform",
      "Ansible",
      "AWS EC2",
      "VPC",
      "Security Groups",
      "Jenkins (CI/CD)",
    ],
  },
  {
    title: "Resource Manager - Real-time CPU Monitoring and Analysis",
    description:
      "A real-time CPU monitoring and analysis tool offering live visualizations, critical alerts, historical trends, and process tracking, all containerized with Docker.",
    tags: ["Python", "Docker", "Grafana"],
  },
  {
    title: "Todo App Deployment on Kubernetes",
    description:
      "A Todo App built with React and Firebase for real-time storage, containerized using Docker, and deployed on Docker Hub.",
    tags: ["Docker", "Kubernetes", "Docker Hub"],
  },
];

// Define certifications data
const certifications = [
  {
    title: "DevOps Master Class (Linux, Python, GitHub)",
    issuer: "TrainWithShubham",
    date: "2024",
  },
  {
    title: "Linux: The Complete Guide",
    issuer: "Udemy",
    date: "2024",
  },
  {
    title: "AWS Essentials: A Complete Beginner's Guide",
    issuer: "Udemy",
    date: "2025",
  },
  {
    title: "Mastering AWS Serverless: Hands-On with Core AWS Services",
    issuer: "Udemy",
    date: "2025",
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
    link.href = "/Muhammad_Anas_Naeem_CV.pdf";
    link.download = "Muhammad_Anas_Naeem_CV.pdf";
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
              AN
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
                DevOps Specialist
              </span>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200'>
                Muhammad Anas Naeem
              </h1>
              <p className='text-xl text-blue-100 mb-6 font-medium'>
                DevOps Engineer
              </p>
              <p className='text-blue-100 max-w-lg mb-8 leading-relaxed'>
                Building scalable, automated infrastructure and optimizing
                deployment pipelines to power the next generation of
                applications.
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
                  href='https://github.com/anasnaeem80'
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
                  href='https://www.linkedin.com/in/muhammad-anas-naeem-832229246'
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
                  href='mailto:anas.naeem.998@gmail.com'
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
                {/* Using your own profile image */}
                <img
                  src='/profile.jpg'
                  alt='Muhammad Anas Naeem'
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/300/300";
                  }}
                />

                {/* Glowing effect */}
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
                  I&apos;m a DevOps enthusiast with 1.5 years of hands-on
                  experience in Linux OS, AWS, solution architecture, Docker,
                  Kubernetes, Jenkins, Terraform, and CI/CD practices. I&apos;m
                  passionate about leveraging these tools to build efficient,
                  scalable, and resilient infrastructure. Currently, I&apos;m
                  seeking a Junior DevOps Engineer role where I can continue
                  growing and contributing to impactful engineering teams.
                </p>
                <p className='text-gray-700 leading-relaxed mt-4 dark:text-gray-300'>
                  My goal is to contribute to teams by streamlining workflows,
                  automating processes, and enabling smoother development and
                  deployment cycles. I believe in the power of automation and
                  infrastructure as code to solve complex operational
                  challenges.
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

          {/* Existing Experience: Projects */}
          <motion.div variants={item}>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
              <div className='p-6 md:p-8'>
                <div className='border-l-4 border-blue-500 pl-4 py-1'>
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                    DevOps Engineer (Projects)
                  </h3>
                  <p className='text-gray-600 mt-1 dark:text-gray-400'>
                    Self-directed projects & hands-on learning
                  </p>
                  <p className='text-gray-500 text-sm mt-1 dark:text-gray-500'>
                    2023 - Present
                  </p>
                </div>
                <div className='mt-6'>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Currently working on various hands-on projects in DevOps and
                    Cloud deployment to build practical experience with
                    industry-standard tools and methodologies.
                  </p>
                  <ul className='mt-4 space-y-2 text-gray-700 dark:text-gray-300'>
                    <li className='flex items-start'>
                      <span className='text-blue-500 mr-2 dark:text-blue-400'>
                        •
                      </span>
                      <span>
                        Automating infrastructure deployment with Terraform and
                        AWS
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-500 mr-2 dark:text-blue-400'>
                        •
                      </span>
                      <span>
                        Building CI/CD pipelines with Jenkins and GitHub Actions
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-500 mr-2 dark:text-blue-400'>
                        •
                      </span>
                      <span>
                        Containerizing applications with Docker and Kubernetes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Experience: 303 Inc. */}
          <motion.div variants={item} className='mt-8'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
              <div className='p-6 md:p-8'>
                <div className='border-l-4 border-blue-500 pl-4 py-1'>
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                    DevOps Intern — 303 Inc.
                  </h3>
                  <p className='text-gray-600 mt-1 dark:text-gray-400'>
                    Mar 2025 – May 2025
                  </p>
                </div>
                <div className='mt-6'>
                  <p className='text-gray-700 dark:text-gray-300'>
                    As a DevOps Intern at 303 Inc., I applied and refined my
                    DevOps skills by contributing to real-world infrastructure
                    and CI/CD workflows. This internship built on my 1.5 years
                    of DevOps experience.
                  </p>
                  <ul className='mt-4 space-y-2 text-gray-700 dark:text-gray-300'>
                    <li className='flex items-start'>
                      <span className='text-blue-500 mr-2 dark:text-blue-400'>
                        •
                      </span>
                      <span>
                        Streamlined CI/CD pipelines using Jenkins and GitHub
                        Actions
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-500 mr-2 dark:text-blue-400'>
                        •
                      </span>
                      <span>
                        Automated infrastructure deployments with Terraform and
                        Ansible
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-blue-500 mr-2 dark:text-blue-400'>
                        •
                      </span>
                      <span>
                        Monitored application and system health using Prometheus
                        and Grafana
                      </span>
                    </li>
                  </ul>
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
            <motion.div
              variants={item}
              className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white'>
                  Cloud & Infrastructure
                </h3>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {["AWS", "Terraform", "Ansible", "Linux"].map(
                    (skill, index) => {
                      const color = getTagColor(skill);
                      return (
                        <span
                          key={index}
                          className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
                        >
                          {skill}
                        </span>
                      );
                    }
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white'>
                  Containerization
                </h3>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {["Docker", "Kubernetes", "Helm"].map((skill, index) => {
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

            <motion.div
              variants={item}
              className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white'>
                  CI/CD & Monitoring
                </h3>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {["Jenkins", "GitHub Actions", "Prometheus", "Grafana"].map(
                    (skill, index) => {
                      const color = getTagColor(skill);
                      return (
                        <span
                          key={index}
                          className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
                        >
                          {skill}
                        </span>
                      );
                    }
                  )}
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
          <motion.div variants={item}>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800'>
              <div className='p-6 md:p-8'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                      BS Software Engineering
                    </h3>
                    <p className='text-gray-600 mt-1 dark:text-gray-400'>
                      University of Karachi, Department of Computer Science
                    </p>
                  </div>
                  <div className='mt-2 md:mt-0'>
                    <div className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/50 dark:text-blue-400'>
                      2022 - Active
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Studying Software Engineering with a focus on DevOps
                    practices, cloud computing, and modern software development
                    methodologies.
                  </p>
                  <p className='text-gray-700 mt-2 dark:text-gray-300'>
                    <strong>Location:</strong> Karachi, Pakistan
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
                        anas.naeem.998@gmail.com
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
                        +92 324 2009744
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
              <h3 className='text-2xl font-bold mb-4'>Muhammad Anas Naeem</h3>
              <p className='text-gray-400'>
                DevOps Engineer passionate about creating scalable and efficient
                infrastructure solutions.
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
                  href='https://github.com/anasnaeem80'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition duration-200'
                >
                  <Github className='w-6 h-6' />
                </a>
                <a
                  href='https://www.linkedin.com/in/muhammad-anas-naeem-832229246'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition duration-200'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href='mailto:anas.naeem.998@gmail.com'
                  className='text-gray-400 hover:text-white transition duration-200'
                >
                  <Mail className='w-6 h-6' />
                </a>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>
              © {new Date().getFullYear()} Muhammad Anas Naeem. All rights
              reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
