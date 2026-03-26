"use client";
import { cn } from "@/lib/utils";
import { MotionProps, motion } from "motion/react";

export const Text = ({
  children,
  className,
  delay = 0,
  animationKey = 0,
  ...animationProps
}: {
  children: string;
  className?: string;
  delay?: number;
  animationKey?: number;
} & MotionProps) => {
  return (
    <motion.p
      {...animationProps}
      className={cn("text-4xl font-medium", className)}
    >
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`word-${animationKey}-${index}-${word}`}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};

