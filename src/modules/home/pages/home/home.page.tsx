import { AppHeader } from 'app/shared/components/headers/app-header/app-header.component'

import { CardComponent } from '../../components/cards-header/cards.component'
import { CardLine } from '../../components/cards-line/card.line.component'
import { RadiusComponent } from '../../components/radius/radius.component'
import { data } from './constants'
import { Container, ContainerCenter, Scroll, Title } from './home.styles'

const TITLE = 'Acesso rápido'

const Home: React.FC = () => {
  return (
    <Container>
      <AppHeader />
      <CardComponent data={data} />
      <ContainerCenter>
        <Title variant="H2">{TITLE}</Title>
        <Scroll horizontal showsHorizontalScrollIndicator={false}>
          <RadiusComponent />
        </Scroll>
        <CardLine />
      </ContainerCenter>
    </Container>
  )
}

export { Home }
