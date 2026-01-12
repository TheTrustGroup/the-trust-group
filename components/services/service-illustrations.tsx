"use client";

import { useId } from "react";

interface ServiceIllustrationProps {
  serviceId: string;
  className?: string;
}

export function ServiceIllustration({ serviceId, className = "" }: ServiceIllustrationProps) {
  const uniqueId = useId();
  
  switch (serviceId) {
    case "ai-solutions":
      return <AIBrainIllustration id={uniqueId} className={className} />;
    case "custom-software":
      return <CodeEditorIllustration id={uniqueId} className={className} />;
    case "mobile-apps":
      return <SmartphoneIllustration id={uniqueId} className={className} />;
    case "web-development":
      return <BrowserIllustration id={uniqueId} className={className} />;
    case "cloud-solutions":
      return <CloudServerIllustration id={uniqueId} className={className} />;
    case "consulting":
      return <StrategyIllustration id={uniqueId} className={className} />;
    case "defense-technology":
      return <DefenseShieldIllustration id={uniqueId} className={className} />;
    default:
      return <CodeEditorIllustration id={uniqueId} className={className} />;
  }
}

// AI Solutions - Brain with Neural Connections
function AIBrainIllustration({ id, className }: { id: string; className: string }) {
  const gradientId = `aiGradient-${id}`;
  const filterId = `aiGlow-${id}`;
  
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="50%" stopColor="#00B8E6" stopOpacity="1" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="1" />
        </linearGradient>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Brain outline */}
      <path
        d="M 100 40 Q 120 50, 130 70 Q 140 90, 135 110 Q 130 130, 120 145 Q 110 160, 100 165 Q 90 160, 80 145 Q 70 130, 65 110 Q 60 90, 70 70 Q 80 50, 100 40 Z"
        fill={`url(#${gradientId})`}
        opacity="0.2"
      />
      <path
        d="M 100 50 Q 115 58, 122 75 Q 128 92, 125 108 Q 122 124, 115 137 Q 108 150, 100 155 Q 92 150, 85 137 Q 78 124, 75 108 Q 72 92, 78 75 Q 85 58, 100 50 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        opacity="0.6"
      />
      
      {/* Neural network nodes */}
      <g filter={`url(#${filterId})`}>
        <circle cx="100" cy="70" r="4" fill="#0066FF" />
        <circle cx="85" cy="85" r="3" fill="#00B8E6" />
        <circle cx="115" cy="85" r="3" fill="#00B8E6" />
        <circle cx="100" cy="100" r="5" fill="#0066FF" />
        <circle cx="90" cy="110" r="3" fill="#00B8E6" />
        <circle cx="110" cy="110" r="3" fill="#00B8E6" />
        <circle cx="100" cy="125" r="4" fill="#0066FF" />
        <circle cx="88" cy="135" r="3" fill="#00B8E6" />
        <circle cx="112" cy="135" r="3" fill="#00B8E6" />
      </g>
      
      {/* Connections */}
      <g stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.4">
        <line x1="100" y1="70" x2="85" y2="85" />
        <line x1="100" y1="70" x2="115" y2="85" />
        <line x1="100" y1="70" x2="100" y2="100" />
        <line x1="85" y1="85" x2="100" y2="100" />
        <line x1="115" y1="85" x2="100" y2="100" />
        <line x1="100" y1="100" x2="90" y2="110" />
        <line x1="100" y1="100" x2="110" y2="110" />
        <line x1="100" y1="100" x2="100" y2="125" />
        <line x1="90" y1="110" x2="100" y2="125" />
        <line x1="110" y1="110" x2="100" y2="125" />
        <line x1="100" y1="125" x2="88" y2="135" />
        <line x1="100" y1="125" x2="112" y2="135" />
      </g>
    </svg>
  );
}

