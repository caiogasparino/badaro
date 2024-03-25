import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const ContainerRadius = styled.View`
  width: 70px;
  height: 70px;
  align-items: center;
  margin-horizontal: ${({ theme }) => theme.METRICS.PADDING.x20}px;
  margin-bottom: ${({ theme }) => theme.METRICS.PADDING.x12}px;
  padding: ${({ theme }) => theme.METRICS.PADDING.x24}px;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
  border-radius: 30px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
`

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[500]};
  color: ${({ theme }) => theme.COLORS.DARK[100]};
  text-align: center;
`
