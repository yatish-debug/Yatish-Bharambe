import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'terminal'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  download?: boolean | string
  target?: string
  rel?: string
  disabled?: boolean
  'aria-label'?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  download,
  target,
  rel,
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded font-mono font-medium tracking-wide transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#06090e] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-[0.98]',
    secondary:
      'border border-cyan-500/40 text-cyan-400 bg-cyan-950/20 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] active:scale-[0.98]',
    ghost:
      'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 active:scale-[0.98]',
    danger:
      'border border-red-500/40 text-red-400 bg-red-950/20 hover:bg-red-500/10 hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,51,102,0.25)] active:scale-[0.98]',
    terminal:
      'border border-emerald-500/40 text-emerald-400 bg-[#0a1410] hover:bg-emerald-500/15 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(0,255,102,0.25)] active:scale-[0.98]',
  }

  const classes = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}