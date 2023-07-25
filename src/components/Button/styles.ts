import { styled } from 'styled-components'

interface IMain {
  padding: string
  isSearch?: boolean
  fontSize: string
}

export const Main = styled.button<IMain>`
  padding: ${({ padding }) => padding};
  display: flex;
  height: fit-content;
  gap: 0.75rem;
  border-radius: 8px;
  border: ${({ theme, isSearch }) =>
    isSearch ? `1px solid ${theme['green-500']}` : 'none'};
  color: ${(props) =>
    props.isSearch ? props.theme['green-500'] : props.theme.white};
  background-color: ${({ isSearch, theme }) =>
    isSearch ? 'transparent' : theme['green-500']};
  transition: background-color 0.15s;
  transition: color 0.15s;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isSearch ? props.theme['green-500'] : props.theme['green-300']};
    color: ${({ isSearch, theme }) => isSearch && theme.white};
  }
`
