import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE[100]};
`
export const Scroll = styled.ScrollView`
  margin-top: 10%;
`

export const ContainerCenter = styled.ScrollView`
  flex: 1;
  padding-vertical: ${({ theme }) => theme.METRICS.PADDING.x48}px;
`

export const ContainerCardImage = styled.ScrollView`
  flex: 1;
`
export const ContainerFooter = styled.View`
  flex: 1;
  padding-vertical: ${({ theme }) => theme.METRICS.PADDING.x48}px;
  margin-bottom: ${RFPercentage(20)}px;
`

export const Card = styled.View`
  height: 200px;
  z-index: 99999;
  margin-top: 120px;
  border-radius: 20px;
  padding: ${({ theme }) => theme.METRICS.PADDING.x24}px;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  elevation: 10;
`

export const Title = styled(TextDefault)`
  margin-left: ${({ theme }) => theme.METRICS.PADDING.x24}px;
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x20}px;
`
