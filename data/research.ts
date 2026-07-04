export type ResearchItem = {
  title: string;
  venue?: string;
  status: string;
  area: string;
  abstract: string;
  methods: string[];
};

export const research: ResearchItem[] = [
  {
    title: "Data-Driven Control of Inverted Pendulum Systems Using Reinforcement Learning",
    venue: "2026 IEEE 12th Power India International Conference (PIICON)",
    status: "Paper submitted — not yet published",
    area: "Reinforcement Learning · Control Systems",
    abstract:
      "Benchmarks deep reinforcement-learning policies (DDPG, PPO) against a classical LQR baseline for stabilising inverted pendulum systems, using a custom state-aware reward formulation. All results and figures are generated programmatically for full reproducibility.",
    methods: ["DDPG / PPO", "LQR baseline", "MATLAB / Simulink", "Custom reward design"],
  },
  {
    title: "Smart IMU-Based Parkinson's Symptom Monitoring",
    status: "Ongoing research under faculty supervision",
    area: "Biomedical ML · Wearable Sensing",
    abstract:
      "Continuous, objective monitoring of Parkinsonian tremor from inertial (IMU) sensor streams. The emphasis is methodological soundness: subject-wise splits that eliminate temporal leakage, correct preprocessing order, and model architectures matched to tremor dynamics.",
    methods: ["IMU signal processing", "Deep learning (PyTorch)", "Leakage-free evaluation", "IEEE paper format"],
  },
];
