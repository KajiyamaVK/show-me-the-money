import { styled } from 'styled-components'

interface ISelectionButton {
  selected: boolean
  bgSelectedColor: string
}

export const Main = styled.button<ISelectionButton>`
  color: ${({ theme }) => theme['gray-100']};
  padding: 1rem 1.5rem;

  background: ${({ selected, theme, bgSelectedColor }) =>
    selected ? theme[bgSelectedColor] : theme['gray-700']};

  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
