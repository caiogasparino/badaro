import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { styled } from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  flex-direction: row;
  height: 120px;
  width: ${RFPercentage(40)}px;
  justify-content: space-between;
  align-items: center;
  margin-vertical: ${({ theme }) => theme.METRICS.PADDING.x20}px;
  margin-horizontal: ${({ theme }) => theme.METRICS.PADDING.x24}px;
`

export const ContainerDescription = styled.View`
  width: 50%;
  margin-left: ${RFPercentage(16)}px;
  flex-direction: column;
`
export const ImageBackground = styled.Image`
  position: absolute;
  width: 96px;
  height: 96px;
  margin-left: ${RFPercentage(2)}px;
  border-radius: 16px;
`
export const Title = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x18}px;
  margin-bottom: ${({ theme }) => theme.METRICS.PADDING.x12}px;
`
export const Text = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
`
export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-start;
  padding-vertical: ${RFPercentage(1)}px;
  padding-right: ${RFPercentage(1)}px;
`
