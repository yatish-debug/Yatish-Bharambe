import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  badge?: string
  title?: string
  subtitle?: string
}

export default function SectionWrapper({
  id,
  children,
  className = '',
  badge,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative ${className}`}>
      {(badge || title || subtitle) && (
        <div className="text-center mb-16 relative">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              {badge}
            </div>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sans">
              <span className="text-cyan-400 font-mono text-2xl sm:text-3xl">&lt;</span>
              {title}
              <span className="text-cyan-400 font-mono text-2xl sm:text-3xl">&gt;</span>
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6"></div>
        </div>
      )}
      {children}
    </section>
  )
}