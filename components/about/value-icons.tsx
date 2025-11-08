"use client";

import { useId } from "react";

interface ValueIconProps {
  type: "trust" | "innovation" | "excellence" | "collaboration";
  className?: string;
}

export function ValueIcon({ type, className = "" }: ValueIconProps) {
  const uniqueId = useId();
  
  switch (type) {
    case "trust":
      return <TrustIcon id={uniqueId} className={className} />;
    case "innovation":
      return <InnovationIcon id={uniqueId} className={className} />;
    case "excellence":
      return <ExcellenceIcon id={uniqueId} className={className} />;
    case "collaboration":
      return <CollaborationIcon id={uniqueId} className={className} />;
  }
}

// Trust Icon - Shield with checkmark
function TrustIcon({ id, className }: { id: string; className: string }) {
  const gradientId = `trustGradient-${id}`;
  
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
      
      {/* Shield */}
      <path
        d="M 100 40 L 160 70 L 160 120 Q 160 160, 100 180 Q 40 160, 40 120 L 40 70 Z"
        fill={`url(#${gradientId})`}
        opacity="0.2"
      />
      <path
        d="M 100 50 L 150 75 L 150 120 Q 150 155, 100 170 Q 50 155, 50 120 L 50 75 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
      />
      
      {/* Checkmark */}
      <path
        d="M 80 100 L 95 115 L 120 90"
        stroke={`url(#${gradientId})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Innovation Icon - Lightbulb with sparkles
function InnovationIcon({ id, className }: { id: string; className: string }) {
  const gradientId = `innovationGradient-${id}`;
  
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
          <stop offset="0%" stopColor="#00B8E6" stopOpacity="1" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Lightbulb */}
      <circle cx="100" cy="80" r="35" fill={`url(#${gradientId})`} opacity="0.2" />
      <path
        d="M 100 50 Q 75 55, 75 80 Q 75 105, 100 110 Q 125 105, 125 80 Q 125 55, 100 50 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
      />
      
      {/* Base */}
      <rect x="90" y="110" width="20" height="15" rx="2" fill={`url(#${gradientId})`} opacity="0.3" />
      
      {/* Sparkles */}
      <circle cx="60" cy="60" r="4" fill={`url(#${gradientId})`} />
      <circle cx="140" cy="60" r="4" fill={`url(#${gradientId})`} />
      <circle cx="70" cy="100" r="3" fill={`url(#${gradientId})`} />
      <circle cx="130" cy="100" r="3" fill={`url(#${gradientId})`} />
    </svg>
  );
}

// Excellence Icon - Star with rays
function ExcellenceIcon({ id, className }: { id: string; className: string }) {
  const gradientId = `excellenceGradient-${id}`;
  
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
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Star */}
      <path
        d="M 100 30 L 115 75 L 170 75 L 125 105 L 140 150 L 100 120 L 60 150 L 75 105 L 30 75 L 85 75 Z"
        fill={`url(#${gradientId})`}
        opacity="0.3"
      />
      <path
        d="M 100 40 L 110 70 L 140 70 L 120 90 L 130 120 L 100 105 L 70 120 L 80 90 L 60 70 L 90 70 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
      />
      
      {/* Rays */}
      <line x1="100" y1="20" x2="100" y2="40" stroke={`url(#${gradientId})`} strokeWidth="3" />
      <line x1="180" y1="100" x2="160" y2="100" stroke={`url(#${gradientId})`} strokeWidth="3" />
      <line x1="100" y1="180" x2="100" y2="160" stroke={`url(#${gradientId})`} strokeWidth="3" />
      <line x1="20" y1="100" x2="40" y2="100" stroke={`url(#${gradientId})`} strokeWidth="3" />
    </svg>
  );
}

// Collaboration Icon - Connected nodes
function CollaborationIcon({ id, className }: { id: string; className: string }) {
  const gradientId = `collaborationGradient-${id}`;
  
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
      
      {/* Connected nodes */}
      <circle cx="100" cy="100" r="25" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="100" cy="100" r="20" fill="none" stroke={`url(#${gradientId})`} strokeWidth="3" />
      
      <circle cx="60" cy="80" r="15" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="60" cy="80" r="12" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
      
      <circle cx="140" cy="80" r="15" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="140" cy="80" r="12" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
      
      <circle cx="60" cy="120" r="15" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="60" cy="120" r="12" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
      
      <circle cx="140" cy="120" r="15" fill={`url(#${gradientId})`} opacity="0.3" />
      <circle cx="140" cy="120" r="12" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
      
      {/* Connection lines */}
      <line x1="80" y1="85" x2="90" y2="95" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.5" />
      <line x1="120" y1="85" x2="110" y2="95" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.5" />
      <line x1="80" y1="115" x2="90" y2="105" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.5" />
      <line x1="120" y1="115" x2="110" y2="105" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

