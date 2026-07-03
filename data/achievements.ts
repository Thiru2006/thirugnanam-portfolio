export type Achievement = {
  year: string;
  title: string;
  detail: string;
  icon: "trophy" | "award" | "star" | "briefcase" | "flask" | "target";
};

export const achievements: Achievement[] = [
  {
    year: "2026",
    title: "Department Rank 5 · CGPA 9.27",
    detail: "Ranked 5th in the VLSI Design & Technology department at VIT Chennai while carrying a research and internship workload.",
    icon: "trophy",
  },
  {
    year: "2026",
    title: "IEEE-track research work",
    detail: "Two research projects under faculty supervision taken to IEEE conference-paper standard — RL-based control and Parkinson's monitoring.",
    icon: "flask",
  },
  {
    year: "2025",
    title: "Research Pitch — 2nd Prize",
    detail: "Awarded second place for a research pitch presentation, defending technical work in front of a judging panel.",
    icon: "award",
  },
  {
    year: "2024 – 2026",
    title: "Four industry internships",
    detail: "Python, Java, SDE, and AI/ML internships across four organisations — consistent professional experience alongside coursework.",
    icon: "briefcase",
  },
  {
    year: "2026",
    title: "Samsung PRISM applicant",
    detail: "Applied to Samsung PRISM, Samsung R&D's industry-academia research program, on the strength of VLSI and ML research work.",
    icon: "target",
  },
  {
    year: "2025 — now",
    title: "Technical Team Lead, IEEE EDS",
    detail: "Leading the technical team of the IEEE Electron Devices Society student branch at VIT Chennai — coding events, workshops, hackathons.",
    icon: "star",
  },
];
