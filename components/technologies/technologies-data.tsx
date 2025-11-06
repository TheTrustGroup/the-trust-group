import { 
  Brain,
  Code,
  Smartphone,
  Cloud,
  Database,
  Layers
} from "lucide-react";
import type { ProficiencyLevel } from "./technology-card";

export interface Technology {
  name: string;
  category: string;
  proficiency: ProficiencyLevel;
  icon?: string;
  description?: string;
}

export const technologyCategories = [
  {
    id: "all",
    name: "All Technologies",
    icon: Layers,
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: Brain,
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: Code,
  },
  {
    id: "backend",
    name: "Backend",
    icon: Layers,
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: Cloud,
  },
  {
    id: "databases",
    name: "Databases",
    icon: Database,
  },
];

export const technologies: Technology[] = [
  // AI & Machine Learning
  { name: "TensorFlow", category: "ai-ml", proficiency: "expert", description: "Deep learning framework" },
  { name: "PyTorch", category: "ai-ml", proficiency: "expert", description: "ML research framework" },
  { name: "OpenAI API", category: "ai-ml", proficiency: "advanced", description: "GPT models integration" },
  { name: "scikit-learn", category: "ai-ml", proficiency: "advanced", description: "Machine learning library" },
  { name: "Keras", category: "ai-ml", proficiency: "advanced", description: "Neural network API" },
  { name: "Hugging Face", category: "ai-ml", proficiency: "proficient", description: "Transformers library" },
  { name: "LangChain", category: "ai-ml", proficiency: "advanced", description: "LLM application framework" },
  { name: "Pandas", category: "ai-ml", proficiency: "expert", description: "Data analysis library" },
  { name: "NumPy", category: "ai-ml", proficiency: "expert", description: "Scientific computing" },

  // Frontend
  { name: "React", category: "frontend", proficiency: "expert", description: "UI library" },
  { name: "Next.js", category: "frontend", proficiency: "expert", description: "React framework" },
  { name: "Vue.js", category: "frontend", proficiency: "advanced", description: "Progressive framework" },
  { name: "Angular", category: "frontend", proficiency: "advanced", description: "TypeScript framework" },
  { name: "TypeScript", category: "frontend", proficiency: "expert", description: "Typed JavaScript" },
  { name: "Tailwind CSS", category: "frontend", proficiency: "expert", description: "Utility-first CSS" },
  { name: "GraphQL", category: "frontend", proficiency: "advanced", description: "Query language" },
  { name: "Webpack", category: "frontend", proficiency: "advanced", description: "Module bundler" },
  { name: "Vite", category: "frontend", proficiency: "advanced", description: "Build tool" },

  // Backend
  { name: "Node.js", category: "backend", proficiency: "expert", description: "JavaScript runtime" },
  { name: "Python", category: "backend", proficiency: "expert", description: "Programming language" },
  { name: "Java", category: "backend", proficiency: "advanced", description: "Enterprise language" },
  { name: ".NET", category: "backend", proficiency: "advanced", description: "Microsoft framework" },
  { name: "Express.js", category: "backend", proficiency: "expert", description: "Node.js framework" },
  { name: "Django", category: "backend", proficiency: "advanced", description: "Python framework" },
  { name: "FastAPI", category: "backend", proficiency: "advanced", description: "Python API framework" },
  { name: "Spring Boot", category: "backend", proficiency: "proficient", description: "Java framework" },
  { name: "REST APIs", category: "backend", proficiency: "expert", description: "API architecture" },

  // Mobile
  { name: "React Native", category: "mobile", proficiency: "expert", description: "Cross-platform mobile" },
  { name: "Flutter", category: "mobile", proficiency: "advanced", description: "Dart framework" },
  { name: "Swift", category: "mobile", proficiency: "advanced", description: "iOS development" },
  { name: "Kotlin", category: "mobile", proficiency: "advanced", description: "Android development" },
  { name: "SwiftUI", category: "mobile", proficiency: "proficient", description: "iOS UI framework" },
  { name: "Jetpack Compose", category: "mobile", proficiency: "proficient", description: "Android UI toolkit" },
  { name: "Expo", category: "mobile", proficiency: "advanced", description: "React Native platform" },
  { name: "Ionic", category: "mobile", proficiency: "proficient", description: "Hybrid mobile framework" },

  // Cloud & DevOps
  { name: "AWS", category: "cloud-devops", proficiency: "expert", description: "Amazon Web Services" },
  { name: "Azure", category: "cloud-devops", proficiency: "advanced", description: "Microsoft Cloud" },
  { name: "GCP", category: "cloud-devops", proficiency: "advanced", description: "Google Cloud Platform" },
  { name: "Docker", category: "cloud-devops", proficiency: "expert", description: "Containerization" },
  { name: "Kubernetes", category: "cloud-devops", proficiency: "advanced", description: "Container orchestration" },
  { name: "Terraform", category: "cloud-devops", proficiency: "advanced", description: "Infrastructure as Code" },
  { name: "CI/CD", category: "cloud-devops", proficiency: "expert", description: "Continuous integration" },
  { name: "Git", category: "cloud-devops", proficiency: "expert", description: "Version control" },
  { name: "Jenkins", category: "cloud-devops", proficiency: "proficient", description: "Automation server" },
  { name: "GitHub Actions", category: "cloud-devops", proficiency: "advanced", description: "CI/CD platform" },

  // Databases
  { name: "PostgreSQL", category: "databases", proficiency: "expert", description: "Relational database" },
  { name: "MongoDB", category: "databases", proficiency: "expert", description: "NoSQL database" },
  { name: "Redis", category: "databases", proficiency: "advanced", description: "In-memory cache" },
  { name: "MySQL", category: "databases", proficiency: "advanced", description: "Relational database" },
  { name: "Elasticsearch", category: "databases", proficiency: "advanced", description: "Search engine" },
  { name: "DynamoDB", category: "databases", proficiency: "proficient", description: "NoSQL database" },
  { name: "Firebase", category: "databases", proficiency: "advanced", description: "Backend platform" },
  { name: "Supabase", category: "databases", proficiency: "proficient", description: "Open source Firebase" },
];

