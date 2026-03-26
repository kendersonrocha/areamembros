import { useCallback, useState } from 'react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  NodeTypes,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Play, Save, Trash2, Plus, Sparkles } from 'lucide-react'
import { LLMNode } from '@/components/features/flow/nodes/LLMNode'
import { TextNode } from '@/components/features/flow/nodes/TextNode'
import { ActionNode } from '@/components/features/flow/nodes/ActionNode'
import { ConditionalNode } from '@/components/features/flow/nodes/ConditionalNode'
import { executeFlow } from '@/services/flowExecutor'

// Tipos de nós customizados
const nodeTypes: NodeTypes = {
  llm: LLMNode,
  text: TextNode,
  action: ActionNode,
  conditional: ConditionalNode,
}

// Nós iniciais de exemplo
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'text',
    position: { x: 250, y: 50 },
    data: { label: 'Início', text: 'Bem-vindo ao Flow Builder!' },
  },
]

const initialEdges: Edge[] = []

export function FlowBuilder() {
  const { theme } = useTheme()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [isExecuting, setIsExecuting] = useState(false)
  const [executionResult, setExecutionResult] = useState<string>('')

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  // Adicionar novo nó
  const addNode = (type: string) => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type,
      position: {
        x: Math.random() * 400 + 100,
        y: Math.random() * 400 + 100,
      },
      data: getDefaultNodeData(type),
    }
    setNodes((nds) => [...nds, newNode])
  }

  // Dados padrão para cada tipo de nó
  const getDefaultNodeData = (type: string) => {
    switch (type) {
      case 'llm':
        return {
          label: 'Pergunta IA',
          prompt: 'Faça uma pergunta...',
          model: 'groq',
        }
      case 'text':
        return { label: 'Texto', text: 'Digite seu texto aqui...' }
      case 'action':
        return { label: 'Ação', action: 'send_message', config: {} }
      case 'conditional':
        return { label: 'Condição', condition: 'if true' }
      default:
        return { label: 'Nó' }
    }
  }

  // Limpar tudo
  const clearAll = () => {
    setNodes([])
    setEdges([])
    setExecutionResult('')
  }

  // Salvar fluxo
  const saveFlow = () => {
    const flow = {
      nodes,
      edges,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('savedFlow', JSON.stringify(flow))
    alert('Fluxo salvo com sucesso!')
  }

  // Executar fluxo
  const runFlow = async () => {
    setIsExecuting(true)
    setExecutionResult('')
    
    try {
      const result = await executeFlow(nodes, edges)
      setExecutionResult(result)
    } catch (error) {
      console.error('Erro ao executar fluxo:', error)
      setExecutionResult('❌ Erro ao executar o fluxo')
    } finally {
      setIsExecuting(false)
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className={cn(
              "text-3xl font-bold flex items-center gap-2",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>
              <Sparkles className="h-8 w-8 text-primary" />
              Flow Builder
            </h1>
            <p className={cn(
              "text-sm mt-1",
              theme === 'dark' ? "text-gray-400" : "text-gray-600"
            )}>
              Crie automações visuais conectando blocos
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => addNode('text')}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              Texto
            </Button>
            <Button
              onClick={() => addNode('llm')}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              IA
            </Button>
            <Button
              onClick={() => addNode('action')}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              Ação
            </Button>
            <Button
              onClick={() => addNode('conditional')}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              Condição
            </Button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex gap-2">
          <Button
            onClick={runFlow}
            disabled={isExecuting || nodes.length === 0}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
          >
            <Play className="h-4 w-4 mr-1" />
            {isExecuting ? 'Executando...' : 'Executar Fluxo'}
          </Button>
          <Button onClick={saveFlow} variant="outline">
            <Save className="h-4 w-4 mr-1" />
            Salvar
          </Button>
          <Button onClick={clearAll} variant="outline">
            <Trash2 className="h-4 w-4 mr-1" />
            Limpar
          </Button>
        </div>
      </div>

      {/* Flow Canvas */}
      <div className="flex-1 relative">
        <Card className={cn(
          "h-full border-0 shadow-lg overflow-hidden",
          theme === 'dark' ? "bg-neutral-900" : "bg-white"
        )}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            className={theme === 'dark' ? 'dark' : ''}
          >
            <Background
              gap={12}
              size={1}
              color={theme === 'dark' ? '#333' : '#ddd'}
            />
            <Controls />
            <MiniMap
              nodeColor={theme === 'dark' ? '#4F46E5' : '#6366F1'}
              maskColor={theme === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'}
            />
          </ReactFlow>
        </Card>
      </div>

      {/* Resultado da Execução */}
      {executionResult && (
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Resultado da Execução:</h3>
          <pre className="text-sm bg-muted p-3 rounded whitespace-pre-wrap">
            {executionResult}
          </pre>
        </Card>
      )}
    </div>
  )
}
