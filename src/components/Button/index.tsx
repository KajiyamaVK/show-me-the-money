import { Main } from './styles'
import { ReactNode } from 'react'
import Icon, { enumIcons } from '../Icon'
import { TypeSize } from '../../@types/typeSize'

interface IButton {
  size?: TypeSize | null
  isSearch?: boolean
  children: ReactNode
}

export default function Button({ size, isSearch, children }: IButton) {
  let paddingValue
  let buttonFontSize

  if (isSearch) {
    paddingValue = '1rem 2rem'
    buttonFontSize = '1rem'
  } else {
    switch (size) {
      case 'S':
        paddingValue = '0.5rem 1rem'
        buttonFontSize = '0.825rem'
        break
      case 'M':
        paddingValue = '0.75rem 1.25rem'
        buttonFontSize = '1rem'
        break
      case 'L':
        paddingValue = '1rem 2rem'
        buttonFontSize = '1rem'
        break
      default:
        throw console.error(
          'Invalid attribute for size. If not a search button, it needs sizing',
        )
    }
  }

  return (
    <Main padding={paddingValue} fontSize={buttonFontSize} isSearch={isSearch}>
      {isSearch && (
        <Icon
          iconColor="green-light"
          iconSize={20}
          iconName={enumIcons.MAGNIFYING_GLASS}
        />
      )}
      {children}
    </Main>
  )
}
