import { ComponentProps, ReactNode } from "react";
import { tv } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2',
  
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secundary: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-700',
    }
  },

  defaultVariants: {
    variant: 'secundary',
  }
})

interface ButtonProps extends ComponentProps<'button'> {
   children: ReactNode
}

export function Button({ children, ...props } : ButtonProps) {
  return (
    <button {...props}  className={buttonVariants()}>
      {children}
    </button>
  )
}