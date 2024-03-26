import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  flex-direction: row;
  height: 327px;
  align-items: center;
  margin-horizontal: ${({ theme }) => theme.METRICS.PADDING.x16}px;
  margin-vertical: ${({ theme }) => theme.METRICS.PADDING.x16}px;
`

export const ContainerDescription = styled.View`
  flex: 1;
  margin-top: ${RFPercentage(18)}px;
  padding: ${({ theme }) => theme.METRICS.PADDING.x16}px;
  margin-left: ${RFPercentage(1)}px;
  flex-direction: column;
`
export const ImageBackground = styled.Image`
  position: absolute;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`
export const Ellipse = styled.View`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 128px;
  left: 25px;
  right: 0;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
`

export const Divider = styled.View`
  width: 70%;
  top: 148px;
  left: 70px;
  position: absolute;
  height: 4px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.DARK[100]};
`

export const Title = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x18}px;
  margin-bottom: ${({ theme }) => theme.METRICS.PADDING.x12}px;
`
export const Text = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
`
