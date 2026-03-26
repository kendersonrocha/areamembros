import { Link2, TrendingUp, DollarSign, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export function Affiliates() {
  const affiliateLink = 'https://tiktokacademy.com/ref/joaosilva'

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold">Programa de Afiliados</h1>
        <p className="text-muted-foreground mt-1">
          Indique amigos e ganhe comissões
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Ganho
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.247,00</div>
            <p className="text-xs text-muted-foreground">
              +R$ 127,00 este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Indicações
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37</div>
            <p className="text-xs text-muted-foreground">
              12 ativos este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conversão
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24%</div>
            <p className="text-xs text-muted-foreground">
              +5% vs. mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Comissão/Venda
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30%</div>
            <p className="text-xs text-muted-foreground">
              Comissão recorrente
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Link de afiliado */}
      <Card>
        <CardHeader>
          <CardTitle>Seu Link de Afiliado</CardTitle>
          <CardDescription>
            Compartilhe este link para ganhar comissões
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={affiliateLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(affiliateLink)
                alert('Link copiado!')
              }}
            >
              Copiar
            </Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">
              <Link2 className="mr-1 h-3 w-3" />
              247 cliques
            </Badge>
            <Badge variant="outline">
              <Users className="mr-1 h-3 w-3" />
              89 cadastros
            </Badge>
            <Badge variant="outline">
              <DollarSign className="mr-1 h-3 w-3" />
              37 conversões
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Como funciona */}
      <Card>
        <CardHeader>
          <CardTitle>Como Funciona o Programa</CardTitle>
          <CardDescription>
            Entenda como ganhar com afiliados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Compartilhe</h4>
              <p className="text-sm text-muted-foreground">
                Compartilhe seu link exclusivo nas redes sociais ou com amigos
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Eles se Inscrevem</h4>
              <p className="text-sm text-muted-foreground">
                Quando alguém se cadastra pelo seu link, você recebe crédito
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Ganhe Comissões</h4>
              <p className="text-sm text-muted-foreground">
                Receba 30% de comissão recorrente enquanto eles forem alunos
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Histórico de comissões */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Comissões</CardTitle>
          <CardDescription>
            Suas últimas comissões recebidas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: '2025-10-08', name: 'Maria Santos', amount: 89.90, status: 'Pago' },
              { date: '2025-10-07', name: 'Pedro Costa', amount: 89.90, status: 'Pago' },
              { date: '2025-10-05', name: 'Ana Paula', amount: 89.90, status: 'Pendente' },
              { date: '2025-10-03', name: 'Carlos Mendes', amount: 89.90, status: 'Pago' },
              { date: '2025-10-01', name: 'Juliana Reis', amount: 89.90, status: 'Pago' }
            ].map((commission, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg border"
              >
                <div className="flex-1">
                  <p className="font-medium text-sm">{commission.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(commission.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">R$ {commission.amount.toFixed(2)}</span>
                  <Badge
                    variant={commission.status === 'Pago' ? 'default' : 'outline'}
                    className={commission.status === 'Pago' ? 'bg-green-500' : ''}
                  >
                    {commission.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-4">
            Ver Histórico Completo
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

