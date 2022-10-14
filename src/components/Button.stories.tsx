import {Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default{//Definindo os componentes no StoryBook
    title: 'Components/Button',
    component: Button,
    args:{
        children: 'entrar'
    },
    argTypes:{

    }

} as Meta<ButtonProps>
//Variações de componentes, para todo componente é necessário no minimo uma variação para ser exportada, se não, não funciona.
export const Default: StoryObj<ButtonProps> = {}
