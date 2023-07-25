import { styled } from 'styled-components'

interface IMain {
  color: string
}

export const Main = styled.div<IMain>`
  color: ${(props) => props.theme[props.color]};
`
