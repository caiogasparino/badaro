import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
  height: 70px;
  border-radius: 34px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${RFPercentage(3)}px;
  margin-horizontal: ${RFPercentage(2)}px;
  margin-vertical: ${RFPercentage(4)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  elevation: 10;
`
export const ContainerLeft = styled.View`
  flex: 1;
`
export const ContainerCenter = styled.View`
  flex: 1;
  margin-horizontal: ${RFPercentage(3)}px;
`
export const ContainerRight = styled.View`
  flex: 1;
`

export const AvatarContainer = styled.View``
export const AvatarImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

export const Title = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[500]};
  color: ${({ theme }) => theme.COLORS.DARK[100]};
  text-align: left;
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BRAND[100]};
  background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
  border-radius: 20px;
  width: 100%;
  padding: ${({ theme }) => theme.METRICS.PADDING.x6}px;
`
export const TextButton = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[600]};
  color: ${({ theme }) => theme.COLORS.BASE[50]};
  text-align: center;
`
