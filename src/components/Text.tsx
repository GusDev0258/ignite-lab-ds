import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import {ReactNode} from 'react';

export interface TextProps{//Interface
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}


export function Text({size = 'md', children, asChild}: TextProps){//Passagem de parâmetros para o component
    const Comp = asChild ? Slot: 'span';//Criação da customização das tags para nosso component
    
    return (//Criando o component e suas "variações"
        <Comp className={clsx('text-gray-100 font-sans',{
           'text-xs': size == 'sm',
           'text-sm': size == 'md',
           'text-md': size == 'lg', 
        })}>{children}</Comp>
    )
    }
