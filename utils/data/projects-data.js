
export const projectsData = [
  {
    id: 1,
    name: 'NeuroSphere V2 – AI-Assisted Network Threat Analysis & SOC Platform',
    description: 'Developed an AI-assisted network threat analysis and Security Operations Center platform using Random Forest classification and Isolation Forest anomaly detection with 67 network-flow features from CICIDS2017. Integrated a React dashboard, Python FastAPI inference engine, optional Java 21 Spring Boot platform API, and MySQL. Supports offline PCAP/PCAPNG analysis, authorized live network capture, prediction history, reviewed alerts, case management, incident tracking, and audit records. Experimental evaluation achieved a 99.61% Random Forest F1-score on a filtered random split and 44.62% on a Friday capture-day holdout, highlighting model generalization challenges.',
    tools: ['React', 'Python', 'FastAPI', 'Java 21', 'Spring Boot', 'MySQL', 'Random Forest', 'Isolation Forest', 'CICIDS2017', 'Scapy'],
    role: 'Backend & AI Integration',
    code: 'https://github.com/Tauheedkhan28',
    demo: '',
  },
  {
    id: 2,
    name: 'Brand Protection – AI-Assisted Brand & Phishing Detection',
    description: 'Developed an AI-assisted brand protection platform to analyze website URLs, social media profiles, and product links for potentially fraudulent activity. Integrated a Java Spring Boot backend with a Python-based AI analysis service for machine-learning-assisted URL analysis and pattern-based risk assessment. Generates risk scores from 0–100, SAFE, SUSPICIOUS, and FAKE verdicts, human-readable explanations, secure authentication, scan history, and dashboard analytics.',
    tools: ['Java', 'Spring Boot', 'Python', 'Machine Learning', 'REST APIs', 'H2 Database', 'JavaScript'],
    role: 'Full Stack Developer',
    code: 'https://github.com/Tauheedkhan28/brand-protection',
    demo: '',
  },
  {
    id: 3,
    name: 'Employee Management System',
    description: 'Developed REST APIs to perform CRUD operations for employee records using Spring Boot. Integrated Spring Data JPA, Hibernate, and MySQL for database persistence and entity management. Implemented input validation and centralized exception handling to improve API reliability.',
    tools: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
    role: 'Backend Developer',
    code: 'https://github.com/Tauheedkhan28',
    demo: '',
  },
  {
    id: 4,
    name: 'CareMate – AI-Powered Healthcare Assistant',
    description: 'Developed an OCR-based healthcare application to extract prescription text and convert it into structured digital records. Designed a normalized MySQL database for structured storage and retrieval of prescription data.',
    tools: ['OCR', 'Python', 'Backend Development', 'MySQL'],
    role: 'Developer',
    code: 'https://github.com/Tauheedkhan28',
    demo: '',
  },
  {
    id: 5,
    name: 'IoT Anti-Rat Motion Detection System',
    description: 'Built an ESP32-based motion detection system using a PIR sensor, buzzer, and Telegram Bot API to detect movement and send alerts.',
    tools: ['ESP32', 'PIR Sensor', 'Telegram Bot API'],
    role: 'IoT Developer',
    code: 'https://github.com/Tauheedkhan28',
    demo: '',
  }
];
