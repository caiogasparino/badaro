import Svg, { Circle } from 'react-native-svg'
import { useTheme } from 'styled-components/native'
import {
  AvatarContainer,
  AvatarImage,
  ContainerImage,
} from './radius-progress.component.styles'
interface CircularProgressBarProps {
  progress: number
  size: number
  strokeWidth: number
  avatarUri: string
  colorStroke?: string
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  size,
  strokeWidth,
  avatarUri,
  colorStroke = '#e6e6e6',
}) => {
  const statusRadius = (size - strokeWidth) / 2.8
  const radius = (size - strokeWidth) / 2.4
  const circumference = radius * 2 * Math.PI
  const alpha = progress / 100
  const progressStrokeDashoffset = circumference - alpha * circumference
  const { COLORS } = useTheme()

  return (
    <ContainerImage>
      <Svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={statusRadius}
          fill="none"
          stroke={COLORS.NEUTRAL[300]}
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressStrokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <AvatarContainer>
        <AvatarImage source={{ uri: avatarUri }} />
      </AvatarContainer>
    </ContainerImage>
  )
}
