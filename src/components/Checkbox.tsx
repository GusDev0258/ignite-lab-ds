
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'
import { clsx } from 'clsx';
import {ReactNode} from 'react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{

}


export function Checkbox(props: CheckboxProps){//Passagem de parâmetros para o component

    
    return (//Criando o component e suas "variações"
        <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] items-center bg-gray-800 rounded" {...props}>
            <CheckboxPrimitive.Indicator asChild>
            <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
    }
