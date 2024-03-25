import { BlurView } from 'expo-blur'
import styled from 'styled-components/native'

export const Container = styled(BlurView)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  margin: 0 12px;
  background-color: ${({ theme }) => theme.COLORS.DARK[300]};
`
