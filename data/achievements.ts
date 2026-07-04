export type Achievement = {
  year: string;
  title: string;
  detail: string;
  icon: "trophy" | "award" | "star" | "briefcase" | "flask";
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
    title: "IEEE conference paper submitted",
    detail: "First-author research on data-driven control of inverted pendulum systems using reinforcement learning, submitted to the 2026 IEEE 12th Power India International Conference (PIICON).",
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
    year: "2025",
    title: "ASIC tape-out via TinyTapeout",
    detail: "Designed and verified a shift register in Verilog HDL; final GDS generated through the automated TinyTapeout TT10 flow with GitHub Actions CI/CD.",
    icon: "star",
  },
  {
    year: "2025 — now",
    title: "Technical Team Lead, IEEE EDS",
    detail: "Leading the technical team of the IEEE Electron Devices Society student branch at VIT Chennai — coding events, workshops, hackathons.",
    icon: "star",
  },
];
