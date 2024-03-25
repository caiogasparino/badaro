import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { FadeInUp } from 'react-native-reanimated'
import { Container } from './container-animated.styles'

type ContainerAnimatedProps = TouchableOpacityProps & {
  children: ReactNode
  index: number
}

const ContainerAnimated: React.FC<ContainerAnimatedProps> = ({
  children,
  index,
  ...rest
}) => {
  return (
    <Container
      activeOpacity={0.95}
      entering={FadeInUp.delay(index * 100)}
      {...rest}
    >
      {children}
    </Container>
  )
}

export { ContainerAnimated }
