import { cn } from "@/lib/utils"

interface PixelLogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
}

export function PixelLogo({ className, showText = true,
  textClassName }: PixelLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative size-8 flex items-center
      justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full"
        >
          <path
            d="M6 4h12c4.4 0 8 3.6 8 8s-3.6 8-8 8H6v8M6 4v16"
            fill="#FA5D19"
          />
          <rect x="6" y="20" width="8" height="4" fill="#FA5D19" opacity="0.7" />

          {/* Analytics bar chart accent */}
          <rect x="26" y="18" width="2" height="10" fill="#FA5D19" rx="1" />
          <rect x="29" y="14" width="2" height="14" fill="#FA5D19" rx="1" opacity="0.8" />
          <rect x="23" y="22" width="2" height="6" fill="#FA5D19" rx="1" opacity="0.6" />
        </svg>
      </div>
      {showText && (
        <span className={cn("text-xl font-bold text-foreground", textClassName)}>
          Pixel
        </span>
      )}
    </div>
  )
}