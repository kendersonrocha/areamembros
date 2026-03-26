import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from '@/contexts/ThemeContext'

export function Settings() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie as configurações da sua conta
        </p>
      </div>

      {/* Perfil */}
      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
          <CardDescription>
            Atualize suas informações de perfil
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                Nome
              </label>
              <Input id="firstName" defaultValue="João" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Sobrenome
              </label>
              <Input id="lastName" defaultValue="Silva" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" defaultValue="joao.silva@email.com" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefone
            </label>
            <Input id="phone" type="tel" placeholder="(11) 99999-9999" />
          </div>

          <Button>Salvar Alterações</Button>
        </CardContent>
      </Card>

      {/* Senha */}
      <Card>
        <CardHeader>
          <CardTitle>Segurança</CardTitle>
          <CardDescription>
            Altere sua senha e gerencie a segurança da conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="currentPassword" className="text-sm font-medium">
              Senha Atual
            </label>
            <Input id="currentPassword" type="password" />
          </div>

          <div className="space-y-2">
            <label htmlFor="newPassword" className="text-sm font-medium">
              Nova Senha
            </label>
            <Input id="newPassword" type="password" />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirmar Nova Senha
            </label>
            <Input id="confirmPassword" type="password" />
          </div>

          <Button>Atualizar Senha</Button>
        </CardContent>
      </Card>

      {/* Aparência */}
      <Card>
        <CardHeader>
          <CardTitle>Aparência</CardTitle>
          <CardDescription>
            Personalize a aparência da plataforma
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Tema</p>
              <p className="text-sm text-muted-foreground">
                Escolha entre tema claro ou escuro
              </p>
            </div>
            <Badge
              className="cursor-pointer"
              onClick={toggleTheme}
            >
              {theme === 'light' ? '☀️ Claro' : '🌙 Escuro'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Notificações */}
      <Card>
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>
            Configure como você quer ser notificado
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Notificações por Email</p>
              <p className="text-xs text-muted-foreground">
                Receber atualizações por email
              </p>
            </div>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Notificações Push</p>
              <p className="text-xs text-muted-foreground">
                Receber notificações no navegador
              </p>
            </div>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Resumo Semanal</p>
              <p className="text-xs text-muted-foreground">
                Receber resumo semanal de progresso
              </p>
            </div>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>
        </CardContent>
      </Card>

      {/* Zona de perigo */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Zona de Perigo</CardTitle>
          <CardDescription>
            Ações irreversíveis na sua conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Excluir Conta</p>
              <p className="text-xs text-muted-foreground">
                Excluir permanentemente sua conta e todos os dados
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Excluir
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

