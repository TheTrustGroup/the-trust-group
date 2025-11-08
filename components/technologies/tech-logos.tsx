"use client";

import { useId } from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "" }: TechLogoProps) {
  const uniqueId = useId();
  
  // Map technology names to their logo components
  const logoMap: Record<string, React.ComponentType<{ id: string; className: string }>> = {
    "React": ReactLogo,
    "Next.js": NextJSLogo,
    "Python": PythonLogo,
    "TensorFlow": TensorFlowLogo,
    "AWS": AWSLogo,
    "Docker": DockerLogo,
    "Kubernetes": KubernetesLogo,
    "TypeScript": TypeScriptLogo,
    "Node.js": NodeJSLogo,
    "PostgreSQL": PostgreSQLLogo,
    "MongoDB": MongoLogo,
    "Redis": RedisLogo,
    "Vue.js": VueLogo,
    "Angular": AngularLogo,
    "Flutter": FlutterLogo,
    "React Native": ReactNativeLogo,
    "Azure": AzureLogo,
    "GCP": GCPLogo,
    "Git": GitLogo,
    "GraphQL": GraphQLLogo,
    "Tailwind CSS": TailwindLogo,
    "Django": DjangoLogo,
    "FastAPI": FastAPILogo,
    "Express.js": ExpressLogo,
    "Swift": SwiftLogo,
    "Kotlin": KotlinLogo,
  };

  const LogoComponent = logoMap[name] || DefaultTechLogo;
  return <LogoComponent id={uniqueId} className={className} />;
}

// React Logo
function ReactLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="30" fill="#61DAFB" opacity="0.8" />
      <ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#61DAFB" strokeWidth="2" opacity="0.6" />
      <ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#61DAFB" strokeWidth="2" opacity="0.6" transform="rotate(60 100 100)" />
      <ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#61DAFB" strokeWidth="2" opacity="0.6" transform="rotate(-60 100 100)" />
    </svg>
  );
}

// Next.js Logo
function NextJSLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="80" fill="black" />
      <path d="M 100 50 L 150 100 L 100 150 L 80 130 L 120 100 L 80 70 Z" fill="white" />
      <circle cx="100" cy="100" r="5" fill="white" />
    </svg>
  );
}

// Python Logo
function PythonLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 80 50 Q 50 50, 50 80 L 50 100 Q 50 130, 80 130 L 100 130" stroke="#3776AB" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M 120 50 Q 150 50, 150 80 L 150 100 Q 150 130, 120 130 L 100 130" stroke="#FFD43B" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="70" cy="80" r="8" fill="#3776AB" />
      <circle cx="130" cy="120" r="8" fill="#FFD43B" />
    </svg>
  );
}

// TensorFlow Logo
function TensorFlowLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 50 L 100 80 L 150 50 L 100 20 Z" fill="#FF6F00" />
      <path d="M 50 100 L 100 130 L 150 100 L 100 70 Z" fill="#FF6F00" />
      <path d="M 50 150 L 100 180 L 150 150 L 100 120 Z" fill="#FF6F00" />
      <line x1="100" y1="20" x2="100" y2="70" stroke="#FF6F00" strokeWidth="3" />
      <line x1="100" y1="130" x2="100" y2="120" stroke="#FF6F00" strokeWidth="3" />
    </svg>
  );
}

// AWS Logo
function AWSLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 100 L 80 60 L 110 100 L 80 140 Z" fill="#FF9900" />
      <path d="M 120 100 L 150 60 L 180 100 L 150 140 Z" fill="#FF9900" />
      <path d="M 85 100 L 100 75 L 115 100 L 100 125 Z" fill="#232F3E" />
    </svg>
  );
}

// Docker Logo
function DockerLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 L 120 50 L 120 70 L 100 70 Z" fill="#0DB7ED" />
      <path d="M 130 50 L 150 50 L 150 70 L 130 70 Z" fill="#0DB7ED" />
      <path d="M 70 80 L 90 80 L 90 100 L 70 100 Z" fill="#0DB7ED" />
      <path d="M 100 80 L 120 80 L 120 100 L 100 100 Z" fill="#0DB7ED" />
      <path d="M 130 80 L 150 80 L 150 100 L 130 100 Z" fill="#0DB7ED" />
      <path d="M 100 110 L 120 110 L 120 130 L 100 130 Z" fill="#0DB7ED" />
      <path d="M 130 110 L 150 110 L 150 130 L 130 130 Z" fill="#0DB7ED" />
      <path d="M 70 140 L 90 140 L 90 160 L 70 160 Z" fill="#0DB7ED" />
      <path d="M 100 140 L 120 140 L 120 160 L 100 160 Z" fill="#0DB7ED" />
    </svg>
  );
}

// Kubernetes Logo
function KubernetesLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 L 130 65 L 130 95 L 100 110 L 70 95 L 70 65 Z" fill="#326CE5" />
      <path d="M 100 90 L 130 105 L 130 135 L 100 150 L 70 135 L 70 105 Z" fill="#326CE5" />
      <circle cx="100" cy="100" r="15" fill="white" />
    </svg>
  );
}

// TypeScript Logo
function TypeScriptLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="50" y="50" width="100" height="100" rx="8" fill="#3178C6" />
      <path d="M 80 100 L 100 85 L 100 115 Z" fill="white" />
      <path d="M 120 100 L 120 85 L 140 100 L 120 115 Z" fill="white" />
    </svg>
  );
}

// Node.js Logo
function NodeJSLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 Q 130 50, 150 70 Q 170 90, 170 120 Q 170 150, 150 170 Q 130 190, 100 190" stroke="#339933" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M 100 50 Q 70 50, 50 70 Q 30 90, 30 120 Q 30 150, 50 170 Q 70 190, 100 190" stroke="#339933" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />
      <circle cx="100" cy="100" r="25" fill="#339933" />
    </svg>
  );
}

