import type { ServicePageDefinition } from "./types";

export const roboticsEdgeAi: ServicePageDefinition = {
  slug: "robotics-edge-ai",
  breadcrumbLabel: "Robotics & Edge AI",
  seo: {
    title: "Robotics & Edge AI",
    description:
      "Autonomous physical systems and real-time AI inference at the edge. Built for environments where cloud latency is not an option.",
    keywords: [
      "robotics",
      "edge AI",
      "ROS2",
      "SLAM",
      "autonomous systems",
      "NVIDIA Jetson",
    ],
    url: "/services/robotics-edge-ai",
  },
  schemaServiceType: "Robotics & Edge AI",
  schemaDescription:
    "Autonomous physical systems and real-time AI inference at the edge. Built for environments where cloud latency is not an option.",
  hero: {
    title: "Robotics & Edge AI",
    subtitle: "Mission-Critical Physical Systems",
    description:
      "Autonomous physical systems and real-time AI inference at the edge.\n\nBuilt for environments where cloud latency is not an option.\n\nReliable. Deterministic. Field-proven.",
    iconName: "Cpu",
    features: [
      "Autonomous Ground & Aerial Vehicles",
      "Edge Inference Engines",
      "Computer Vision at the Edge",
      "ROS2 / RTOS Integration",
    ],
  },
  whySection: {
    title: "Why Robotics & Edge AI Demands a Different Standard",
    intro: "",
    items: [
      {
        number: "01",
        title: "Real-Time Constraints",
        description:
          "Cloud AI responds in hundreds of milliseconds. Edge AI must respond in under 10ms. We build inference pipelines optimized for latency-critical physical systems — where a delayed response means a failed mission or a safety incident.",
      },
      {
        number: "02",
        title: "Sensor Fusion & Perception",
        description:
          "Autonomous systems navigate the world through sensor fusion — combining LiDAR, IMU, camera, radar, and GPS into a coherent world model. We build the perception stacks that give machines situational awareness.",
      },
      {
        number: "03",
        title: "Autonomy in Denied Environments",
        description:
          "GPS-denied. Comms-degraded. Extreme temperature. Dust. Vibration. Our systems are designed to operate when the environment gives no guarantees — exactly the conditions where autonomous capability matters most.",
      },
      {
        number: "04",
        title: "Hardware-Software Co-Design",
        description:
          "Edge AI requires tight integration between the model architecture, the inference hardware (NVIDIA Jetson, Coral, custom ASICs), and the real-time OS. We engineer across the full stack, not just the software layer.",
      },
    ],
  },
  capabilities: {
    title: "Robotics & Edge AI Capabilities",
    intro: "Physical systems, edge inference, and field-proven autonomy",
    sectionVariant: "muted",
    cardClassName: "border-2 hover:border-primary transition-colors",
    items: [
      {
        title: "Autonomous Vehicle Systems",
        description: "",
        features: [
          "Ground UGV & Aerial UAV development",
          "Path planning & obstacle avoidance",
          "SLAM (Simultaneous Localization & Mapping)",
          "Multi-vehicle coordination",
          "Fail-safe & emergency stop systems",
          "GPS-denied navigation",
        ],
      },
      {
        title: "Edge Inference Engines",
        description: "",
        features: [
          "Sub-10ms inference pipeline design",
          "Model quantization & pruning",
          "NVIDIA Jetson / Coral / custom ASIC deployment",
          "TensorRT & OpenVINO optimization",
          "Batched inference scheduling",
          "On-device model update pipelines",
        ],
      },
      {
        title: "Computer Vision at the Edge",
        description: "",
        features: [
          "Real-time object detection & tracking",
          "Semantic segmentation for navigation",
          "Depth estimation from mono/stereo cameras",
          "Thermal & multispectral imaging integration",
          "Person & vehicle identification",
          "Scene understanding pipelines",
        ],
      },
      {
        title: "ROS2 & RTOS Integration",
        description: "",
        features: [
          "ROS2 node architecture & lifecycle management",
          "Custom RTOS (FreeRTOS, Zephyr, NuttX)",
          "Hardware abstraction layers",
          "CAN bus & serial protocol integration",
          "Real-time telemetry streaming",
          "Over-the-air update systems",
        ],
      },
      {
        title: "Sensor Fusion",
        description: "",
        features: [
          "LiDAR + IMU + Camera fusion",
          "Extended Kalman Filter & particle filters",
          "Point cloud processing (PCL)",
          "Ground truth calibration pipelines",
          "Multi-modal sensor synchronization",
          "Degraded sensor fallback logic",
        ],
      },
      {
        title: "Physical AI Systems",
        description: "",
        features: [
          "Humanoid & industrial robotic arm control",
          "Force & torque feedback loops",
          "Imitation learning from human demonstration",
          "Reinforcement learning in simulation (IsaacGym / MuJoCo)",
          "Sim-to-real transfer pipelines",
          "Dexterous manipulation systems",
        ],
      },
    ],
  },
  compliance: {
    title: "Compliance & Engineering Standards",
    intro: "We align robotics and edge deployments with applicable safety and regulatory frameworks.",
    items: [
      { title: "DO-178C", description: "Airborne software" },
      { title: "IEC 61508", description: "Functional safety" },
      { title: "ISO 26262", description: "Automotive safety, if applicable" },
      { title: "MIL-STD-810", description: "Environmental engineering" },
      { title: "NDAA compliance", description: "" },
      { title: "Export control", description: "EAR/ITAR awareness" },
    ],
  },
  process: {
    title: "Our Robotics & Edge AI Development Process",
    description: "From safety analysis through field deployment and fleet operations",
    steps: [
      {
        title: "Requirements & Safety Analysis",
        description: "Hazard analysis, safety case, CONOPS",
        duration: "2-3 wk",
      },
      {
        title: "Architecture & Hardware Selection",
        description: "Edge compute selection, sensor stack design",
        duration: "2-3 wk",
      },
      {
        title: "Simulation & Digital Twin",
        description: "IsaacSim / Gazebo, offline validation",
        duration: "3-4 wk",
      },
      {
        title: "Hardware Integration & Testing",
        description: "HIL testing, field trials, safety validation",
        duration: "6-16 wk",
      },
      {
        title: "Deployment & Mission Support",
        description: "OTA updates, telemetry monitoring, fleet management",
        duration: "Ongoing",
      },
    ],
  },
  techStack: {
    title: "Technologies We Use",
    intro: "Stack spanning perception, inference, embedded systems, and fleet operations",
    tags: [
      "ROS2",
      "Python",
      "C++",
      "Rust",
      "CUDA",
      "TensorRT",
      "OpenVINO",
      "NVIDIA Jetson",
      "Coral TPU",
      "FreeRTOS",
      "Zephyr",
      "PCL",
      "OpenCV",
      "PyTorch",
      "IsaacSim",
      "Gazebo",
      "MuJoCo",
      "Kubernetes",
      "Kafka",
      "InfluxDB",
      "Grafana",
      "AWS IoT Greengrass",
      "Azure IoT Edge",
    ],
  },
  classifiedNote: {
    title: "Classified Deployments",
    body:
      "Many of our robotics and edge AI deployments are for defense and intelligence clients and are not publicly disclosed. For capability inquiries, contact our robotics division.",
    ctaLabel: "Contact Robotics Division",
    ctaHref: "/contact",
  },
  faqs: [
    {
      question: "What edge hardware do you target?",
      answer:
        "Primarily NVIDIA Jetson (Orin, AGX, NX), Google Coral, and custom FPGA/ASIC designs for lowest-latency applications. Hardware selection is driven by SWAP-C constraints (Size, Weight, Power, Cost) and required inference throughput.",
    },
    {
      question: "Can you work with existing robotic platforms?",
      answer:
        "Yes. We integrate with commercial-off-the-shelf platforms (Boston Dynamics, Universal Robots, DJI enterprise) as well as fully custom hardware builds.",
    },
    {
      question: "What simulation environments do you use?",
      answer:
        "NVIDIA IsaacSim for physical AI and manipulation, Gazebo/ROS2 for autonomous vehicles, AirSim for aerial systems. We build digital twins that allow continuous validation without field time.",
    },
    {
      question: "How do you handle safety-critical systems?",
      answer:
        "We follow functional safety standards (IEC 61508, DO-178C) including hazard analysis, safety case documentation, and independent safety validation. All autonomous systems include configurable safety envelopes and emergency stop logic.",
    },
    {
      question: "What is your experience with GPS-denied navigation?",
      answer:
        "We have deployed SLAM-based navigation systems in underground, indoor, and RF-contested environments using LiDAR-inertial odometry (LIO-SAM, FAST-LIO2) and visual-inertial odometry (VINS-Fusion, ORB-SLAM3).",
    },
    {
      question: "Do you offer ongoing fleet management?",
      answer:
        "Yes. We build and operate telemetry dashboards, OTA update pipelines, and health monitoring systems for deployed robotic fleets. Mission-critical SLAs available.",
    },
  ],
  contact: {
    serviceName: "Robotics & Edge AI",
    prefillService: "Robotics & Edge AI",
  },
};
