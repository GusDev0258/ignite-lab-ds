import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import {ButtonHTMLAttributes, ReactNode} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{//Interface
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}


export function Button({children, asChild, className, ...props }: ButtonProps){//Passagem de parâmetros para o component
    const Comp = asChild ? Slot: 'button';//Criação da customização das tags para nosso component
    
    return (//Criando o component e suas "variações"
        <Comp className={clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className )}{...props}
        >{children}</Comp>
    )
    }
