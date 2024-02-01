import React from 'react'
import { Input } from "@/components/Input"


const InputContainer = ({todoDesc, onChangeTodoDesc, onBlurSubmit}: {todoDesc: string, onChangeTodoDesc: React.ChangeEventHandler, onBlurSubmit: React.FocusEventHandler}) => {

  return (
    <>
      <Input  value={todoDesc} onChangeValue={onChangeTodoDesc} onBlurSubmitValue={onBlurSubmit}/>
    </>
  )
}

export default InputContainer