// Custom Software - Code Editor
function CodeEditorIllustration({ id, className }: { id: string; className: string }) {
  const gradientId = `codeGradient-${id}`;
  
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00B8E6" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Editor window */}
      <rect x="30" y="40" width="140" height="120" rx="4" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.3" />
      <rect x="30" y="40" width="140" height="25" rx="4" fill={`url(#${gradientId})`} opacity="0.1" />
      
      {/* Window controls */}
      <circle cx="45" cy="52" r="4" fill="#FF5F57" opacity="0.6" />
      <circle cx="60" cy="52" r="4" fill="#FFBD2E" opacity="0.6" />
      <circle cx="75" cy="52" r="4" fill="#28CA42" opacity="0.6" />
      
      {/* Code lines */}
      <g fill={`url(#${gradientId})`} opacity="0.7">
        <rect x="40" y="80" width="60" height="3" rx="1" />
        <rect x="40" y="90" width="80" height="3" rx="1" />
        <rect x="40" y="100" width="50" height="3" rx="1" />
        <rect x="40" y="110" width="70" height="3" rx="1" />
        <rect x="40" y="120" width="65" height="3" rx="1" />
        <rect x="40" y="130" width="55" height="3" rx="1" />
      </g>
      
      {/* Brackets */}
      <path
        d="M 110 85 L 105 90 L 105 100 L 110 105 M 130 85 L 135 90 L 135 100 L 130 105"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

// Mobile Apps - Smartphone
function SmartphoneIllustration({ id, className }: { id: string; className: string }) {
  const gradientId = `mobileGradient-${id}`;
  
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00B8E6" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Phone body */}
      <rect x="70" y="30" width="60" height="140" rx="8" fill="none" stroke={`url(#${gradientId})`} strokeWidth="3" opacity="0.4" />
      <rect x="75" y="50" width="50" height="110" rx="4" fill={`url(#${gradientId})`} opacity="0.1" />
      
      {/* Screen content */}
      <rect x="80" y="60" width="40" height="25" rx="2" fill={`url(#${gradientId})`} opacity="0.2" />
      <rect x="80" y="90" width="30" height="4" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
      <rect x="80" y="98" width="35" height="4" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
      <rect x="80" y="106" width="28" height="4" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
      
      {/* App icons */}
      <circle cx="90" cy="130" r="6" fill={`url(#${gradientId})`} opacity="0.4" />
      <circle cx="110" cy="130" r="6" fill={`url(#${gradientId})`} opacity="0.4" />
      <circle cx="130" cy="130" r="6" fill={`url(#${gradientId})`} opacity="0.4" />
      
      {/* Home indicator */}
      <rect x="90" y="175" width="20" height="3" rx="1.5" fill={`url(#${gradientId})`} opacity="0.6" />
    </svg>
  );
}

// Web Development - Browser Window
function BrowserIllustration({ id, className }: { id: string; className: string }) {
  const gradientId = `webGradient-${id}`;
  
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00B8E6" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Browser window */}
      <rect x="25" y="35" width="150" height="130" rx="4" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.3" />
      <rect x="25" y="35" width="150" height="30" rx="4" fill={`url(#${gradientId})`} opacity="0.1" />
      
      {/* Address bar */}
      <rect x="40" y="42" width="120" height="16" rx="2" fill={`url(#${gradientId})`} opacity="0.2" />
      
      {/* Responsive layouts */}
      <rect x="35" y="75" width="50" height="35" rx="2" fill={`url(#${gradientId})`} opacity="0.15" />
      <rect x="90" y="75" width="50" height="35" rx="2" fill={`url(#${gradientId})`} opacity="0.15" />
      <rect x="145" y="75" width="20" height="35" rx="2" fill={`url(#${gradientId})`} opacity="0.15" />
      
      <rect x="35" y="115" width="130" height="40" rx="2" fill={`url(#${gradientId})`} opacity="0.1" />
    </svg>
  );
}

// Cloud Solutions - Cloud with Server
function CloudServerIllustration({ id, className }: { id: string; className: string }) {
  const gradientId = `cloudGradient-${id}`;
  
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00B8E6" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Cloud */}
      <path
        d="M 60 80 Q 40 80, 40 100 Q 40 120, 60 120 Q 70 140, 90 140 Q 110 140, 120 120 Q 140 120, 140 100 Q 140 80, 120 80 Q 110 60, 90 60 Q 70 60, 60 80 Z"
        fill={`url(#${gradientId})`}
        opacity="0.2"
      />
      <path
        d="M 60 85 Q 45 85, 45 100 Q 45 115, 60 115 Q 68 130, 90 130 Q 112 130, 120 115 Q 135 115, 135 100 Q 135 85, 120 85 Q 112 70, 90 70 Q 68 70, 60 85 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        opacity="0.5"
      />
      
      {/* Server */}
      <rect x="80" y="140" width="40" height="50" rx="2" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.4" />
      <rect x="85" y="150" width="30" height="3" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
      <rect x="85" y="158" width="30" height="3" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
      <rect x="85" y="166" width="30" height="3" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
      
      {/* Connection lines */}
      <g stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.4">
        <line x1="90" y1="120" x2="90" y2="140" />
        <line x1="100" y1="120" x2="100" y2="140" />
        <line x1="110" y1="120" x2="110" y2="140" />
      </g>
    </svg>
  );
}

