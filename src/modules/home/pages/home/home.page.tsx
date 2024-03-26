import { AppHeader } from 'app/shared/components/headers/app-header/app-header.component'

import { CardComponent } from '../../components/cards-header/cards.component'

import { CardImageText } from '../../components/cards-image-text/cards-image-text.component'
import { CardImage } from '../../components/cards-image/cards-image.component'
import { CardLine } from '../../components/cards-line/card-line.component'
import { RadiusComponent } from '../../components/radius/radius.component'
import { avatar, data } from './constants'
import {
  Container,
  ContainerCardImage,
  ContainerCenter,
  ContainerFooter,
  Scroll,
  Title,
} from './home.styles'

const TITLE = 'Acesso rápido'
const TITLE_SUB = 'Só para você, Roberta!'

const Home: React.FC = () => {
  return (
    <Container>
      <AppHeader />
      <CardComponent data={data} />
      <ContainerCenter showsVerticalScrollIndicator={false}>
        <Title variant="H2">{TITLE}</Title>
        <Scroll horizontal showsHorizontalScrollIndicator={false}>
          <RadiusComponent />
        </Scroll>
        <CardLine avatarUri={avatar.uri} />
        <CardImage />
        <ContainerFooter>
          <Title variant="H2">{TITLE_SUB}</Title>
          <ContainerCardImage horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <CardImageText key={item} />
            ))}
          </ContainerCardImage>
        </ContainerFooter>
      </ContainerCenter>
    </Container>
  )
}

export { Home }
