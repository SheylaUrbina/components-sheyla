//@flow
import React from 'react'
import FormText from '../FormText'
import styled from 'styled-components'
import { FaExclamationCircle } from "react-icons/fa"
import Loader from "react-loader-spinner"

const ContainerInput = styled.div`
display: flex;
flex-direction: column;
&>*{
    margin-botton:7px;
}
`

const StyledInput = styled.input`
border: none;
font-size:15px;
padding: 5px;
width: 100%;
outline:none;
`
const WrapperInput = styled.div`
  border: 1px solid;
  border-color: ${props =>
    props.invalid ? props.theme.color.red : props.theme.color.gray};
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  align-items: center;
  padding:5px;
`

export type BaseInputProps = {
    error?:String,
    name:String,
    type?:string
}

type Props = {
    header?: any
}& BaseInputProps //aqui se concatena el base inputprops con las variables de Props

const BaseInput = ({error,name,type,header,spinerPsw}: Props) => {
    return (
      <ContainerInput>
        {header}
        <WrapperInput invalid={!!error}>
          <StyledInput name={name} type={type} id={name} invalid={!!error} />
          {error && <FaExclamationCircle color="red" />}
        </WrapperInput>

        {error && <FormText color="red">{error}</FormText>}

        {spinerPsw && <Loader type="Oval" color="#00BFFF" height={80} width={80} />}
      </ContainerInput>
    )
}

BaseInput.defaultProps = { type : "text"}

export default BaseInput