import { styled } from 'styled-components'

export const Main = styled.div`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 10rem 0 10rem;
  display: flex;
  flex-direction: column;
  height: 13.25rem;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};
  height: fit-content;
`

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Footer = styled.footer`
  display: flex;
  gap: 2rem;
  justify-content: center;
`
