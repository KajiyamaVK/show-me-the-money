import { styled } from 'styled-components'

interface IMain {
  isTotal: boolean
}
export const Main = styled.div<IMain>`
  background-color: ${({ theme, isTotal }) =>
    isTotal ? theme['green-700'] : theme['gray-700']};
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  margin-top: 4.3125rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme['gray-300']};
`
export const TotalContainer = styled.p`
  line-height: 1.4;
  font-size: 2rem;
  font-weight: 700;
`
