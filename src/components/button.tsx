// Importa componentes padrão do React
import { ComponentProps, ReactNode } from "react";

// Importa funções para criar variantes do Tailwind CSS
import { tv, VariantProps } from 'tailwind-variants'

// Define as variantes base para o botão (arredondamento, espaçamento, fonte, layout flexbox)
const buttonVariants = tv({
  base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2',
  
  // Define grupos de variantes para organização
  variants: {
    variant: {
      // Variante primária (fundo verde limão claro, texto verde limão escuro, hover verde limão mais escuro)
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      // Variante secundária (fundo cinza escuro, texto cinza claro, hover cinza um pouco mais claro)
      secundary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },
    size: {
      // Tamanho padrão (preenchimento vertical de 2 unidades)
      default: "py-2",
      // Tamanho full (largura total e altura de 11 unidades)
      full: "w-full h-11",
    },
  },

  // Define os valores padrão para variante e tamanho caso não sejam explicitados
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  }
})

// Interface para definir as props do componente Button
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}

// Função Button que renderiza o botão
export function Button({ children, variant, size, ...props }: ButtonProps) {
  // Desestrutura as props para acessar children, variant, size e outras props
  return (
    <button {...props} className={buttonVariants({ variant, size })}>  
      {children}  {/* Renderiza o conteúdo filho do botão */}
    </button>
  )
}
