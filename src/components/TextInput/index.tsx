import { typeStatus } from '../../@types/typeStatus'
import { Main } from './styles'

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string
  inputStatus: typeStatus
  placeholder: string
}

export default function TextInput({
  width,
  inputStatus,
  placeholder,
}: ITextInput) {
  const borderColor = inputStatus === 'selected' ? 'green-700' : 'red-700'
  return (
    <Main
      borderColor={borderColor}
      inputWidth={width}
      placeholder={placeholder}
    />
  )
}
