import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'
import { CircularProgressBar } from 'app/shared/components/progress/radius-progress/radius-progress.component'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useTheme } from 'styled-components'
import {
  Button,
  CardContainer,
  CodeText,
  ContainerCard,
  ContainerRight,
  ContainerText,
  Description,
  SubTitle,
  TextButton,
  Title,
} from './cards.component.styles'
import { ContainerAnimated } from './modules/container-animated/container-animated.module'
import VerticalProgressBar from './modules/container-animated/container-animated.styles'

type CardProps = {
  data?: any
}

const IconComponent = MAP_ICON_DEFAULT.CARD
const labelButton = 'Meus Dados'

const CardComponent: React.FC<CardProps> = ({ data }) => {
  const { COLORS } = useTheme()

  return (
    <ContainerAnimated index={data.index}>
      <ContainerCard>
        {VerticalProgressBar({ progress: 30, containerStyle: {} })}
        <ContainerText>
          <Title variant="H2">{data.title}</Title>
          <SubTitle variant="H2">{data.subTitle}</SubTitle>
          <Description variant="P1">{data.description}</Description>
          <CardContainer>
            <IconComponent
              width={RFValue(24)}
              height={RFValue(24)}
              stroke={COLORS.DARK[100]}
              style={{ marginRight: RFValue(8) }}
            />
            <CodeText variant="H2">{data.code}</CodeText>
          </CardContainer>
        </ContainerText>
        <ContainerRight>
          <CircularProgressBar
            progress={data.progress}
            size={120}
            strokeWidth={8}
            colorStroke={COLORS.BRAND[100]}
            avatarUri={data.avatarUri}
          />
          <Button>
            <TextButton>{labelButton}</TextButton>
          </Button>
        </ContainerRight>
      </ContainerCard>
    </ContainerAnimated>
  )
}

export { CardComponent }
