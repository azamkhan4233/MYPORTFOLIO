import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  BookOpen,
  Cpu,
  Database,
  Server,
  Cloud,
  Radio,
  Wrench,
  Terminal,
  Download,
  Mail,
  Copy,
  Check,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO DATA CONFIGURATION (STRICTLY VERIFIED FACTS)
 * ============================================================================
 * Every section, API endpoint response, project card, skill group, timeline
 * item, and terminal command dynamically renders from this single source.
 */
export const portfolioData = {
  personal: {
    fullName: "Mohd Azam Khan",
    shortName: "Azam Khan",
    monogram: "AK",
    headline:
      "Graduate software engineer. Java backends, LLM integration, cloud deployment.",
    pitch:
      "I build Spring Boot services with secure APIs and connect them to AI models. My main project is a multi-tenant support platform that answers customer questions from each business’s own documents. B.Tech CSE (AI/ML), graduating 2027.",
    degree: "B.Tech CSE (AI/ML), AKTU",
    graduatingYear: 2027,
    location: "Uttar Pradesh, India",
    status: "Open to graduate roles",
    focusAreas: ["Java backend", "AI integration", "Cloud"],
    resumeFile: "Mohd_Azam_Khan_Detailed_CV.pdf",
    email: "azamkhan19043@gmail.com",
    copyright: "© 2026 Mohd Azam Khan",
    links: {
      github: "https://github.com/azamkhan4233",
      linkedin: "https://www.linkedin.com/in/mohd-azam-khan-016915228/",
      whatsapp:
        "https://wa.me/919369230220?text=Hi%20Azam%2C%20I%20saw%20your%20portfolio.",
      docmasterRepo: "https://github.com/azamkhan4233/Repo_Docmaster",
    },
  },

  apiEndpoints: {
    profile: {
      method: "GET",
      path: "/profile",
      status: "200 OK",
      payload: {
        name: "Mohd Azam Khan",
        role: "Graduate software engineer",
        focus: ["Java backend", "AI integration", "Cloud"],
        degree: "B.Tech CSE (AI/ML), AKTU",
        graduating: 2027,
        location: "Uttar Pradesh, India",
        status: "Open to graduate roles",
      },
    },
    projects: {
      method: "GET",
      path: "/projects",
      status: "200 OK",
      payload: [
        {
          name: "AI Support SaaS",
          stack: ["Spring Boot", "Groq API", "RAG", "JWT"],
          status: "built",
        },
        {
          name: "Calma",
          stack: ["Spring Boot", "JWT", "Flutter"],
          status: "published in STM Journal",
        },
        {
          name: "FlashStock",
          stack: ["Spring Boot", "MySQL"],
          status: "in progress",
        },
      ],
    },
    stack: {
      method: "GET",
      path: "/stack",
      status: "200 OK",
      payload: {
        backend: ["Java", "Spring Boot", "Spring Security", "JPA"],
        ai: ["Groq LLM API", "RAG", "prompts"],
        data: ["MySQL", "PostgreSQL"],
        cloud: ["AWS EC2", "Docker", "Linux", "Kubernetes (basics)"],
        messaging: ["Kafka"],
      },
    },
  },

  about: {
    eyebrow: "About & Engineering Focus",
    title: "Backend systems engineered for reliability and grounded AI.",
    paragraphs: [
      "I focus on designing clean, maintainable Java and Spring Boot services with stateless JWT authentication, structured relational schemas, and clear API boundaries.",
      "Alongside core backend engineering, I integrate Large Language Models into practical workflows—building Retrieval-Augmented Generation (RAG) pipelines that extract context from business documents and deploying services onto Linux virtual machines.",
    ],
    highlights: [
      {
        id: "education",
        icon: "GraduationCap",
        label: "Education",
        title: "B.Tech CSE (AI & ML), AKTU",
        description:
          "Greater Noida Institute of Technology (Graduating 2027, lateral entry after Diploma at Jamia Millia Islamia).",
      },
      {
        id: "publication",
        icon: "BookOpen",
        label: "Published Research",
        title: "STM Journal (2023–24)",
        description:
          "Co-authored architecture paper: “Calma – A Personalized Salon Appointment Booking System”.",
      },
      {
        id: "focus",
        icon: "Cpu",
        label: "Core Focus",
        title: "Backend, AI & Cloud",
        description:
          "Java 21, Spring Boot, RAG document retrieval, Groq LLM API, and Linux/AWS EC2 deployment.",
      },
      {
        id: "status",
        icon: "MapPin",
        label: "Location & Status",
        title: "Uttar Pradesh, India",
        description: "Open to graduate software engineering roles.",
      },
    ],
  },

  projectFilters: [
    { id: "all", label: "All" },
    { id: "ai", label: "AI" },
    { id: "java", label: "Java backend" },
    { id: "cloud", label: "Cloud" },
  ],

  projects: [
    {
      id: "ai-support-saas",
      title: "AI Support SaaS",
      categories: ["ai", "java", "cloud"],
      status: "Built",
      statusTone: "emerald",
      summary:
        "A multi-tenant customer-support platform. Each business gets its own data, its own AI behaviour and answers grounded in its own documents.",
      tech: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MySQL",
        "Groq API",
        "RAG",
        "React/Vite",
      ],
      sourceUrl: "https://github.com/azamkhan4233/ai-support-api",
      architectureTag: "Multi-Tenant RAG & Spring Boot API",
      details: [
        "Organises support data and workflows per business (multi-tenant).",
        "Calls the Groq LLM API to draft replies, with configurable system prompts for each business.",
        "Document retrieval (RAG): extracts text from PDFs, stores chunks and retrieves the relevant ones as context for each answer.",
        "REST APIs protected with JWT authentication.",
        "Deployed to a virtual machine and configured to start automatically as a system service.",
      ],
    },
    {
      id: "calma",
      title: "Calma – salon appointment booking",
      categories: ["java"],
      status: "Published in STM Journal",
      statusTone: "blue",
      summary:
        "Booking backend for a salon app with role-based access. The architecture was published as a paper in STM Journal (2023–24).",
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Flutter client"],
      sourceUrl: "https://github.com/azamkhan4233/CalmaRepo",
      architectureTag: "Role-Based Booking Backend & Published Paper",
      details: [
        "Appointment-management workflows and database-backed booking features.",
        "Secure authentication and role-based access using Spring Security and JSON Web Tokens.",
        "Published: “Calma – A Personalized Salon Appointment Booking System”, STM Journal (2023–24).",
      ],
    },
    {
      id: "flashstock",
      title: "FlashStock – inventory and orders",
      categories: ["java"],
      status: "In progress",
      statusTone: "amber",
      summary:
        "A modular-monolith backend for multi-warehouse inventory and order handling.",
      tech: ["Java 21", "Spring Boot", "Spring Data JPA", "MySQL"],
      sourceUrl: null,
      architectureTag: "Modular Monolith & Domain Modelling",
      details: [
        "Splits the application into clear business modules with defined responsibilities.",
        "Practising relational data modelling and API design for inventory and order orchestration.",
      ],
    },
  ],

  skills: [
    {
      id: "backend",
      category: "Backend",
      icon: "Server",
      items: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "JWT",
      ],
    },
    {
      id: "ai",
      category: "AI integration",
      icon: "Cpu",
      items: [
        "Groq LLM API",
        "System-prompt configuration",
        "Document retrieval (RAG)",
        "JSON",
      ],
    },
    {
      id: "data",
      category: "Data",
      icon: "Database",
      items: ["MySQL", "PostgreSQL", "SQL", "Relational modelling", "H2"],
    },
    {
      id: "cloud",
      category: "Cloud and systems",
      icon: "Cloud",
      items: [
        "AWS EC2 (basic deployment)",
        "Linux/Ubuntu",
        "Docker",
        "Kubernetes fundamentals",
        "YAML",
        "TCP/IP",
        "DNS",
        "HTTP/HTTPS",
      ],
    },
    {
      id: "messaging",
      category: "Messaging",
      icon: "Radio",
      items: ["Apache Kafka (consumer in a Spring Boot service)"],
    },
    {
      id: "tools",
      category: "Tools",
      icon: "Wrench",
      items: ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA"],
    },
  ],

  timeline: [
    {
      id: "jpmorgan",
      period: "Jan 2026",
      title: "Software Engineering Job Simulation, JPMorgan Chase & Co.",
      type: "Experience",
      description:
        "Virtual programme. Consumed transaction messages from Kafka in a Spring Boot service, validated and stored them with Spring Data JPA and H2, and called an external REST incentive API.",
    },
    {
      id: "aktu",
      period: "2024 – 2027 (expected)",
      title: "B.Tech, Computer Science (AI & ML), AKTU",
      type: "Education",
      description:
        "Greater Noida Institute of Technology. Entered through lateral entry after my diploma.",
    },
    {
      id: "aptron",
      period: "Jun – Aug 2023",
      title: "Java Development Intern, APTRON, Noida",
      type: "Experience",
      description:
        "Internship focused on Java programming and software development practices.",
    },
    {
      id: "jmi",
      period: "2021 – 2024",
      title: "Diploma, Computer Science, Jamia Millia Islamia",
      type: "Education",
      description: "New Delhi.",
    },
  ],

  navigation: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "playground", label: "Playground" },
    { id: "contact", label: "Contact" },
  ],
};

