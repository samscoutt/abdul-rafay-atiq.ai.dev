'use client';

import React, { useState } from "react";
import { Mail, Github, Linkedin, Award, Briefcase, Code, Brain, GraduationCap, Phone } from "lucide-react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-indigo-50 to-white min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-md">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-lg text-blue-600">AN</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition duration-200 px-2 py-1 rounded hover:bg-blue-50"
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-gray-600 p-2" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-2 px-4 space-y-2 border-t">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left text-white md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Muhammad Anas Naeem</h1>
              <p className="text-xl text-blue-100 mb-6">DevOps Engineer</p>
              <p className="text-blue-100 max-w-lg mb-8">
                Building scalable, automated infrastructure and optimizing deployment pipelines to power the next generation of applications.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition duration-200">
                  Download CV
                </button>
                <button 
                  className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-400 transition duration-200"
                  onClick={() => scrollToSection('contact')}
                >
                  Hire Me
                </button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src="/api/placeholder/256/256" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white py-6 shadow-md mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-200">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-200">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-200">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">
                I'm an aspiring DevOps Engineer, actively building my skills in Linux OS, AWS, solution architecture, Docker, Kubernetes, Jenkins, Terraform, and CI/CD practices.
                I'm passionate about leveraging these technologies to create efficient, scalable, and resilient systems.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                My goal is to contribute to teams by streamlining workflows, automating processes, and enabling smoother development and deployment cycles.
                I believe in the power of automation and infrastructure as code to solve complex operational challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-gray-800">DevOps Engineer (Projects)</h3>
                <p className="text-gray-600 mt-1">Self-directed projects & hands-on learning</p>
                <p className="text-gray-500 text-sm mt-1">2023 - Present</p>
              </div>
              <div className="mt-6">
                <p className="text-gray-700">
                  Currently working on various hands-on projects in DevOps and Cloud deployment to build practical experience with industry-standard tools and methodologies.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Automating infrastructure deployment with Terraform and AWS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Building CI/CD pipelines with Jenkins and GitHub Actions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Containerizing applications with Docker and Kubernetes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Automated Backup System</h3>
                <p className="text-gray-700 mb-4">
                  Jenkins + rclone to AWS S3/Google Drive for automated and scheduled backup operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Jenkins</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">AWS S3</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">rclone</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">AI/ML Deployment Pipeline</h3>
                <p className="text-gray-700 mb-4">
                  CI/CD with Jenkins, Kubernetes, Docker, and Terraform for machine learning model deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Docker</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Kubernetes</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Terraform</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Microservices CI/CD</h3>
                <p className="text-gray-700 mb-4">
                  Docker, Kubernetes, Nexus, SonarQube, Grafana implementation for microservices architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Microservices</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">SonarQube</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Grafana</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">AWS Serverless App</h3>
                <p className="text-gray-700 mb-4">
                  API Gateway, Terraform, GitHub Actions for serverless application deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Serverless</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">API Gateway</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Cloud & Infrastructure</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">AWS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Terraform</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Ansible</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Linux</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Containerization</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Docker</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Kubernetes</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Helm</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CI/CD & Monitoring</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Jenkins</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">GitHub Actions</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Prometheus</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Grafana</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Education</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">BS Software Engineering</h3>
                  <p className="text-gray-600 mt-1">University of Karachi, Department of Computer Science</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    2020 - 2025 (Expected)
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-700">
                  Studying Software Engineering with a focus on DevOps practices, cloud computing, and modern software development methodologies.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Location:</strong> Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-600 text-sm">Email</p>
                      <p className="text-gray-800">anas.naeem.998@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-600 text-sm">Phone</p>
                      <p className="text-gray-800">+92 324 2009744</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600 mr-3 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 text-sm">Location</p>
                      <p className="text-gray-800">Karachi, Pakistan</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600 mr-3 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <div>
                      <p className="text-gray-600 text-sm">Languages</p>
                      <p className="text-gray-800">Urdu, English</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Message</h3>
                <form>
                  <div className="mb-4">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Muhammad Anas Naeem</h3>
              <p className="text-gray-400">
                DevOps Engineer passionate about creating scalable and efficient infrastructure solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Connected</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Muhammad Anas Naeem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}