// @flow
import React from "react"
import PasswordField from "."



export default {
  title: "PasswordField",
  component: PasswordField,
  parameters:{
    info:{
      inline:true
    }
  }
}
//otro comentario
export const defaultPasswordField = () => (
  <PasswordField  name="password" />
)

export const withLabel = () => <PasswordField  name="password" label="Contraseña"/>

//showPassword por defecto es true, entonces aparece
export const withShowPassword = () => <PasswordField  name="password" label="Contraseña" showPassword/>

export const InvalidPassword = () => <PasswordField  name="password" error="Requerido" label="Contraseña" showPassword/>

export const SpinnerPassword = () => <PasswordField  name="password" spinerPsw="algo" label="Contraseña" showPassword/>
