export type Project = {
  slug: string;
  title: string;
  category: "AI/ML" | "Software" | "Embedded" | "VLSI";
  tags: string[];
  overview: string;
  stack: string[];
  github?: string;
  /** YouTube demonstration link — renders a "Watch demo" button when set. */
  demoVideo?: string;
  /**
   * Real screenshots / hardware photos / circuit diagrams.
   * Place files under public/projects/ and list them here.
   * When empty, the card shows a clean icon placeholder (never a filename).
   */
  images?: { src: string; alt: string; caption: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "parkinsons-ai-monitoring",
    title: "Parkinson's AI Monitoring",
    category: "AI/ML",
    tags: ["Research", "AI", "Healthcare"],
    overview:
      "A machine-learning pipeline that detects Parkinsonian tremor from wearable IMU sensor streams. Built to research standard: subject-wise splits that eliminate temporal leakage, correct preprocessing order, and deep-learning architectures matched to tremor dynamics.",
    stack: ["Python", "PyTorch", "Signal Processing", "IMU Sensors", "NumPy"],
    github: "https://github.com/Thiru2006/imu-parkinsons-tremor-detection",
  },
  {
    slug: "inverted-pendulum-rl",
    title: "Data-Driven Control of Inverted Pendulum Systems Using Reinforcement Learning",
    category: "AI/ML",
    tags: ["Reinforcement Learning", "Control Systems"],
    overview:
      "Benchmarks DDPG and PPO policies against a classical LQR controller for stabilising inverted pendulum systems, using a custom state-aware reward function. The accompanying paper has been submitted to the 2026 IEEE 12th Power India International Conference (PIICON).",
    stack: ["MATLAB", "Simulink", "DDPG / PPO", "LQR", "Reinforcement Learning"],
    github: "https://github.com/Thiru2006/data-driven-control-inverted-pendulum-rl",
    note: "Paper submitted to IEEE PIICON 2026",
  },
  {
    slug: "fake-news-detection",
    title: "Fake News Detection Using Machine Learning",
    category: "AI/ML",
    tags: ["NLP", "Classification"],
    overview:
      "End-to-end fake-news classifier built on the ISOT dataset with a modular Python architecture: a disciplined data pipeline, text preprocessing and feature extraction, model comparison, and all reported metrics derived strictly from the held-out test set. Fully documented, including an IEEE-format paper and project report.",
    stack: ["Python", "scikit-learn", "NLP", "pandas", "TF-IDF"],
    github: "https://github.com/Thiru2006/Fake-News-Detection-Using-Machine-Learning",
  },
  {
    slug: "phishing-email-detection",
    title: "Phishing Email Detection",
    category: "AI/ML",
    tags: ["Security", "NLP"],
    overview:
      "Machine-learning system that classifies phishing emails from legitimate mail using engineered text and header features. Developed in structured phases with a modular codebase, rigorous train/test hygiene, and complete documentation from data pipeline to final report.",
    stack: ["Python", "scikit-learn", "NLP", "Feature Engineering"],
    github: "https://github.com/Thiru2006/Phishing-Email-Detection",
  },
  {
    slug: "rs485-stm32-arduino",
    title: "RS-485 Serial Communication between STM32F103C8T6 and Arduino UNO with Checksum Verification",
    category: "Embedded",
    tags: ["Embedded", "Protocols"],
    overview:
      "Reliable board-to-board communication over an RS-485 differential bus between an STM32F103C8T6 and an Arduino UNO, with a checksum layer to detect corrupted frames. Covers transceiver wiring, frame design, and error handling on both microcontrollers.",
    stack: ["STM32", "Arduino", "RS-485", "Embedded C", "UART"],
    github: "https://github.com/Thiru2006/stm32-arduino-rs485-checksum-communication",
    demoVideo: "", // paste your YouTube demonstration URL here — the "Watch demo" button appears automatically
  },
  {
    slug: "smart-task-scheduler",
    title: "Smart Task Scheduler",
    category: "Software",
    tags: ["Java", "Algorithms"],
    overview:
      "A JavaFX desktop application that schedules tasks through a comparator-driven priority queue, ordering work by priority level and deadline instead of a flat to-do list — so the most urgent items always surface first.",
    stack: ["Java", "JavaFX", "Priority Queues", "OOP"],
    github: "https://github.com/Thiru2006/SmartTaskScheduler",
  },
  {
    slug: "automated-attendance-system",
    title: "Automated Student Attendance System",
    category: "Software",
    tags: ["Web", "Automation"],
    overview:
      "A web-based attendance system on Google Apps Script that lets students mark presence from their own devices while the backend verifies authenticity with network-based checks and time-boxed sessions, writing verified records straight into structured sheets.",
    stack: ["Google Apps Script", "JavaScript", "Google Sheets", "HTML/CSS"],
    github: "https://github.com/Thiru2006/automated-attendance-system",
  },
  {
    slug: "job-portal",
    title: "Job Portal",
    category: "Software",
    tags: ["Backend", "Databases"],
    overview:
      "A Java job-portal backend built on JDBC and MySQL, implementing user registration and data operations through a cleanly layered DAO architecture — separating models, data access, and database connection handling.",
    stack: ["Java", "JDBC", "MySQL", "DAO Pattern"],
    github: "https://github.com/Thiru2006/JOB-PORTAL",
  },
  {
    slug: "student-management-crud",
    title: "Student Management CRUD",
    category: "Software",
    tags: ["Backend", "Databases"],
    overview:
      "A student records management application implementing clean create, read, update, and delete operations over a relational database, with input validation and a clear separation between data access and interface layers.",
    stack: ["Java", "MySQL", "JDBC", "OOP"],
    github: "https://github.com/Thiru2006/Student-Management-CRUD",
  },
  {
    slug: "tinytapeout-tt10",
    title: "TinyTapeout TT10 Shift Register Challenge",
    category: "VLSI",
    tags: ["ASIC", "RTL"],
    overview:
      "A shift-register design taken from RTL all the way to GDS through the TinyTapeout TT10 shuttle — including Verilog implementation, testbench verification, and a CI/CD pipeline on GitHub Actions that runs the full check-and-harden flow on every commit.",
    stack: ["Verilog", "TinyTapeout", "OpenLane", "GitHub Actions", "GDS"],
    github: "https://github.com/Thiru2006/tinytapeouttt10shiftregisterchallenge",
  },
  {
    slug: "railway-clock",
    title: "24-Hour Railway Clock",
    category: "Embedded",
    tags: ["Digital Design", "Hardware Build"],
    overview:
      "A 24-hour digital clock in the style of railway station displays, designed at the circuit level and built as a working breadboard prototype — covering counter design, display driving, and timing, from schematic to functioning hardware.",
    stack: ["Digital Logic", "Counters", "7-Segment Displays", "Breadboarding"],
    images: [
      // Drop your real photos into public/projects/ and uncomment:
      // { src: "/projects/railway-clock-circuit.png", alt: "24-hour railway clock circuit diagram", caption: "Circuit diagram" },
      // { src: "/projects/railway-clock-breadboard.jpg", alt: "24-hour railway clock breadboard prototype", caption: "Breadboard prototype" },
    ],
  },
  {
    slug: "automated-clothes-hanger",
    title: "Automated Clothes Hanger System with Rain Detection and Shade Mechanism",
    category: "Embedded",
    tags: ["Sensors", "Actuators"],
    overview:
      "A first-year engineering hardware project: a clothes-hanger system that detects rain with a sensor module and automatically retracts the line under a shade mechanism, combining sensing, actuation, and simple control logic into a complete working build.",
    stack: ["Rain Sensor", "Motor Control", "Microcontroller", "Mechanism Design"],
    note: "First-year engineering hardware project",
  },
];

export const projectCategories = ["All", "AI/ML", "Software", "Embedded", "VLSI"] as const;
