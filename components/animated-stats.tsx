"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Zap, Users, Award } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  value: number
  suffix?: string
  title: string
  description: string
}

interface AnimatedStatsProps {
  stats?: StatItem[]
  duration?: number
  className?: string
}

const defaultStats: StatItem[] = [
  {
    icon: <Zap className="w-16 h-16 text-gray-700" />,
    value: 1500,
    suffix: "+",
    title: "Soluciones",
    description: "Amplio catálogo de soluciones para cada necesidad",
  },
  {
    icon: <Users className="w-16 h-16 text-gray-700" />,
    value: 5000,
    suffix: "+",
    title: "Clientes",
    description: "Clientes que confían y nos recomiendan cada día",
  },
  {
    icon: <Award className="w-16 h-16 text-gray-700" />,
    value: 25,
    suffix: "+",
    title: "Años",
    description: "años manteniendo una trayectoria sólida que respalda nuestra calidad",
  },
]

function AnimatedCounter({
  value,
  duration = 2000,
  suffix = "",
}: {
  value: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(easeOutQuart * value)

      setCount(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, value, duration])

  return (
    <div ref={counterRef} className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export default function AnimatedStats({ stats = defaultStats, duration = 2000, className = "" }: AnimatedStatsProps) {
  return (
    <section className={`py-16 px-4 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center mb-6">{stat.icon}</div>

              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={duration} />

              <div className="space-y-2">
                <p className="text-gray-600 text-base leading-relaxed max-w-xs mx-auto">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
