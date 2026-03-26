import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

/**
 * Layout principal que envolve todas as páginas autenticadas
 */
export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const { theme } = useTheme()

  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? "bg-[#262626]" : "bg-[#F5F5F5]"
    )}>
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "lg:pl-[74px]" : "lg:pl-[260px]"
      )}>
        <div className={cn(
          "min-h-screen lg:rounded-tl-[32px] overflow-hidden",
          theme === 'dark' ? "bg-[#171717]" : "bg-white"
        )}>
          {/* Header */}
          <Header onMenuClick={() => setSidebarOpen(true)} />

          {/* Page Content */}
          <main className="p-4 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

