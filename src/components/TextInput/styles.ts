import { styled } from 'styled-components'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  borderColor: string
  inputWidth: string
  placeholder: string
}

export const Main = styled.input<IInput>`
  color: ${({ theme }) => theme['gray-100']};
  padding: 1rem;
  border-color: ${({ borderColor }) => borderColor};
  width: ${({ inputWidth }) => inputWidth};
  background-color: ${({ theme }) => theme['gray-900']};
  border: none;
  border-radius: 8px;
`