// PostgreSQL Logo
function PostgreSQLLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 L 150 80 L 150 120 L 100 150 L 50 120 L 50 80 Z" fill="#336791" />
      <circle cx="100" cy="100" r="20" fill="white" />
      <path d="M 90 95 L 110 95 L 110 105 L 90 105 Z" fill="#336791" />
    </svg>
  );
}

// MongoDB Logo
function MongoLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 Q 120 60, 130 80 Q 140 100, 135 120 Q 130 140, 120 150 Q 110 160, 100 165 Q 90 160, 80 150 Q 70 140, 65 120 Q 60 100, 70 80 Q 80 60, 100 50 Z" fill="#47A248" />
      <path d="M 100 60 Q 115 68, 122 85 Q 128 100, 125 115 Q 122 130, 115 140 Q 108 150, 100 155" fill="#589636" />
    </svg>
  );
}

// Redis Logo
function RedisLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="60" fill="#DC382D" />
      <path d="M 70 100 L 100 80 L 130 100 L 100 120 Z" fill="white" />
      <circle cx="100" cy="100" r="20" fill="#DC382D" />
    </svg>
  );
}

// Vue Logo
function VueLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 L 150 150 L 100 130 L 50 150 Z" fill="#4FC08D" />
      <path d="M 100 50 L 130 100 L 100 130 L 70 100 Z" fill="#35495E" />
    </svg>
  );
}

// Angular Logo
function AngularLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 L 150 150 L 100 130 L 50 150 Z" fill="#DD0031" />
      <path d="M 100 70 L 120 120 L 100 110 L 80 120 Z" fill="white" />
    </svg>
  );
}

// Flutter Logo
function FlutterLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 100 L 100 50 L 150 100 L 100 150 Z" fill="#02569B" />
      <path d="M 70 100 L 100 70 L 130 100 L 100 130 Z" fill="#027DFD" />
    </svg>
  );
}

// React Native Logo
function ReactNativeLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="30" fill="#61DAFB" />
      <rect x="70" y="85" width="60" height="30" rx="4" fill="#61DAFB" opacity="0.3" />
    </svg>
  );
}

// Azure Logo
function AzureLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 50 L 150 50 L 150 150 L 50 150 Z" fill="#0078D4" />
      <path d="M 70 70 L 130 70 L 130 130 L 70 130 Z" fill="white" />
    </svg>
  );
}

// GCP Logo
function GCPLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 L 130 80 L 100 110 L 70 80 Z" fill="#4285F4" />
      <path d="M 130 80 L 150 100 L 130 120 L 110 100 Z" fill="#34A853" />
      <path d="M 100 110 L 130 120 L 100 150 L 70 140 Z" fill="#FBBC04" />
      <path d="M 70 80 L 50 100 L 70 140 L 90 120 Z" fill="#EA4335" />
    </svg>
  );
}

// Git Logo
function GitLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 100 50 L 150 100 L 100 150 L 50 100 Z" fill="#F05032" />
      <circle cx="100" cy="100" r="20" fill="white" />
    </svg>
  );
}

// GraphQL Logo
function GraphQLLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="100" cy="50" r="15" fill="#E10098" />
      <circle cx="150" cy="100" r="15" fill="#E10098" />
      <circle cx="100" cy="150" r="15" fill="#E10098" />
      <circle cx="50" cy="100" r="15" fill="#E10098" />
      <line x1="100" y1="50" x2="150" y2="100" stroke="#E10098" strokeWidth="3" />
      <line x1="150" y1="100" x2="100" y2="150" stroke="#E10098" strokeWidth="3" />
      <line x1="100" y1="150" x2="50" y2="100" stroke="#E10098" strokeWidth="3" />
      <line x1="50" y1="100" x2="100" y2="50" stroke="#E10098" strokeWidth="3" />
    </svg>
  );
}

// Tailwind CSS Logo
function TailwindLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 100 Q 75 80, 100 90 Q 125 100, 150 80 Q 150 100, 150 120 Q 125 140, 100 130 Q 75 120, 50 140 Q 50 120, 50 100 Z" fill="#06B6D4" />
    </svg>
  );
}

// Django Logo
function DjangoLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="50" y="50" width="100" height="100" rx="8" fill="#092E20" />
      <path d="M 70 80 L 130 80 L 130 120 L 70 120 Z" fill="#44B78B" />
    </svg>
  );
}

// FastAPI Logo
function FastAPILogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 100 L 100 50 L 150 100 L 100 150 Z" fill="#009688" />
      <circle cx="100" cy="100" r="20" fill="white" />
    </svg>
  );
}

// Express Logo
function ExpressLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="50" y="80" width="100" height="40" rx="4" fill="black" />
      <path d="M 70 100 L 90 85 L 110 100 L 130 85" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Swift Logo
function SwiftLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 100 Q 75 75, 100 100 Q 125 125, 150 100" stroke="#FA7343" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="100" r="15" fill="#FA7343" />
    </svg>
  );
}

// Kotlin Logo
function KotlinLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M 50 50 L 100 100 L 50 150 L 100 100 L 150 50 Z" fill="#7F52FF" />
      <path d="M 100 100 L 150 150 L 100 100 L 150 50 Z" fill="#0095D5" />
    </svg>
  );
}

// Default Tech Logo (fallback)
function DefaultTechLogo({ id, className }: { id: string; className: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="50" y="50" width="100" height="100" rx="12" fill="url(#defaultGradient)" />
      <defs>
        <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#00B8E6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

