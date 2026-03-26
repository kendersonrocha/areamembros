import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award, 
  Settings,
  X,
  LogOut,
  Sun,
  Moon,
  Bot
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'motion/react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

const menuItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: GraduationCap,
    label: 'Cursos',
    path: '/courses'
  },
  {
    icon: Users,
    label: 'Comunidade',
    path: '/community'
  },
  {
    icon: Bot,
    label: 'Assistente IA',
    path: '/ai-assistant'
  },
  {
    icon: TrendingUp,
    label: 'Afiliados',
    path: '/affiliates'
  },
  {
    icon: Award,
    label: 'Certificados',
    path: '/certificates'
  },
  {
    icon: Settings,
    label: 'Configurações',
    path: '/settings'
  }
]

export function Sidebar({ isOpen, onClose, isCollapsed, setIsCollapsed }: SidebarProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout, user } = useAuth()
  const { theme, toggleTheme } = useTheme()

  const handleLogout = () => {
    logout()
    navigate('/login')
    onClose()
  }

  // Controla collapse com hover apenas em desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      setIsCollapsed(false)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      setIsCollapsed(true)
    }
  }

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full flex flex-col",
          theme === 'dark' ? "bg-[#262626]" : "bg-[#F5F5F5]",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          !isCollapsed && "lg:rounded-tr-[32px]"
        )}
        initial={false}
        animate={{ 
          width: isCollapsed ? "70px" : "256px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo e botão fechar */}
        <div className="p-6 flex items-center overflow-hidden">
          <Link to="/dashboard" className="flex items-center min-w-0">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <motion.span 
              className={cn(
                "font-bold text-lg whitespace-nowrap ml-2",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}
              animate={{ 
                opacity: isCollapsed ? 0 : 1,
                width: isCollapsed ? 0 : "auto"
              }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              TikTok Academy
            </motion.span>
          </Link>
          
          {/* Botão fechar (mobile) */}
          <motion.button
            onClick={onClose}
            className="lg:hidden text-muted-foreground hover:text-foreground flex-shrink-0 ml-auto"
            animate={{ 
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? 0 : "auto"
            }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <X className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Menu de navegação */}
        <nav className="flex-1 p-4 overflow-y-auto overflow-x-hidden">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                 <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg transition-all relative",
                      isActive
                        ? theme === 'dark'
                          ? "text-white"
                          : "text-gray-900"
                        : theme === 'dark' 
                          ? "text-gray-400 hover:bg-white/5 hover:text-white"
                          : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <motion.span 
                      className="font-medium whitespace-nowrap ml-3"
                      animate={{ 
                        opacity: isCollapsed ? 0 : 1,
                        width: isCollapsed ? 0 : "auto"
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </li>
              )
            })}

            {/* Separador */}
            <li className="pt-4">
              <div></div>
            </li>

            {/* Botão de Logout */}
            <li>
              <button
                onClick={handleLogout}
                className={cn(
                  "w-full flex items-center px-4 py-3 rounded-lg transition-all text-destructive relative",
                  theme === 'dark' ? "hover:bg-destructive/10" : "hover:bg-red-50"
                )}
              >
                <LogOut className="h-5 w-5 flex-shrink-0" />
                <motion.span 
                  className="font-medium whitespace-nowrap ml-3"
                  animate={{ 
                    opacity: isCollapsed ? 0 : 1,
                    width: isCollapsed ? 0 : "auto"
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  Sair
                </motion.span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Toggle de tema e Avatar no bottom */}
        <div className="p-4 space-y-3 overflow-hidden">
          {/* Toggle de Tema */}
          <button
            onClick={toggleTheme}
            className={cn(
              "w-full flex items-center px-4 py-3 rounded-lg transition-all relative",
              theme === 'dark' 
                ? "text-gray-400 hover:bg-white/5 hover:text-white"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            )}
          >
            {theme === 'dark' ? (
              <Moon className="h-5 w-5 flex-shrink-0" />
            ) : (
              <Sun className="h-5 w-5 flex-shrink-0" />
            )}
            <motion.span 
              className="font-medium whitespace-nowrap ml-3"
              animate={{ 
                opacity: isCollapsed ? 0 : 1,
                width: isCollapsed ? 0 : "auto"
              }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              {theme === 'dark' ? 'Modo Escuro' : 'Modo Claro'}
            </motion.span>
          </button>

          {/* Avatar do Usuário */}
          <Link
            to="/profile"
            onClick={onClose}
            className={cn(
              "flex items-center px-4 py-3 rounded-lg transition-all relative",
              theme === 'dark' ? "hover:bg-white/5" : "hover:bg-gray-200"
            )}
          >
            <Avatar className="h-6 w-6 flex-shrink-0">
              <AvatarFallback className={cn(
                "text-[10px] font-semibold",
                theme === 'dark' 
                  ? "bg-gray-700 text-gray-400" 
                  : "bg-gray-300 text-gray-600"
              )}>
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            <motion.div 
              className="flex-1 min-w-0 ml-3"
              animate={{ 
                opacity: isCollapsed ? 0 : 1,
                width: isCollapsed ? 0 : "auto"
              }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              <p className={cn(
                "font-semibold text-sm truncate",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                {user?.name || 'Usuário'}
              </p>
              <p className={cn(
                "text-xs truncate",
                theme === 'dark' ? "text-gray-400" : "text-gray-600"
              )}>
                {user?.email || 'email@exemplo.com'}
              </p>
            </motion.div>
          </Link>
        </div>
      </motion.aside>
    </>
  )
}

