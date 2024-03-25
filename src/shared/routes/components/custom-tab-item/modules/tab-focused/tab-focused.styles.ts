import { View } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const ContainerAnimated = Animated.createAnimatedComponent(View)

export const Container = styled(ContainerAnimated)`
  position: absolute;
  top: -10px;
  left: 12px;
  justify-content: center;
  align-items: center;
  z-index: 0;
  width: 120px;
  border-radius: 24px;
  height: 65%;
  background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
`