/**
 * ============================================================================
 * CUSTOM BRAND SVG ICONS (ZERO EXTERNAL ASSET DEPENDENCIES)
 * ============================================================================
 */
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function WhatsappIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2c-.151.512.327.99.839.839l3.032-.892A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

/**
 * ============================================================================
 * REUSABLE UI PRIMITIVES & ICON RESOLVER
 * ============================================================================
 */
const iconRegistry = {
  GraduationCap,
  BookOpen,
  Cpu,
  MapPin,
  Server,
  Database,
  Cloud,
  Radio,
  Wrench,
};

function DynamicIcon({ name, className }) {
  const IconComp = iconRegistry[name] || Code2;
  return <IconComp className={className} aria-hidden="true" />;
}

/**
 * Interactive cursor-tracking spotlight card inspired by Linear & Vercel.
 */
function SpotlightCard({ children, className = "", isDark = true }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords((prev) => ({ ...prev, active: false }))}
      className={`relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isDark
          ? "bg-[#0E1525]/90 border-[#1E293B] hover:border-slate-700/90"
          : "bg-white border-slate-200/90 hover:border-slate-300 shadow-[0_1px_3px_rgba(15,23,42,0.03),0_8px_24px_rgba(15,23,42,0.04)]"
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: coords.active ? 1 : 0,
          background: isDark
            ? `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, rgba(56, 189, 248, 0.11), transparent 65%)`
            : `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, rgba(37, 99, 235, 0.07), transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/**
 * Tokenized syntax highlighter for JSON payloads in the REST API Inspector.
 */
