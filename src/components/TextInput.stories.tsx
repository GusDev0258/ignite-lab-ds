import {Meta, StoryObj} from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput,TextInputRootProps } from './TextInput'

export default{//Definindo os componentes no StoryBook
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
       children:[
        <TextInput.Icon>
        <Envelope/>
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your e-mail adress'/>,
       ],
    },
    argTypes:{}

} as Meta<TextInputRootProps>
//Variações de componentes, para todo componente é necessário no minimo uma variação para ser exportada, se não, não funciona.
export const Default: StoryObj<TextInputRootProps> = {}

export const noIcon: StoryObj<TextInputRootProps> = {
    args:{
        children:
        <TextInput.Input placeholder='Type your e-mail adress'/> 
    }
}
