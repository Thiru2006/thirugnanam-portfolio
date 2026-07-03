export type Project = {
  slug: string;
  title: string;
  category: "Software" | "AI/ML" | "Hardware";
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  stack: string[];
  challenges: string;
  learnings: string;
  github?: string;
  demo?: string;
  featured: boolean;
};

const gh = "https://github.com/Thiru2006";

export const projects: Project[] = [
  {
    slug: "attendance-system",
    title: "Automated Student Attendance System",
    category: "Software",
    summary: "IP-verified, script-driven attendance capture that removes manual roll calls.",
    overview:
      "A web-based attendance system built on Google Apps Script that lets students mark presence from their own devices while the backend verifies authenticity.",
    problem:
      "Manual attendance wastes class time and is easy to spoof; naive digital forms are even easier to spoof remotely.",
    solution:
      "A Google Apps Script backend that validates submissions using network/IP-based checks and session windows, writing verified records straight into structured sheets for faculty.",
    stack: ["Google Apps Script", "JavaScript", "Google Sheets", "HTML/CSS"],
    challenges:
      "Designing spoof-resistance within the constraints of a script platform — rate limits, identity checks, and time-boxed sessions without a dedicated server.",
    learnings:
      "Threat-modelling a small system end to end, and shipping something classmates and faculty actually used.",
    github: gh,
    featured: true,
  },
  {
    slug: "smart-task-scheduler",
    title: "Smart Task Scheduler",
    category: "Software",
    summary: "Priority-aware task planning with deadline pressure built into the ordering logic.",
    overview:
      "A scheduling application that orders work by combining priority, deadlines, and estimated effort instead of a flat to-do list.",
    problem:
      "Simple to-do lists treat every task equally; real workloads have deadlines, dependencies, and varying effort.",
    solution:
      "A scheduler that scores tasks using priority and time-to-deadline, surfaces the day's critical path first, and reflows automatically as tasks complete or slip.",
    stack: ["Java", "OOP", "Data Structures", "MySQL"],
    challenges:
      "Getting the scoring heuristics to feel right — aggressive enough to surface urgent work, stable enough not to reshuffle constantly.",
    learnings:
      "Priority queues and comparator design in practice, and how much UX lives inside algorithm tuning.",
    github: gh,
    featured: true,
  },
  {
    slug: "job-portal",
    title: "Job Portal",
    category: "Software",
    summary: "Full-stack hiring platform with role-based flows for candidates and recruiters.",
    overview:
      "A production-style job portal covering the full hiring loop: postings, applications, filtering, and status tracking.",
    problem:
      "Hiring workflows need two very different experiences — candidates searching and applying, recruiters posting and screening — in one coherent system.",
    solution:
      "A role-based full-stack application with authenticated candidate and recruiter dashboards, searchable listings, application state tracking, and a relational schema designed around the hiring funnel.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT Auth"],
    challenges:
      "Modelling application state transitions cleanly and enforcing authorization boundaries between the two user roles.",
    learnings:
      "Schema design for multi-role products, and why authorization logic belongs in the backend, not the UI.",
    github: gh,
    featured: true,
  },
  {
    slug: "parkinsons-monitoring",
    title: "Parkinson's AI Monitoring",
    category: "AI/ML",
    summary: "IMU wearable-sensor pipeline for detecting Parkinsonian tremor patterns.",
    overview:
      "A research-grade machine-learning pipeline that classifies tremor activity from inertial (IMU) sensor streams, developed to IEEE paper standard under faculty supervision.",
    problem:
      "Parkinson's symptoms fluctuate between clinic visits; clinicians need objective, continuous measurement from wearable sensors.",
    solution:
      "A signal-processing and deep-learning pipeline over accelerometer/gyroscope windows — with leakage-free subject-wise splits, correct scaler fitting, and architecture choices matched to the temporal structure of tremor data.",
    stack: ["Python", "PyTorch", "Signal Processing", "IMU Sensors", "NumPy"],
    challenges:
      "Eliminating temporal data leakage and fixing subtle windowing bugs that silently inflate accuracy — the difference between a demo and defensible research.",
    learnings:
      "Rigorous evaluation methodology for time-series ML, and how to audit a pipeline the way a reviewer would.",
    github: gh,
    featured: true,
  },
  {
    slug: "tcad-power-semiconductor",
    title: "TCAD Power Semiconductor Analysis",
    category: "Hardware",
    summary: "Failure-oriented device simulation of power semiconductors in Synopsys Sentaurus.",
    overview:
      "Device-level TCAD study of power semiconductor structures, characterising electrical behaviour and failure-relevant operating regions.",
    problem:
      "Power devices fail at the physics level — breakdown, thermal stress, field crowding — long before failures are visible at circuit level.",
    solution:
      "Structured Sentaurus TCAD simulations sweeping device geometry and bias conditions to map I-V behaviour, field distributions, and failure-prone regimes, documented as a formal analysis report.",
    stack: ["Synopsys Sentaurus TCAD", "Device Physics", "SPICE", "LTspice"],
    challenges:
      "Getting simulations to converge in extreme operating regions while keeping meshes fine enough to trust the field solutions.",
    learnings:
      "How real device physics constrains everything above it — and patience with numerical solvers.",
    github: gh,
    featured: true,
  },
  {
    slug: "fpga-object-detection",
    title: "FPGA Object Detection",
    category: "Hardware",
    summary: "Hardware-accelerated vision pipeline exploring detection on FPGA fabric.",
    overview:
      "An FPGA-based object-detection project mapping vision processing stages onto programmable logic for low-latency inference.",
    problem:
      "CPU/GPU inference is power-hungry and often too slow at the edge; FPGAs offer deterministic, parallel, low-power vision processing.",
    solution:
      "A pipeline that moves image-processing and detection stages into HDL on FPGA fabric, using streaming architectures and fixed-point arithmetic to fit within resource budgets.",
    stack: ["Verilog HDL", "Xilinx Vivado", "FPGA", "Fixed-Point DSP", "Python"],
    challenges:
      "Trading detection quality against LUT/DSP/BRAM budgets, and debugging with waveforms instead of print statements.",
    learnings:
      "Thinking in dataflow and clock cycles — the mindset shift from writing software to designing hardware.",
    github: gh,
    featured: true,
  },
];

export const projectCategories = ["All", "Software", "AI/ML", "Hardware"] as const;
