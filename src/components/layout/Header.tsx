import { Menu } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme } = useTheme()

  return (
    <header className={cn(
      "sticky top-0 z-30 w-full backdrop-blur",
      theme === 'dark' 
        ? "bg-[#171717]/95 supports-[backdrop-filter]:bg-[#171717]/60"
        : "bg-white/95 supports-[backdrop-filter]:bg-white/60"
    )}>
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        {/* Botão Menu (Mobile) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-muted-foreground hover:text-foreground"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}

