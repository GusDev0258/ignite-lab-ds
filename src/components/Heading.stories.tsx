import {Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default{//Definindo os componentes no StoryBook
    title: 'Components/Heading',
    component: Heading,
    args:{
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argTypes:{//Cria os tipos para serem escolhidos, onde inline-radio são radio buttons e options as opções
        size: {
            options:['sm','md','lg'],
            control:{
                type: 'inline-radio'
            },
        }
    }

} as Meta<HeadingProps>
//Variações de componentes, para todo componente é necessário no minimo uma variação para ser exportada, se não, não funciona.
export const Default: StoryObj<HeadingProps> = {}
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
    }
}//Variação Grande
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
    }
}//Variação customizada, pode ser qualquer tag html que será aplicada o nosso component
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild:{
            table:{
                disable: true
            }
        }
    }
}