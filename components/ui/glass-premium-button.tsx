"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface GlassPremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  variant?: "default" | "subtle"
}

const GlassPremiumButton = React.forwardRef<HTMLButtonElement, GlassPremiumButtonProps>(
  ({ children, size = "md", variant = "default", className, ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false)

    const sizeClasses = {
      sm: "px-6 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    }

    const variantClasses = {
      default: "glass-premium",
      subtle: "glass-premium opacity-90",
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)
    const handleMouseLeave = () => setIsPressed(false)

    return (
      <button
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={cn(
          // Base styles
          "relative rounded-2xl font-medium tracking-wide",
          "transition-all duration-500 ease-out",
          "transform-gpu will-change-transform",
          "focus:outline-none focus:ring-2 focus:ring-sun-yellow/50 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.98]",

          // Glass morphism and size
          variantClasses[variant],
          sizeClasses[size],

          // Text styles with dynamic states
          isPressed ? "text-glass-active" : "text-glass",

          // Hover and active effects
          "hover:glass-premium-hover",
          "hover:scale-[1.02]",
          "hover:shadow-lg",
          isPressed && "glass-premium-active",

          className,
        )}
        {...props}
      >
        {/* Inner highlight overlay */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none",
            isPressed ? "opacity-100" : "opacity-0 hover:opacity-100",
          )}
        >
          <div
            className={cn(
              "absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r transition-all duration-300",
              isPressed
                ? "from-transparent via-sun-yellow to-transparent opacity-80"
                : "from-transparent via-glass-highlight to-transparent",
            )}
          />
        </div>

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

        {/* Golden glow effect on press */}
        <div
          className={cn(
            "absolute -inset-1 rounded-2xl transition-opacity duration-300",
            isPressed ? "opacity-40" : "opacity-0 hover:opacity-30",
          )}
          style={{
            background: isPressed
              ? "radial-gradient(circle at 50% 50%, hsl(var(--sun-yellow) / 0.2), transparent 70%)"
              : "radial-gradient(circle at 50% 50%, hsl(var(--mint-green) / 0.1), transparent 70%)",
          }}
        />

        {/* Ambient glass glow animation */}
        <div
          className="absolute -inset-1 rounded-2xl opacity-0 hover:opacity-30 animate-glass-glow transition-opacity duration-700"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--mint-green) / 0.1), transparent 70%)",
          }}
        />
      </button>
    )
  },
)

GlassPremiumButton.displayName = "GlassPremiumButton"

export { GlassPremiumButton }
