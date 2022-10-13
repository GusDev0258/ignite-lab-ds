import {Meta, StoryObj} from '@storybook/react'
import { button, buttonProps } from './Button'

export default{//Definindo os componentes no StoryBook
    title: 'Components/Button',
    component: button,
    args:{
    },
    argTypes:{}

} as Meta<buttonProps>
//Variações de componentes, para todo componente é necessário no minimo uma variação para ser exportada, se não, não funciona.
export const Default: StoryObj<buttonProps> = {}
