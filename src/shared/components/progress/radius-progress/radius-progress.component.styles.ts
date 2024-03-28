import styled from 'styled-components/native'

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: -${({ theme }) => theme.METRICS.PADDING.x12}px;
  margin-left: ${({ theme }) => theme.METRICS.PADDING.x6}px;
`
export const AvatarContainer = styled.View`
  position: absolute;
`
export const AvatarImage = styled.Image`
  width: 72px;
  height: 73px;
  border-radius: 50px;
`
