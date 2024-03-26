import React from 'react'

import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  AvatarContainer,
  AvatarImage,
  Button,
  Container,
  ContainerCenter,
  ContainerRight,
  TextButton,
  Title,
} from './card-line.component.styles'
import { data } from './constants'

type CardLineProps = {
  avatarUri: string
}

const TEXT_BUTTON = 'Iniciar '
const IconComponent = MAP_ICON_DEFAULT.CHAT

const CardLine: React.FC<CardLineProps> = ({ avatarUri }) => {
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage source={{ uri: avatarUri }} />
      </AvatarContainer>
      <ContainerCenter>
        <Title numberOfLines={2} ellipsizeMode="tail" variant="H2">
          {data.Text}
        </Title>
      </ContainerCenter>
      <ContainerRight>
        <Button>
          <TextButton variant="H2">{TEXT_BUTTON}</TextButton>
          <IconComponent
            stroke="white"
            strokeWidth={1.5}
            width={RFValue(24)}
            height={RFValue(24)}
          />
        </Button>
      </ContainerRight>
    </Container>
  )
}

export { CardLine }
