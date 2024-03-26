import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'
import { MAP_IMAGE_DEFAULT } from 'app/shared/assets/images'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  Container,
  ContainerDescription,
  Divider,
  Ellipse,
  ImageBackground,
  Text,
  Title,
} from './cards-image.component.styles'

const CardImage: React.FC = () => {
  const Image = MAP_IMAGE_DEFAULT.CARD_BG
  const Icon = MAP_ICON_DEFAULT.DENTIST

  return (
    <Container>
      <ImageBackground source={Image} />
      <Ellipse>
        <Icon
          strokeWidth={1.5}
          width={RFValue(24)}
          height={RFValue(24)}
          style={{ alignSelf: 'center', marginTop: RFValue(6) }}
        />
      </Ellipse>
      <Divider />
      <ContainerDescription>
        <Title variant="H3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
        <Text variant="H3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          gravida congue ante eget vulputate. Suspendisse potenti.
        </Text>
      </ContainerDescription>
    </Container>
  )
}

export { CardImage }
