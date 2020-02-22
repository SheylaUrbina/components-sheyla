//@flow
import React from 'react'
import FormText from '../FormText'
import styled from 'styled-components'

const WrapperPass = styled.div`
display: flex;
flex-direction: column;
&>*{
    margin-botton:7px;
}
`

const StyledPass = styled.input`
border: 1px solid;
border-color: ${props => props.invalid ? props.theme.color.red : props.theme.color.gray};
font-size:15px;
border-radius:5px;
padding: 5px;
`

export type BasePassProps = {
    error?:String,
    name:String,
    type?:string
}

type Props = {
    header?: any
}& BasePassProps //aqui se concatena el base inputprops con las variables de Props

const BasePassword = ({error,name,type,header}: Props) => {
    return ( 
    <WrapperPass>
    {header}
    
    <StyledPass name = {name} type = {type} id = {name}  invalid={!!error}/>
    {error && <FormText color="red">{error}</FormText>}
    </WrapperPass>
    )
}

BasePassword.defaultProps = { type : "text"}

export default BasePassword