function JsonSyntaxHighlighter({ data }) {
  const formatted = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const tokens = useMemo(() => {
    const regex =
      /("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(formatted)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "punctuation",
          text: formatted.slice(lastIndex, match.index),
        });
      }
      const token = match[0];
      if (/^"/.test(token)) {
        if (/:$/.test(token)) {
          parts.push({ type: "key", text: token });
        } else {
          parts.push({ type: "string", text: token });
        }
      } else if (/true|false/.test(token)) {
        parts.push({ type: "boolean", text: token });
      } else if (/null/.test(token)) {
        parts.push({ type: "null", text: token });
      } else {
        parts.push({ type: "number", text: token });
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < formatted.length) {
      parts.push({
        type: "punctuation",
        text: formatted.slice(lastIndex),
      });
    }
    return parts;
  }, [formatted]);

  return (
    <code className="font-mono text-[13px] leading-[1.65] block">
      {tokens.map((part, index) => {
        if (part.type === "key") {
          return (
            <span key={index} className="text-sky-400">
              {part.text}
            </span>
          );
        }
        if (part.type === "string") {
          return (
            <span key={index} className="text-emerald-300">
              {part.text}
            </span>
          );
        }
        if (part.type === "number") {
          return (
            <span key={index} className="text-amber-300">
              {part.text}
            </span>
          );
        }
        return (
          <span key={index} className="text-slate-400">
            {part.text}
          </span>
        );
      })}
    </code>
  );
}

/**
 * Consistent editorial section header with subtle monospace eyebrow.
 */
