import { Card, CardContent } from '@/components/ui/card'
import { useTheme } from '@/contexts/ThemeContext'

interface ProgressCardProps {
  value: number
  size?: number
}

/**
 * Componente de progresso circular
 */
export function ProgressCard({ value, size = 120 }: ProgressCardProps) {
  const { theme } = useTheme()
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <Card className={theme === 'dark' ? "bg-neutral-900" : ""}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative" style={{ width: size, height: size }}>
            {/* SVG circular progress */}
            <svg
              className="transform -rotate-90"
              width={size}
              height={size}
            >
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                className="text-muted"
              />
              {/* Progress circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="text-primary transition-all duration-500"
              />
            </svg>
            
            {/* Texto central */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{value}%</span>
              <span className="text-xs text-muted-foreground">completo</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <h3 className="font-semibold">Progresso Geral</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Continue assim!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

