import { ReactNode } from 'react'
import { Main } from './styles'
import Icon, { enumIcons } from '../Icon'

type typeButton = 'income' | 'spend'
type typeBgSelectedColor = 'green-700' | 'red-700'

interface ISelectionButton {
  type: typeButton
  selected: boolean
}

interface ISelectionButton {
  type: typeButton
}

export default function SelectionButton({ type, selected }: ISelectionButton) {
  let icon: ReactNode
  switch (type) {
    case 'income':
      icon = (
        <Icon
          iconColor={selected ? 'white' : 'green-500'}
          iconName={enumIcons.ARROW_UP}
          iconSize={24}
        />
      )
      break
    case 'spend':
      icon = (
        <Icon
          iconColor={selected ? 'white' : 'red-500'}
          iconName={enumIcons.ARROW_DOWN}
          iconSize={24}
        />
      )
  }

  const bgSelectedColor: typeBgSelectedColor =
    type === 'income' ? 'green-700' : 'red-700'

  return (
    <Main selected={selected} bgSelectedColor={bgSelectedColor}>
      {icon}
      {type.toLocaleUpperCase()}
    </Main>
  )
}
