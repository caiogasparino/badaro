import { ContainerBar, Progress } from './line-progress.component.styles'

interface VerticalProgressBarProps {
  progress: number
  containerStyle?: object
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({
  progress,
  containerStyle,
}) => {
  const height = `${Math.max(0, Math.min(100, progress))}%` as const

  return (
    <ContainerBar style={containerStyle}>
      <Progress style={{ height }} />
    </ContainerBar>
  )
}

export { VerticalProgressBar }
