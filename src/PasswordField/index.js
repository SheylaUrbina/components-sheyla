// @flow
import React,{useState} from "react"
import BaseInput from "../BaseInput"
import styled from "styled-components"
import type { BaseInputProps } from "../BaseInput"
import Label from "../Label"

//agregamos un comentario

type Props = {
  label?: string,
  showPassword: boolean
} & BaseInputProps

const WrapperHeader = styled.div`
display: flex;
justify-content: space-between;
`

const PasswordField = ({ showPassword, label, error, name,spinerPsw }: Props) => {
  
  const [showPwd, setShowPwd] = useState(false);

  const inpuType = showPwd ? "text" : "password"
  //setShowPwd(!showPwd)
  //setShowPwd( prevShowPwd => !prevShowPwd)
  //setShowPwd( prevShowPwd => { aplicar logica ..... !prevShowPwd})
  //this.setState (prevState =>({showPwd: !PrevState.showPwd}),()=>)
  //hardcode: codigo fuente quemado ..harcodeado
  const Header = () => 

  {
    return(<WrapperHeader>
  {label && <Label htmlFor={name}>{label}</Label>}
  {showPassword && <button onClick={()=> setShowPwd(!showPwd)}> {showPwd?"Ocultar" : "Mostrar"}</button>} 
  
  </WrapperHeader>
  )}
  return (<BaseInput name={name} error={error} spinerPsw={spinerPsw} type={inpuType} header={<Header/>}/>//renderprops
  )
}

PasswordField.defaultProps ={
  showPasssword:false
}
export default PasswordField