import { RFValue } from 'app/shared/libs/font-size/font-size'
import React, { useEffect } from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Container } from './image-item.styles'

type ImageItemProps = {
  icon: ImageSourcePropType
  isFocused: boolean
}

const INITIAL_OFFSET_Y = RFValue(-40)

const ImageItem: React.FC<ImageItemProps> = ({ icon, isFocused }) => {
  const opacity = useSharedValue(0)
  const offsetY = useSharedValue(INITIAL_OFFSET_Y)

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: offsetY.value }],
  }))

  useEffect(() => {
    opacity.value = withTiming(isFocused ? 1 : 0, { duration: 500 })
    offsetY.value = withTiming(isFocused ? 0 : INITIAL_OFFSET_Y, {
      duration: 300,
    })
  }, [isFocused, opacity, offsetY])

  return (
    <Container style={animatedStyle}>
      <Image
        source={icon}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
    </Container>
  )
}

export { ImageItem }
