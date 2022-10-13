import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import {ReactNode} from 'react';

export interface HeadingProps{//Interface
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}


export function Heading({size = 'md', children, asChild}: HeadingProps){//Passagem de parâmetros para o component
    const Comp = asChild ? Slot: 'h2';//Criação da customização das tags para nosso component
    
    return (//Criando o component e suas "variações"
        <Comp className={clsx('text-gray-100 font-bold font-sans',{
           'text-lg': size == 'sm',
           'text-xl': size == 'md',
           'text-2xl': size == 'lg', 
        })}>{children}</Comp>
    )
    }
