import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar: string
  memberSince: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Usuário mockado
const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@email.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=João',
  memberSince: '2024-01-15'
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simula verificação de autenticação ao carregar
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // Simula uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Login simples (aceita qualquer email/senha para demo)
    if (email && password) {
      localStorage.setItem('user', JSON.stringify(mockUser))
      setUser(mockUser)
    } else {
      throw new Error('Email e senha são obrigatórios')
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}

