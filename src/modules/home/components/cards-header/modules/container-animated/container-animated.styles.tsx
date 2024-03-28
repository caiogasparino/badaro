import { RFValue } from 'app/shared/libs/font-size/font-size'
import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity)

export const Container = styled(TouchableOpacityAnimated)`
  height: 185px;
  z-index: 99999;
  margin-top: ${RFValue(120)}px;
  border-radius: 20px;
  padding: ${({ theme }) => theme.METRICS.PADDING.x24}px;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  elevation: 10;
  flex-direction: column;
`

const ContainerBar = styled.View`
  width: 6px;
  height: 100%;
  margin-right: ${({ theme }) => theme.METRICS.PADDING.x24}px;
  background-color: ${({ theme }) => theme.COLORS.DARK[100]};
  border-radius: 10px;
  overflow: hidden;
`

const Progress = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
  position: absolute;
  bottom: 0;
`

interface VerticalProgressBarProps {
  progress: number
  containerStyle?: object
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({
  progress,
  containerStyle,
}) => {
  const height = `${Math.max(0, Math.min(100, progress))}%` as const

  return (
    <ContainerBar style={containerStyle}>
      <Progress style={{ height }} />
    </ContainerBar>
  )
}

export default VerticalProgressBar
