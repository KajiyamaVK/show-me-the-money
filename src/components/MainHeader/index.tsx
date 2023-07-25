import logo from '/public/images/logo_header.png'
import { Footer, Logo, LogoContainer, Main, Top } from './styles'
import Button from '../Button'
import SummaryCard from './subcomponents/SummaryCard'

export default function MainHeader() {
  return (
    <Main>
      <Top>
        <LogoContainer>
          <Logo src={logo} /> <span>Show Me The Money</span>
        </LogoContainer>
        <Button size="L">New Transaction</Button>
      </Top>
      <Footer>
        <SummaryCard type="income" />
        <SummaryCard type="spend" />
        <SummaryCard type="total" />
      </Footer>
    </Main>
  )
}
