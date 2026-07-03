export type ResearchItem = {
  title: string;
  status: string;
  area: string;
  abstract: string;
  methods: string[];
};

export const research: ResearchItem[] = [
  {
    title: "Smart IMU-Based Parkinson's Symptom Monitoring",
    status: "IEEE conference paper — under faculty supervision",
    area: "Biomedical ML · Wearable Sensing",
    abstract:
      "Continuous, objective monitoring of Parkinsonian tremor using inertial sensors. The work focuses on methodologically sound time-series classification: subject-wise splits that eliminate temporal leakage, correct preprocessing order, and architectures matched to tremor dynamics.",
    methods: ["IMU signal processing", "Deep learning (PyTorch)", "Leakage-free evaluation", "IEEE paper format"],
  },
  {
    title: "PID Controller Optimization using Reinforcement Learning",
    status: "IEEE conference paper — data-driven control of inverted pendulum systems",
    area: "Reinforcement Learning · Control Systems",
    abstract:
      "Benchmarking deep RL policies (DDPG, PPO) against classical LQR control on the inverted pendulum, with a custom state-aware reward formulation. Implemented in MATLAB with fully reproducible, programmatically generated results and figures.",
    methods: ["DDPG / PPO", "LQR baselines", "MATLAB / Simulink", "Custom reward design"],
  },
  {
    title: "Failure-Oriented TCAD Analysis",
    status: "Device-simulation study",
    area: "Semiconductor Devices · TCAD",
    abstract:
      "Physics-level analysis of power semiconductor structures in Synopsys Sentaurus, mapping electric-field distributions and bias regimes associated with device failure, to connect device geometry decisions to reliability outcomes.",
    methods: ["Sentaurus TCAD", "Device physics", "Breakdown analysis", "Technical reporting"],
  },
  {
    title: "AI-Based Test Generation",
    status: "Exploratory work",
    area: "ML for EDA · Verification",
    abstract:
      "Exploring machine-learning approaches to generating and prioritising test stimuli for digital designs — aiming verification effort at the state space most likely to hide bugs, instead of uniform random coverage.",
    methods: ["ML-guided search", "Digital verification", "SystemVerilog", "Coverage analysis"],
  },
];
