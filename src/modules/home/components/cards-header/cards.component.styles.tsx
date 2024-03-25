import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import styled from 'styled-components/native'

export const ContainerCard = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const ContainerRight = styled.View`
  justify-content: space-between;
`
export const ContainerText = styled.View`
  justify-content: space-between;
  padding-left: -${({ theme }) => theme.METRICS.PADDING.x48}px;
`
export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.METRICS.PADDING.x24}px;
`
export const Title = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x32}px;
`
export const SubTitle = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x18}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[400]};
  text-transform: uppercase;
`
export const Description = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  color: ${({ theme }) => theme.COLORS.NEUTRAL[200]};
`
export const CodeText = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x20}px;
`
export const Button = styled.TouchableOpacity`
  border-width: 1px;
  width: 90%;
  border-color: ${({ theme }) => theme.COLORS.DARK[100]};
  border-radius: 20px;
  padding: ${({ theme }) => theme.METRICS.PADDING.x6}px;
`
export const TextButton = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[500]};
  color: ${({ theme }) => theme.COLORS.DARK[100]};
  text-align: center;
`
