"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ServiceIllustration } from "./service-illustrations";
import Link from "next/link";

export interface PremiumServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  serviceId: string;
  title: string;
  description: string;
  features?: string[];
  learnMoreHref?: string;
  variant?: "default" | "primary" | "accent";
}

export const PremiumServiceCard = React.forwardRef<HTMLDivElement, PremiumServiceCardProps>(
  ({ 
    className, 
    serviceId,
    title, 
    description, 
    features = [],
    learnMoreHref = "#",
    variant = "default",
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);
    
    // 3D tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
      stiffness: 300,
      damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
      stiffness: 300,
      damping: 30,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setIsHovered(false);
    };

    const variantStyles = {
      default: {
        border: "border-primary/20",
        bg: "bg-primary/5",
        hoverBorder: "hover:border-primary/40",
        gradient: "from-primary/10 via-primary/5 to-accent/10",
      },
      primary: {
        border: "border-primary/30",
        bg: "bg-primary/10",
        hoverBorder: "hover:border-primary/50",
        gradient: "from-primary/20 via-primary/10 to-accent/15",
      },
      accent: {
        border: "border-accent/30",
        bg: "bg-accent/10",
        hoverBorder: "hover:border-accent/50",
        gradient: "from-accent/20 via-accent/10 to-primary/15",
      },
    };

    const currentVariant = variantStyles[variant];

    return (
      <motion.div
        ref={cardRef}
        className={cn("h-full", className)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Card
            ref={ref}
            className={cn(
              "relative h-full overflow-hidden transition-all duration-500",
              "backdrop-blur-xl bg-background/80",
              "border-2",
              currentVariant.border,
              currentVariant.hoverBorder,
              "group cursor-pointer",
              isHovered && "shadow-2xl shadow-primary/20"
            )}
          >
            {/* Animated gradient border */}
            <motion.div
              className={cn(
                "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "bg-gradient-to-r",
                currentVariant.gradient
              )}
              animate={isHovered ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
                maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "xor",
                WebkitMaskComposite: "xor",
                padding: "2px",
              }}
            />

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* Gradient overlay */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              currentVariant.gradient
            )} />

            <CardHeader className="relative z-10 pb-4">
              {/* Animated illustration */}
              <motion.div
                className="mb-6 flex items-center justify-center h-32"
                animate={isHovered ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  animate={isHovered ? {
                    y: [0, -10, 0],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <ServiceIllustration serviceId={serviceId} className="w-full h-full" />
                </motion.div>
              </motion.div>

              <CardTitle className="text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors break-words relative z-10">
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 space-y-4">
              <CardDescription className="text-base leading-relaxed break-words">
                {description}
              </CardDescription>

              {/* Expandable Details Section */}
              {features.length > 0 && (
                <div className="space-y-3">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center justify-between w-full text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-3">Key Capabilities:</p>
                      <ul className="space-y-2">
                        {features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: isExpanded ? 1 : 0,
                              x: isExpanded ? 0 : -10,
                            }}
                            transition={{
                              delay: index * 0.05,
                              duration: 0.3,
                            }}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="break-words">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Learn More Button */}
              <motion.div
                className="pt-2"
                animate={{
                  y: isHovered ? 0 : 0,
                }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-full min-h-[44px] touch-manipulation group/btn relative overflow-hidden",
                    "backdrop-blur-sm border-primary/20 hover:border-primary/40",
                    currentVariant.bg
                  )}
                  asChild
                >
                  <Link href={learnMoreHref} aria-label={`Learn more about ${title}`}>
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More About {title}
                      <motion.div
                        animate={isHovered ? { x: [0, 4, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </motion.div>
                    </span>
                    <motion.div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover/btn:opacity-100 transition-opacity",
                        currentVariant.gradient
                      )}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Link>
                </Button>
              </motion.div>
            </CardContent>

            {/* Glow effect on hover */}
            <motion.div
              className={cn(
                "absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10",
                "bg-gradient-to-r",
                currentVariant.gradient
              )}
              animate={isHovered ? {
                opacity: [0.3, 0.6, 0.3],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Card>
        </motion.div>
      </motion.div>
    );
  }
);
PremiumServiceCard.displayName = "PremiumServiceCard";

