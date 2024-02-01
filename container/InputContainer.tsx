import { Input } from "@/components/Input"


const InputContainer = ({todoDesc, onChangeTodoDesc, onBlurSubmit}: {todoDesc: string, onChangeTodoDesc: void}) => {

  return (
    <>
      <Input  value={todoDesc} onChangeValue={onChangeTodoDesc} onBlurSubmitValue={onBlurSubmit}/>
    </>
  )
}

export default InputContainer