function SectionHeader({ eyebrow, title, subtitle, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl mb-12"
    >
      <div className="inline-flex items-center gap-2 mb-3">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isDark ? "bg-sky-400" : "bg-blue-600"
          }`}
        />
        <span
          className={`font-mono text-xs uppercase tracking-[0.14em] font-medium ${
            isDark ? "text-sky-400" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] ${
          isDark ? "text-slate-100" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-[17px] leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/**
 * ============================================================================
 * STICKY GLASSMORPHIC NAVIGATION HEADER
 * ============================================================================
 */
function Navbar({ isDark, toggleTheme, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? "bg-[#070B14]/82 border-[#1E293B]/80"
          : "bg-[#F8FAFC]/85 border-slate-200/90"
      }`}
    >
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className={`fixed top-0 left-0 right-0 h-[2px] origin-left z-50 ${
          isDark
            ? "bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400"
            : "bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500"
        }`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Monogram Brand Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "top")}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
        >
          <span
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold tracking-wider border transition-transform duration-200 group-hover:scale-105 ${
              isDark
                ? "bg-gradient-to-br from-blue-600/25 to-sky-400/15 border-sky-400/40 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.16)]"
                : "bg-blue-600 border-blue-700 text-white shadow-sm"
            }`}
          >
            {portfolioData.personal.monogram}
          </span>
          <span
            className={`font-semibold text-[15px] tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            {portfolioData.personal.shortName}
          </span>
        </a>

        {/* Desktop Navigation Links with Animated Active Indicator */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1"
        >
          {portfolioData.navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? isDark
                      ? "text-white"
                      : "text-slate-900"
                    : isDark
                    ? "text-slate-400 hover:text-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                    className={`absolute inset-0 rounded-lg -z-10 border ${
                      isDark
                        ? "bg-[#131C31] border-slate-700/80"
                        : "bg-white border-slate-200/90 shadow-xs"
                    }`}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Theme Switch + CV CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
              isDark
                ? "bg-[#0E1525] border-[#1E293B] text-slate-300 hover:text-white hover:border-slate-700"
                : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href={portfolioData.personal.resumeFile}
            download={portfolioData.personal.resumeFile}
            className={`hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
              isDark
                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.28)]"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className={`md:hidden p-2.5 rounded-lg border transition-colors cursor-pointer ${
              isDark
                ? "bg-[#0E1525] border-[#1E293B] text-slate-200"
                : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className={`md:hidden border-t overflow-hidden ${
              isDark
                ? "bg-[#070B14]/95 border-[#1E293B]"
                : "bg-white/95 border-slate-200"
            }`}
          >
            <div className="px-4 py-4 space-y-1.5">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? isDark
                          ? "bg-[#131C31] text-sky-400 border border-slate-700/80"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                        : isDark
                        ? "text-slate-300 hover:bg-[#0E1525]"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-2">
                <a
                  href={portfolioData.personal.resumeFile}
                  download={portfolioData.personal.resumeFile}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * ============================================================================
 * 1. HERO SECTION WITH INTERACTIVE REST API INSPECTOR
 * ============================================================================
 */
function HeroSection({ isDark }) {
  const [activeEndpoint, setActiveEndpoint] = useState("profile");
  const [copiedJson, setCopiedJson] = useState(false);

  const currentEndpoint = portfolioData.apiEndpoints[activeEndpoint];

  const handleCopyJson = () => {
    const text = JSON.stringify(currentEndpoint.payload, null, 2);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedJson(true);
        setTimeout(() => setCopiedJson(false), 1800);
      });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 overflow-hidden"
    >
      {/* Subtle Ambient Radial Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[440px] rounded-full blur-3xl opacity-30"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(56,189,248,0.08) 45%, transparent 75%)"
            : "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(14,165,233,0.05) 45%, transparent 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Intro & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 min-w-0"
          >
            {/* Availability Status Pill */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-6 ${
                isDark
                  ? "bg-[#0E1525]/90 border-[#1E293B] text-slate-300"
                  : "bg-white border-slate-200 text-slate-700 shadow-2xs"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                {portfolioData.personal.status} • B.Tech CSE (AI/ML){" "}
                {portfolioData.personal.graduatingYear}
              </span>
            </div>

            {/* Expressive Display Headline */}
            <h1
              className={`text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.04] ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              {portfolioData.personal.fullName}
            </h1>

            <p
              className={`mt-5 text-lg sm:text-xl font-medium leading-snug max-w-2xl ${
                isDark ? "text-sky-400/95" : "text-blue-600"
              }`}
            >
              {portfolioData.personal.headline}
            </p>

            <p
              className={`mt-4 text-base sm:text-[17px] leading-relaxed max-w-xl ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {portfolioData.personal.pitch}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={portfolioData.personal.resumeFile}
                download={portfolioData.personal.resumeFile}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_24px_rgba(37,99,235,0.32)] hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#0E1525] border-[#1E293B] hover:border-slate-600 text-slate-100"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4 opacity-75" />
              </a>

              <a
                href={portfolioData.personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#0E1525]/70 border-[#1E293B] hover:border-slate-600 text-slate-300 hover:text-white"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950"
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioData.personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#0E1525]/70 border-[#1E293B] hover:border-slate-600 text-slate-300 hover:text-white"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950"
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive REST API Inspector Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 min-w-0"
          >
            <div
              className={`rounded-2xl border overflow-hidden shadow-2xl ${
                isDark
                  ? "bg-[#0A101D] border-[#1E293B] shadow-black/50"
                  : "bg-[#0B1220] border-slate-800 shadow-slate-900/15"
              }`}
              aria-label="Interactive REST API Response Inspector"
            >
              {/* Window Top Chrome & Endpoint Tabs */}
              <div className="px-3.5 pt-3 pb-0 border-b border-slate-800/90 bg-[#070C16]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-500">
                      api.azamkhan.dev
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyJson}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
                  >
                    {copiedJson ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Endpoint Switcher Tabs */}
                <div
                  role="tablist"
                  aria-label="API Endpoints"
                  className="flex items-center gap-1 overflow-x-auto no-scrollbar"
                >
                  {Object.keys(portfolioData.apiEndpoints).map((key) => {
                    const ep = portfolioData.apiEndpoints[key];
                    const selected = activeEndpoint === key;
                    return (
                      <button
                        key={key}
                        role="tab"
                        type="button"
                        aria-selected={selected}
                        onClick={() => setActiveEndpoint(key)}
                        className={`relative px-3 py-2 font-mono text-xs whitespace-nowrap rounded-t-lg transition-colors cursor-pointer ${
                          selected
                            ? "text-white bg-[#0A101D] border-t border-x border-slate-800"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <span className="text-emerald-400 mr-1.5">
                          {ep.method}
                        </span>
                        <span>{ep.path}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* HTTP Status Strip */}
              <div className="px-4 py-2.5 border-b border-slate-800/80 bg-[#0D1526]/70 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-sky-400 font-semibold">
                    {currentEndpoint.method}
                  </span>
                  <span>{currentEndpoint.path}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {currentEndpoint.status}
                </span>
              </div>

              {/* Formatted Syntax-Highlighted JSON Output */}
              <div className="p-4 overflow-x-auto min-h-[272px] max-h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeEndpoint}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.16 }}
                    className="m-0"
                  >
                    <JsonSyntaxHighlighter data={currentEndpoint.payload} />
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 2. ABOUT SECTION & INTERACTIVE BENTO CARDS
 * ============================================================================
 */
function AboutSection({ isDark }) {
  return (
    <section
      id="about"
      className={`py-20 sm:py-24 border-t ${
        isDark ? "border-[#1E293B]/80" : "border-slate-200/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={portfolioData.about.eyebrow}
          title={portfolioData.about.title}
          isDark={isDark}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Editorial Engineering Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-4"
          >
            {portfolioData.about.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-[17px] leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {para}
              </p>
            ))}

            <div
              className={`pt-2 flex flex-wrap gap-2 text-xs font-mono ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {portfolioData.personal.focusAreas.map((area) => (
                <span
                  key={area}
                  className={`px-3 py-1 rounded-md border ${
                    isDark
                      ? "bg-[#0E1525] border-[#1E293B] text-sky-300"
                      : "bg-white border-slate-200 text-blue-700"
                  }`}
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 4 Interactive Bento Highlight Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.about.highlights.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <SpotlightCard isDark={isDark} className="p-5 h-full">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                        isDark
                          ? "bg-[#131C31] border-slate-700/80 text-sky-400"
                          : "bg-blue-50 border-blue-100 text-blue-600"
                      }`}
                    >
                      <DynamicIcon name={item.icon} className="w-4 h-4" />
                    </span>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <h3
                    className={`font-semibold text-base mb-1.5 ${
                      isDark ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 3. PROJECTS SECTION WITH CATEGORY FILTERS, INLINE DETAILS & ARCHITECTURE MODAL
 * ============================================================================
 */
function ProjectDetailModal({ project, onClose, isDark }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 14 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={`relative z-10 w-full max-w-2xl rounded-2xl border p-6 sm:p-8 shadow-2xl max-h-[88vh] overflow-y-auto ${
            isDark
              ? "bg-[#0E1525] border-slate-700/90 text-slate-100"
              : "bg-white border-slate-200 text-slate-900"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`inline-block font-mono text-xs mb-2 ${
                  isDark ? "text-sky-400" : "text-blue-600"
                }`}
              >
                {project.architectureTag}
              </span>
              <h3
                id="modal-project-title"
                className="text-2xl font-bold tracking-tight"
              >
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isDark
                  ? "bg-[#131C31] border-slate-700 text-slate-300 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {project.summary}
          </p>

          {/* Implementation & Architecture Notes */}
          <div className="mt-6">
            <h4
              className={`font-mono text-xs uppercase tracking-wider mb-3 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              System Implementation &amp; Responsibilities
            </h4>
            <ul className="space-y-2.5">
              {project.details.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  />
                  <span className={isDark ? "text-slate-200" : "text-slate-700"}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-6">
            <h4
              className={`font-mono text-xs uppercase tracking-wider mb-2.5 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded-md font-mono text-xs border ${
                    isDark
                      ? "bg-[#131C31] border-slate-700/80 text-slate-200"
                      : "bg-slate-100 border-slate-200 text-slate-800"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div
            className={`mt-8 pt-5 border-t flex flex-wrap items-center justify-between gap-3 ${
              isDark ? "border-slate-800" : "border-slate-200"
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                project.statusTone === "emerald"
                  ? isDark
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : project.statusTone === "blue"
                  ? isDark
                    ? "bg-sky-500/10 border-sky-500/30 text-sky-300"
                    : "bg-blue-50 border-blue-200 text-blue-700"
                  : isDark
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                  : "bg-amber-50 border-amber-200 text-amber-700"
              }`}
            >
              {project.status}
            </span>

            <div className="flex items-center gap-2.5">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer ${
                  isDark
                    ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ProjectsSection({ isDark }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [expandedCards, setExpandedCards] = useState({});
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") return portfolioData.projects;
    return portfolioData.projects.filter((project) =>
      project.categories.includes(selectedFilter)
    );
  }, [selectedFilter]);

  const toggleInlineExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="projects"
      className={`py-20 sm:py-24 border-t ${
        isDark ? "border-[#1E293B]/80" : "border-slate-200/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects"
            subtitle="Backend architectures, multi-tenant AI retrieval, and published system designs."
            isDark={isDark}
          />

          {/* Interactive Category Filter Tabs */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className={`inline-flex flex-wrap gap-1.5 p-1.5 rounded-xl border self-start md:mb-12 ${
              isDark
                ? "bg-[#0E1525] border-[#1E293B]"
                : "bg-slate-100/90 border-slate-200"
            }`}
          >
            {portfolioData.projectFilters.map((filter) => {
              const active = selectedFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    active
                      ? isDark
                        ? "text-white"
                        : "text-slate-900"
                      : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="projectFilterPill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                      className={`absolute inset-0 rounded-lg -z-10 border ${
                        isDark
                          ? "bg-[#17223B] border-sky-400/40"
                          : "bg-white border-slate-200 shadow-2xs"
                      }`}
                    />
                  )}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = !!expandedCards[project.id];

              const badgeStyle =
                project.statusTone === "emerald"
                  ? isDark
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : project.statusTone === "blue"
                  ? isDark
                    ? "bg-sky-500/10 border-sky-500/30 text-sky-300"
                    : "bg-blue-50 border-blue-200 text-blue-700"
                  : isDark
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                  : "bg-amber-50 border-amber-200 text-amber-700";

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.32 }}
                >
                  <SpotlightCard isDark={isDark} className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      {/* Main Info */}
                      <div className="space-y-3 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeStyle}`}
                          >
                            {project.status}
                          </span>
                          <span
                            className={`font-mono text-xs ${
                              isDark ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            {project.architectureTag}
                          </span>
                        </div>

                        <h3
                          className={`text-xl sm:text-2xl font-bold tracking-tight ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p
                          className={`text-base leading-relaxed ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {project.summary}
                        </p>

                        {/* Tech Badges */}
                        <div className="pt-1 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-1 rounded-md font-mono text-xs border ${
                                isDark
                                  ? "bg-[#131C31]/90 border-[#1E293B] text-slate-300"
                                  : "bg-slate-50 border-slate-200 text-slate-700"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Actions */}
                      <div className="flex flex-wrap lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 shrink-0">
                        {project.sourceUrl ? (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                              isDark
                                ? "bg-[#131C31] border-slate-700/90 hover:border-sky-400/60 text-slate-100"
                                : "bg-white border-slate-300 hover:border-blue-500 text-slate-900"
                            }`}
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>Source Code</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
                          </a>
                        ) : (
                          <span
                            className={`inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs font-mono border ${
                              isDark
                                ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                                : "bg-amber-50 border-amber-200 text-amber-700"
                            }`}
                          >
                            In progress
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                            isDark
                              ? "bg-blue-600/15 hover:bg-blue-600/25 text-sky-300 border border-sky-400/30"
                              : "bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                          }`}
                        >
                          <Layers className="w-4 h-4" />
                          <span>View Architecture &amp; Details</span>
                        </button>

                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => toggleInlineExpand(project.id)}
                          className={`inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                            isDark
                              ? "text-slate-400 hover:text-slate-200"
                              : "text-slate-500 hover:text-slate-900"
                          }`}
                        >
                          <span>
                            {isExpanded ? "Hide notes" : "Quick expand"}
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Inline Collapsible Details */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.24 }}
                          className="overflow-hidden"
                        >
                          <div
                            className={`mt-6 pt-5 border-t ${
                              isDark ? "border-[#1E293B]" : "border-slate-200"
                            }`}
                          >
                            <ul className="space-y-2 max-w-3xl">
                              {project.details.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2.5 text-sm"
                                >
                                  <span
                                    className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                                      isDark ? "bg-sky-400" : "bg-blue-600"
                                    }`}
                                  />
                                  <span
                                    className={
                                      isDark
                                        ? "text-slate-300"
                                        : "text-slate-700"
                                    }
                                  >
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </SpotlightCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Additional GitHub Repo Footer Callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`mt-8 p-4 sm:px-6 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${
            isDark
              ? "bg-[#0E1525]/60 border-[#1E293B] text-slate-300"
              : "bg-white border-slate-200 text-slate-700"
          }`}
        >
          <div className="flex items-center gap-2.5 text-sm">
            <FolderGit2
              className={`w-4 h-4 shrink-0 ${
                isDark ? "text-sky-400" : "text-blue-600"
              }`}
            />
            <span>More code, including Docmaster, on GitHub.</span>
          </div>
          <a
            href={portfolioData.personal.links.docmasterRepo}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isDark
                ? "text-sky-400 hover:text-sky-300"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            <span>azamkhan4233/Repo_Docmaster</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Project Architecture Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        isDark={isDark}
      />
    </section>
  );
}

/**
 * ============================================================================
 * 4. SKILLS SECTION
 * ============================================================================
 */
function SkillsSection({ isDark }) {
  return (
    <section
      id="skills"
      className={`py-20 sm:py-24 border-t ${
        isDark ? "border-[#1E293B]/80" : "border-slate-200/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills"
          subtitle="Technologies and tools I work with across backend services, LLM pipelines, databases, and cloud environments."
          isDark={isDark}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.skills.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <SpotlightCard isDark={isDark} className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      isDark
                        ? "bg-[#131C31] border-slate-700/80 text-sky-400"
                        : "bg-blue-50 border-blue-100 text-blue-600"
                    }`}
                  >
                    <DynamicIcon name={group.icon} className="w-4 h-4" />
                  </span>
                  <h3
                    className={`font-semibold text-base tracking-tight ${
                      isDark ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg font-mono text-xs border transition-colors ${
                        isDark
                          ? "bg-[#131C31]/80 border-[#1E293B] text-slate-300 hover:border-sky-400/50 hover:text-white"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-400 hover:text-slate-950"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 5. EXPERIENCE & EDUCATION TIMELINE SECTION
 * ============================================================================
 */
function ExperienceSection({ isDark }) {
  return (
    <section
      id="experience"
      className={`py-20 sm:py-24 border-t ${
        isDark ? "border-[#1E293B]/80" : "border-slate-200/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Background"
          title="Experience and education"
          subtitle="Chronological milestones, newest first."
          isDark={isDark}
        />

        <div className="relative max-w-3xl">
          {/* Vertical Timeline Spine */}
          <div
            aria-hidden="true"
            className={`absolute left-[15px] top-2 bottom-2 w-px ${
              isDark ? "bg-[#1E293B]" : "bg-slate-200"
            }`}
          />

          <ol className="space-y-8">
            {portfolioData.timeline.map((item, idx) => {
              const isExperience = item.type === "Experience";
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.42, delay: idx * 0.06 }}
                  className="relative pl-11"
                >
                  {/* Timeline Node */}
                  <span
                    className={`absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center border ${
                      isExperience
                        ? isDark
                          ? "bg-[#0E1525] border-sky-400/60 text-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.2)]"
                          : "bg-blue-50 border-blue-300 text-blue-600"
                        : isDark
                        ? "bg-[#0E1525] border-emerald-400/50 text-emerald-400"
                        : "bg-emerald-50 border-emerald-300 text-emerald-600"
                    }`}
                  >
                    {isExperience ? (
                      <Briefcase className="w-3.5 h-3.5" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5" />
                    )}
                  </span>

                  <SpotlightCard isDark={isDark} className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <time
                        className={`font-mono text-xs font-medium ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {item.period}
                      </time>

                      <span
                        className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-medium border ${
                          isExperience
                            ? isDark
                              ? "bg-sky-500/10 border-sky-500/30 text-sky-300"
                              : "bg-blue-50 border-blue-200 text-blue-700"
                            : isDark
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-emerald-50 border-emerald-200 text-emerald-700"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-bold tracking-tight ${
                        isDark ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm sm:text-[15px] leading-relaxed ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </SpotlightCard>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 6. INTERACTIVE DEVELOPER TERMINAL PLAYGROUND
 * ============================================================================
 */
function TerminalPlayground({ isDark }) {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [entries, setEntries] = useState([
    {
      id: "welcome",
      type: "system",
      lines: [
        "Connected to azam@spring-cloud (Ubuntu LTS • Java 21 Runtime)",
        "Type 'help' or click a command pill below to inspect profile, projects, and stack.",
      ],
    },
  ]);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const quickCommands = [
    "help",
    "whoami",
    "projects",
    "skills",
    "experience",
    "publication",
    "contact",
    "sudo hire azam",
    "clear",
  ];

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [entries]);

  const evaluateCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryPointer(-1);

    if (cmd === "clear") {
      setEntries([]);
      return;
    }

    let outputLines = [];
    let tone = "default";

    switch (cmd) {
      case "help":
        outputLines = [
          "Available commands:",
          "  whoami          — Display profile summary, degree, and status",
          "  projects        — List built systems and GitHub repositories",
          "  skills          — Inspect backend, AI, database, and cloud stack",
          "  experience      — View software engineering simulations, internships & education",
          "  publication     — Details on STM Journal research paper",
          "  contact         — Show email, WhatsApp, GitHub, and LinkedIn",
          "  sudo hire azam  — Run graduate role readiness check",
          "  clear           — Clear terminal output",
        ];
        break;

      case "whoami":
        outputLines = [
          `Name     : ${portfolioData.personal.fullName}`,
          `Role     : ${portfolioData.personal.headline}`,
          `Degree   : ${portfolioData.personal.degree} (Graduating ${portfolioData.personal.graduatingYear})`,
          `Location : ${portfolioData.personal.location}`,
          `Status   : ${portfolioData.personal.status}`,
        ];
        tone = "accent";
        break;

      case "projects":
        outputLines = [
          "1. AI Support SaaS [Built]",
          "   Multi-tenant customer-support platform with Groq LLM API, PDF RAG & JWT.",
          "   Repo: https://github.com/azamkhan4233/ai-support-api",
          "",
          "2. Calma – salon appointment booking [Published in STM Journal]",
          "   Role-based salon booking backend built with Spring Boot, Spring Security & JWT.",
          "   Repo: https://github.com/azamkhan4233/CalmaRepo",
          "",
          "3. FlashStock – inventory and orders [In progress]",
          "   Modular-monolith backend for multi-warehouse inventory & order orchestration.",
          "",
          "Additional Repo: https://github.com/azamkhan4233/Repo_Docmaster",
        ];
        break;

      case "skills":
        outputLines = portfolioData.skills.map(
          (g) => `${g.category.padEnd(18, " ")}: ${g.items.join(", ")}`
        );
        break;

      case "experience":
        outputLines = portfolioData.timeline.map(
          (t) => `[${t.period}] ${t.title} (${t.type})`
        );
        break;

      case "publication":
        outputLines = [
          "Title   : “Calma – A Personalized Salon Appointment Booking System”",
          "Journal : STM Journal (2023–24)",
          "Stack   : Java, Spring Boot, Spring Security, JWT, Flutter client",
          "Source  : https://github.com/azamkhan4233/CalmaRepo",
        ];
        tone = "accent";
        break;

      case "contact":
        outputLines = [
          `Email    : ${portfolioData.personal.email}`,
          `WhatsApp : ${portfolioData.personal.links.whatsapp}`,
          `GitHub   : ${portfolioData.personal.links.github}`,
          `LinkedIn : ${portfolioData.personal.links.linkedin}`,
        ];
        break;

      case "sudo hire azam":
        outputLines = [
          "[sudo] verifying candidate profile for Mohd Azam Khan...",
          "✓ Spring Boot & JWT REST APIs ............. READY",
          "✓ Groq LLM API & PDF RAG Pipelines ........ READY",
          "✓ MySQL / PostgreSQL & Spring Data JPA .... READY",
          "✓ Linux / Ubuntu & AWS EC2 Deployment ..... READY",
          "HTTP/1.1 200 OK — Candidate open to graduate software engineering roles.",
          `Reach out directly: ${portfolioData.personal.email}`,
        ];
        tone = "success";
        break;

      default:
        outputLines = [
          `bash: ${trimmed}: command not found. Type 'help' to see valid commands.`,
        ];
        tone = "error";
    }

    setEntries((prev) => [
      ...prev,
      { id: `${Date.now()}-cmd`, type: "command", text: trimmed },
      { id: `${Date.now()}-out`, type: "output", lines: outputLines, tone },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evaluateCommand(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyPointer + 1, commandHistory.length - 1);
        setHistoryPointer(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer > 0) {
        const nextIdx = historyPointer - 1;
        setHistoryPointer(nextIdx);
        setInput(commandHistory[nextIdx]);
      } else {
        setHistoryPointer(-1);
        setInput("");
      }
    }
  };

  return (
    <section
      id="playground"
      className={`py-20 sm:py-24 border-t ${
        isDark ? "border-[#1E293B]/80" : "border-slate-200/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive Shell"
          title="Developer Terminal"
          subtitle="Query my profile, projects, publication, and stack via CLI commands."
          isDark={isDark}
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className={`rounded-2xl border overflow-hidden shadow-2xl ${
            isDark
              ? "bg-[#090E1A] border-[#1E293B] shadow-black/50"
              : "bg-[#0B1220] border-slate-800 shadow-slate-900/15"
          }`}
        >
          {/* Terminal Window Top Header */}
          <div className="px-4 py-3 bg-[#070C16] border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>azam@spring-cloud:~</span>
              </span>
            </div>

            <span className="font-mono text-[11px] text-slate-500">
              interactive • bash
            </span>
          </div>

          {/* Clickable Quick-Command Bar */}
          <div className="px-4 py-2.5 bg-[#0C1322] border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto">
            <span className="font-mono text-[11px] text-slate-500 shrink-0">
              Quick run:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => evaluateCommand(cmd)}
                className={`px-2.5 py-1 rounded-md font-mono text-xs whitespace-nowrap border transition-colors cursor-pointer ${
                  cmd === "sudo hire azam"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20"
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:border-sky-400/50 hover:text-white"
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Scrollback Area */}
          <div
            ref={terminalBodyRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 font-mono text-[13px] leading-relaxed h-[320px] overflow-y-auto space-y-3 cursor-text"
          >
            {entries.map((entry) => {
              if (entry.type === "command") {
                return (
                  <div key={entry.id} className="flex items-center gap-2">
                    <span className="text-emerald-400 shrink-0">
                      azam@spring-cloud:~$
                    </span>
                    <span className="text-white font-medium">{entry.text}</span>
                  </div>
                );
              }

              const textColor =
                entry.tone === "success"
                  ? "text-emerald-300"
                  : entry.tone === "accent"
                  ? "text-sky-300"
                  : entry.tone === "error"
                  ? "text-rose-400"
                  : "text-slate-300";

              return (
                <div key={entry.id} className={`space-y-1 ${textColor}`}>
                  {entry.lines.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap break-words">
                      {line || "\u00A0"}
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Live Prompt Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label
                htmlFor="terminal-cli-input"
                className="text-emerald-400 shrink-0 select-none"
              >
                azam@spring-cloud:~$
              </label>
              <input
                ref={inputRef}
                id="terminal-cli-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command (e.g. help)..."
                autoComplete="off"
                spellCheck="false"
                className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none font-mono text-[13px]"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * ============================================================================
 * 7. CONTACT SECTION & FOOTER
 * ============================================================================
 */
function ContactSection({ isDark }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    const email = portfolioData.personal.email;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      });
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-24 border-t ${
        isDark ? "border-[#1E293B]/80" : "border-slate-200/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard isDark={isDark} className="p-8 sm:p-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles
                className={`w-4 h-4 ${
                  isDark ? "text-sky-400" : "text-blue-600"
                }`}
              />
              <span
                className={`font-mono text-xs uppercase tracking-[0.14em] font-medium ${
                  isDark ? "text-sky-400" : "text-blue-600"
                }`}
              >
                Get in Touch
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Contact
            </h2>

            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I’m looking for graduate software engineering roles in Java
              backend, AI-enabled applications or cloud. Message me on WhatsApp
              or email.
            </p>

            {/* Primary Contact CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={portfolioData.personal.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-[0_0_24px_rgba(16,185,129,0.25)] hover:-translate-y-0.5"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email me</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                  isDark
                    ? "bg-[#131C31] border-slate-700 hover:border-slate-500 text-slate-200"
                    : "bg-slate-50 border-slate-300 hover:border-slate-400 text-slate-800"
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <a
                href={portfolioData.personal.resumeFile}
                download={portfolioData.personal.resumeFile}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                  isDark
                    ? "bg-[#0E1525] border-[#1E293B] hover:border-slate-600 text-slate-300 hover:text-white"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950"
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Direct Email Display & Social Links */}
            <div
              className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
                isDark ? "border-[#1E293B]" : "border-slate-200"
              }`}
            >
              <code
                className={`font-mono text-sm px-3.5 py-2 rounded-lg border select-all ${
                  isDark
                    ? "bg-[#070B14] border-[#1E293B] text-sky-300"
                    : "bg-slate-50 border-slate-200 text-blue-700"
                }`}
              >
                {portfolioData.personal.email}
              </code>

              <div className="flex items-center gap-4">
                <a
                  href={portfolioData.personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

function Footer({ isDark }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`py-8 border-t ${
        isDark
          ? "border-[#1E293B]/80 text-slate-400"
          : "border-slate-200/90 text-slate-500"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>{portfolioData.personal.copyright}</p>

        <button
          type="button"
          onClick={scrollToTop}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors cursor-pointer ${
            isDark
              ? "bg-[#0E1525] border-[#1E293B] text-slate-300 hover:text-white hover:border-slate-700"
              : "bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300"
          }`}
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

/**
 * ============================================================================
 * MAIN APPLICATION COMPONENT (ROOT)
 * ============================================================================
 */
export default function App() {
  // Default to Deep Obsidian Dark Mode, persisted in localStorage
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("azam_portfolio_theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // Ignore storage access errors in restricted frames
    }
    return "dark";
  });

  const [activeSection, setActiveSection] = useState("about");
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("azam_portfolio_theme", next);
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  // Track active navigation section via IntersectionObserver
  useEffect(() => {
    const sectionIds = portfolioData.navigation.map((n) => n.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {/* Load Plus Jakarta Sans & JetBrains Mono typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 76px;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }
        code, pre, .font-mono {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        className={`min-h-screen overflow-x-hidden transition-colors duration-300 relative ${
          isDark
            ? "bg-[#070B14] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200"
            : "bg-[#F8FAFC] text-slate-900 selection:bg-blue-600/15 selection:text-blue-900"
        }`}
      >
        {/* Subtle Architectural Dot Grid Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: isDark
              ? "radial-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
              : "radial-gradient(rgba(15, 23, 42, 0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <div className="relative z-10">
          <Navbar
            isDark={isDark}
            toggleTheme={toggleTheme}
            activeSection={activeSection}
          />

          <main id="main-content">
            <HeroSection isDark={isDark} />
            <AboutSection isDark={isDark} />
            <ProjectsSection isDark={isDark} />
            <SkillsSection isDark={isDark} />
            <ExperienceSection isDark={isDark} />
            <TerminalPlayground isDark={isDark} />
            <ContactSection isDark={isDark} />
          </main>

          <Footer isDark={isDark} />
        </div>
      </div>
    </MotionConfig>
  );
}