"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ValueIcon } from "./value-icons";

const values = [
  {
    type: "trust" as const,
    title: "Trust",
    description: "Building lasting relationships through transparency, reliability, and integrity in every interaction.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    type: "excellence" as const,
    title: "Excellence",
    description: "Delivering exceptional quality and exceeding expectations through meticulous attention to detail.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    type: "innovation" as const,
    title: "Innovation",
    description: "Pushing boundaries and embracing cutting-edge technologies to solve complex challenges.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    type: "collaboration" as const,
    title: "Collaboration",
    description: "Working closely with clients and partners to achieve shared success and mutual growth.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
];

export function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className={cn(
            "p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl",
            value.bgColor,
            value.borderColor,
            "group cursor-pointer"
          )}
        >
          <motion.div
            className={cn(
              "w-20 h-20 rounded-lg flex items-center justify-center mb-4 mx-auto",
              value.bgColor
            )}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <ValueIcon type={value.type} className="w-full h-full" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2 text-foreground text-center group-hover:text-primary transition-colors">
            {value.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-center">{value.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

