import { useEffect, useState, useRef } from 'react'

export default function TacticalCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const requestRef = useRef<number | null>(null)
  const targetPos = useRef({ x: -100, y: -100 })
  const currentTrailing = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
      setPosition({ x: e.clientX, y: e.clientY })
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) })
      if (!isVisible) setIsVisible(true)

      // Detect if hovering interactive targets
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('.cursor-pointer') ||
          target.closest('.cyber-card'))
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Smooth lerp animation for the outer tactical reticle
    const animateTrailing = () => {
      const ease = 0.18
      currentTrailing.current.x += (targetPos.current.x - currentTrailing.current.x) * ease
      currentTrailing.current.y += (targetPos.current.y - currentTrailing.current.y) * ease

      setTrailingPos({
        x: currentTrailing.current.x,
        y: currentTrailing.current.y,
      })

      requestRef.current = requestAnimationFrame(animateTrailing)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    requestRef.current = requestAnimationFrame(animateTrailing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* 1. Fast Center Precision Reticle Dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'bg-emerald-400 shadow-[0_0_12px_rgba(0,255,102,0.9)] scale-125'
            : 'bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)] scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* 2. Outer Advanced Tactical Crosshair Reticle with Spring Lerp */}
      <div
        className={`fixed top-0 left-0 transition-[width,height,border-color,background-color] duration-200 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 border-emerald-400/80 bg-emerald-500/10'
            : isClicked
            ? 'w-8 h-8 border-cyan-300/90 bg-cyan-500/20'
            : 'w-10 h-10 border-cyan-500/50 bg-cyan-950/15'
        } rounded-full border`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {/* Tactical Crosshair Marks (Top, Bottom, Left, Right) */}
        <div
          className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 ${
            isHovered ? 'bg-emerald-400' : 'bg-cyan-400'
          }`}
        />
        <div
          className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 ${
            isHovered ? 'bg-emerald-400' : 'bg-cyan-400'
          }`}
        />
        <div
          className={`absolute top-1/2 -left-1.5 -translate-y-1/2 h-0.5 w-1.5 ${
            isHovered ? 'bg-emerald-400' : 'bg-cyan-400'
          }`}
        />
        <div
          className={`absolute top-1/2 -right-1.5 -translate-y-1/2 h-0.5 w-1.5 ${
            isHovered ? 'bg-emerald-400' : 'bg-cyan-400'
          }`}
        />

        {/* Tactical 4-Corner Brackets (HUD Reticle Frame) */}
        <div
          className={`absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l ${
            isHovered ? 'border-emerald-400' : 'border-cyan-400/70'
          }`}
        />
        <div
          className={`absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r ${
            isHovered ? 'border-emerald-400' : 'border-cyan-400/70'
          }`}
        />
        <div
          className={`absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l ${
            isHovered ? 'border-emerald-400' : 'border-cyan-400/70'
          }`}
        />
        <div
          className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r ${
            isHovered ? 'border-emerald-400' : 'border-cyan-400/70'
          }`}
        />

        {/* Rotating Radar Sweep Line when Target Locked */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full border border-dashed border-emerald-400/60 animate-spin" />
        )}

        {/* Tactical Telemetry Label beside Reticle */}
        <div
          className={`absolute left-7 top-7 px-1.5 py-0.5 rounded text-[9px] font-mono tracking-widest whitespace-nowrap border backdrop-blur-sm transition-all duration-150 ${
            isHovered
              ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(0,255,102,0.3)]'
              : 'bg-[#060c14]/90 border-cyan-500/30 text-cyan-400/90'
          }`}
        >
          {isHovered ? (
            <span className="flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              TARGET_LOCK
            </span>
          ) : (
            <span>
              TGT[{coords.x},{coords.y}]
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
