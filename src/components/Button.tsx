import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import {ReactNode} from 'react';

export interface buttonProps{//Interface
    children: ReactNode;
    asChild?: boolean;
}


export function button({children, asChild}: buttonProps){//Passagem de parâmetros para o component
    const Comp = asChild ? Slot: 'button';//Criação da customização das tags para nosso component
    
    return (//Criando o component e suas "variações"
        <Comp className={clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition colors hover:bg-cyan-300 focus:ring-2 ring-white',
        )}>{children}</Comp>
    )
    }
