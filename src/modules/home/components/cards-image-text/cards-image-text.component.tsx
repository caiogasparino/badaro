import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'
import { MAP_IMAGE_DEFAULT } from 'app/shared/assets/images'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  Button,
  Container,
  ContainerDescription,
  ImageBackground,
  Text,
  Title,
} from './cards-image-text.component.styles'

const CardImageText: React.FC = () => {
  const Image = MAP_IMAGE_DEFAULT.CARD_BG
  const ExportIcon = MAP_ICON_DEFAULT.EXPORT

  return (
    <Container>
      <ImageBackground source={Image} />
      <ContainerDescription>
        <Title variant="H1">Primeira infância</Title>
        <Text variant="H2">
          Cuidados importantes para os primeiros anos do seu filho
        </Text>
      </ContainerDescription>
      <Button>
        <ExportIcon
          onPress={() => {}}
          strokeWidth={1.5}
          width={RFValue(20)}
          height={RFValue(20)}
        />
      </Button>
    </Container>
  )
}

export { CardImageText }
