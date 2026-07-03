export type SkillGroup = { group: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    group: "Programming",
    items: ["Python", "Java", "C / C++", "JavaScript", "TypeScript", "SQL", "MATLAB"],
  },
  {
    group: "AI / ML",
    items: ["PyTorch", "scikit-learn", "Reinforcement Learning", "Stable-Baselines3", "Signal Processing", "pandas / NumPy"],
  },
  {
    group: "Hardware & VLSI",
    items: ["Verilog HDL", "SystemVerilog", "Xilinx Vivado", "Intel Quartus Prime", "ModelSim / QuestaSim", "Synopsys Sentaurus TCAD", "LTspice", "RTL-to-GDS (TinyTapeout)"],
  },
  {
    group: "Web & Backend",
    items: ["React", "Next.js", "Node.js / Express", "NestJS (GraphQL)", "Flask", "REST APIs"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    group: "Tools & DevOps",
    items: ["Git / GitHub", "Docker", "Kubernetes", "GitHub Actions (CI/CD)", "Firebase", "Linux"],
  },
  {
    group: "Soft Skills",
    items: ["Technical leadership", "Research writing", "Public speaking", "Mentoring", "Event organisation"],
  },
];
