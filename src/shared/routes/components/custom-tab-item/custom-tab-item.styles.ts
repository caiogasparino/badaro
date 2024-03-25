import { View } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

import { AntDesign } from '@expo/vector-icons'
import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { RFValue } from 'app/shared/libs/font-size/font-size'

const ViewAnimated = Animated.createAnimatedComponent(View)

export const Container = styled.TouchableOpacity`
  margin-vertical: ${RFValue(12)}px;
`

export const ContentTabItem = styled(ViewAnimated)`
  flex-direction: row;
  align-items: center;
  margin-horizontal: ${RFValue(14)}px;
`

export const IconTab = styled(AntDesign).attrs(() => ({
  size: RFValue(20),
}))``

export const Label = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[500]};
  color: ${({ theme }) => theme.COLORS.BASE[100]};
`
