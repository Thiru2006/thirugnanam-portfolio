export type Experience = {
  company: string;
  role: string;
  period: string;
  mode: string;
  responsibilities: string[];
  technologies: string[];
  impact: string;
  learnings: string;
};

export const experiences: Experience[] = [
  {
    company: "Indian Institute of Computing and Technology (IICT)",
    role: "AI & ML Intern",
    period: "Jun 2026 — Present",
    mode: "Remote",
    responsibilities: [
      "Working through a structured applied-ML curriculum covering data preprocessing, classical ML models, and model evaluation.",
      "Building end-to-end analysis projects, including a full exploratory analysis and classification pipeline on the Titanic dataset.",
      "Producing reproducible notebooks and a final technical report to internship certification standard.",
    ],
    technologies: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Jupyter"],
    impact:
      "Converting research-grade ML habits — clean splits, honest evaluation, documented experiments — into repeatable engineering practice.",
    learnings:
      "How to structure an ML project so results are defensible: strict train/test hygiene, feature reasoning, and clear reporting.",
  },
  {
    company: "Bluestock",
    role: "SDE Intern",
    period: "2025",
    mode: "Remote",
    responsibilities: [
      "Developed features for a fintech-oriented web product across the frontend and backend.",
      "Wrote and reviewed production code, fixed bugs raised in testing, and collaborated through Git-based workflows.",
      "Participated in sprint planning and code reviews with the engineering team.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "REST APIs", "Git"],
    impact:
      "Shipped user-facing functionality in a real product codebase rather than a sandbox, under review from working engineers.",
    learnings:
      "Reading unfamiliar codebases quickly, scoping changes conservatively, and communicating status honestly in a distributed team.",
  },
  {
    company: "Elevate Labs",
    role: "Java Developer Intern",
    period: "2025",
    mode: "Remote",
    responsibilities: [
      "Built Java applications with an emphasis on object-oriented design and clean class structure.",
      "Implemented data-handling and business-logic modules with JDBC-backed persistence.",
      "Documented code and delivered assigned modules against weekly milestones.",
    ],
    technologies: ["Java", "OOP", "JDBC", "MySQL", "Git"],
    impact:
      "Strengthened core Java engineering — the kind of fundamentals that transfer to any backend or embedded-software role.",
    learnings:
      "Designing for maintainability first: small classes, clear interfaces, and separating logic from I/O.",
  },
  {
    company: "Oasis Infobyte",
    role: "Python Developer Intern",
    period: "2024",
    mode: "Remote",
    responsibilities: [
      "Built a series of Python applications spanning automation scripts, GUI tools, and small data utilities.",
      "Practised the full loop of specifying, building, testing, and presenting each project.",
    ],
    technologies: ["Python", "Tkinter", "Requests", "Git"],
    impact:
      "First professional development experience — turned classroom Python into working, demonstrable software.",
    learnings:
      "Finishing matters: the discipline of taking small projects all the way to done, documented, and published.",
  },
];
