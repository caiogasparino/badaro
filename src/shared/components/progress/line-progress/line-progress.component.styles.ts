import { styled } from 'styled-components/native'

export const ContainerBar = styled.View`
  width: 6px;
  height: 100%;
  margin-right: ${({ theme }) => theme.METRICS.PADDING.x24}px;
  background-color: ${({ theme }) => theme.COLORS.DARK[100]};
  border-radius: 10px;
  overflow: hidden;
`

export const Progress = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
  position: absolute;
  bottom: 0;
`