// Consulting - Strategy/Lightbulb
function StrategyIllustration({ id, className }: { id: string; className: string }) {
  const gradientId = `strategyGradient-${id}`;
  const filterId = `strategyGlow-${id}`;
  
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00B8E6" stopOpacity="1" />
        </linearGradient>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Lightbulb */}
      <circle cx="100" cy="80" r="25" fill={`url(#${gradientId})`} opacity="0.2" filter={`url(#${filterId})`} />
      <path
        d="M 100 55 Q 85 60, 85 75 Q 85 90, 100 95 Q 115 90, 115 75 Q 115 60, 100 55 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        opacity="0.6"
      />
      
      {/* Base */}
      <rect x="90" y="95" width="20" height="8" rx="2" fill={`url(#${gradientId})`} opacity="0.3" />
      
      {/* Strategy nodes */}
      <circle cx="70" cy="130" r="8" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="100" cy="140" r="10" fill={`url(#${gradientId})`} opacity="0.4" />
      <circle cx="130" cy="130" r="8" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="85" cy="160" r="6" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="115" cy="160" r="6" fill={`url(#${gradientId})`} opacity="0.3" />
      
      {/* Connections */}
      <g stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.4">
        <line x1="100" y1="95" x2="70" y2="130" />
        <line x1="100" y1="95" x2="100" y2="140" />
        <line x1="100" y1="95" x2="130" y2="130" />
        <line x1="100" y1="140" x2="85" y2="160" />
        <line x1="100" y1="140" x2="115" y2="160" />
      </g>
    </svg>
  );
}

// Defense Technology - Shield with Security Network
function DefenseShieldIllustration({ id, className }: { id: string; className: string }) {
  const gradientId = `defenseGradient-${id}`;
  const filterId = `defenseGlow-${id}`;
  
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="50%" stopColor="#00B8E6" stopOpacity="1" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="1" />
        </linearGradient>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Shield outline */}
      <path
        d="M 100 40 Q 120 50, 130 70 Q 135 90, 130 110 Q 125 130, 115 145 Q 105 160, 100 165 Q 95 160, 85 145 Q 75 130, 70 110 Q 65 90, 70 70 Q 80 50, 100 40 Z"
        fill={`url(#${gradientId})`}
        opacity="0.2"
      />
      <path
        d="M 100 50 Q 115 58, 122 75 Q 128 92, 125 108 Q 122 124, 115 137 Q 108 150, 100 155 Q 92 150, 85 137 Q 78 124, 75 108 Q 72 92, 78 75 Q 85 58, 100 50 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        opacity="0.7"
      />
      
      {/* Security nodes */}
      <g filter={`url(#${filterId})`}>
        <circle cx="100" cy="70" r="5" fill="#0066FF" />
        <circle cx="85" cy="90" r="4" fill="#00B8E6" />
        <circle cx="115" cy="90" r="4" fill="#00B8E6" />
        <circle cx="100" cy="110" r="6" fill="#0066FF" />
        <circle cx="90" cy="125" r="4" fill="#00B8E6" />
        <circle cx="110" cy="125" r="4" fill="#00B8E6" />
      </g>
      
      {/* Security connections */}
      <g stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.5">
        <line x1="100" y1="70" x2="85" y2="90" />
        <line x1="100" y1="70" x2="115" y2="90" />
        <line x1="100" y1="70" x2="100" y2="110" />
        <line x1="85" y1="90" x2="100" y2="110" />
        <line x1="115" y1="90" x2="100" y2="110" />
        <line x1="100" y1="110" x2="90" y2="125" />
        <line x1="100" y1="110" x2="110" y2="125" />
      </g>
      
      {/* Lock icon in center */}
      <rect x="92" y="100" width="16" height="18" rx="2" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.6" />
      <path
        d="M 100 100 Q 96 100, 96 104 L 96 110 Q 96 114, 100 114 Q 104 114, 104 110 L 104 104 Q 104 100, 100 100 Z"
        fill={`url(#${gradientId})`}
        opacity="0.4"
      />
    </svg>
  );
}

