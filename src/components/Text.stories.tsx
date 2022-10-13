import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default{//Definindo os componentes no StoryBook
    title: 'Components/Text',
    component: Text,
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

} as Meta<TextProps>
//Variações de componentes, para todo componente é necessário no minimo uma variação para ser exportada, se não, não funciona.
export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    }
}//Variação Grande
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
    }
}//Variação customizada, pode ser qualquer tag html que será aplicada o nosso component
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with P</p>
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