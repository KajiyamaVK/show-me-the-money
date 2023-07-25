import Icon, { enumIcons } from '../../../Icon'
import { Header, Main, TotalContainer } from './styles.ts'

type typeSummaryCard = 'income' | 'spend' | 'total'

interface ISummaryCard {
  type: typeSummaryCard
}

export default function SummaryCard({ type }: ISummaryCard) {
  interface ICardAttributes {
    iconColor: string
    iconName: enumIcons
  }
  let cardAttributes: ICardAttributes

  switch (type) {
    case 'income':
      cardAttributes = {
        iconColor: 'green-300',
        iconName: enumIcons.ARROW_UP,
      }
      break
    case 'spend':
      cardAttributes = {
        iconColor: 'red-300',
        iconName: enumIcons.ARROW_DOWN,
      }
      break
    case 'total':
      cardAttributes = {
        iconColor: 'gray-100',
        iconName: enumIcons.DOLLAR_SIGN,
      }
      break
  }
  return (
    <Main isTotal={type === 'total'}>
      <Header>
        {type.toLocaleUpperCase()}
        <Icon
          iconColor={cardAttributes.iconColor}
          iconName={cardAttributes.iconName}
          iconSize={32}
        />
      </Header>
      <TotalContainer>R$ 17.400,55</TotalContainer>
    </Main>
  )
}
