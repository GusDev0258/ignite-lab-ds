import {Meta, StoryObj} from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default{//Definindo os componentes no StoryBook
    title: 'Components/Checkbox',
    component: Checkbox,
    args:{
    },
    argTypes:{},
    decorators:[
        (Story) => {
            return(
                <div className='flex items-center gap-2'>
                    {Story()}
                        <Text size="sm">Lembrar de mim por 30 dias</Text>
                    
                </div>
            )
        }
    ],

} as Meta<CheckboxProps>
//Variações de componentes, para todo componente é necessário no minimo uma variação para ser exportada, se não, não funciona.
export const Default: StoryObj<CheckboxProps> = {}
