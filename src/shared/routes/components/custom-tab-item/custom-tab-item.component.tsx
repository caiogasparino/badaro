import { useEffect } from 'react'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { TAB_BAR_MAP } from 'app/shared/config/constants/tab-bar-map'

import { useTheme } from 'styled-components/native'

import { MAP_ICON_TAB } from 'app/shared/assets/tabbar-svg'
import {
  Container,
  ContentTabItem,
  IconTab,
  Label,
} from './custom-tab-item.styles'

type CustomTabItemProps = {
  key: string
  isFocused: boolean
  label: string
  onPress(): void
}

const MAP_ICON_NAME = {
  [TAB_BAR_MAP.HOME]: MAP_ICON_TAB.HOME,
  [TAB_BAR_MAP.CALENDAR]: MAP_ICON_TAB.CALENDAR,
  [TAB_BAR_MAP.CARD]: MAP_ICON_TAB.CARD,
  [TAB_BAR_MAP.HEART]: MAP_ICON_TAB.HEART,
  [TAB_BAR_MAP.KEY]: MAP_ICON_TAB.KEY,
}

const CustomTabItem: React.FC<CustomTabItemProps> = ({
  isFocused,
  label,
  onPress,
}) => {
  const { COLORS } = useTheme()

  const scale = useSharedValue(0.5)
  const rotate = useSharedValue(0) // Degrees

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(scale.value, [0.5, 1.4], [0.5, 1.4]) },
      { rotate: `${interpolate(rotate.value, [0, 360], [0, 360])}deg` },
    ],
  }))

  const IconComponent = MAP_ICON_NAME[label]

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(1.1)
      rotate.value = withTiming(360, {
        duration: 500,
      })
    } else {
      scale.value = withSpring(1)
      rotate.value = withTiming(0, {
        duration: 500,
      })
    }
  }, [isFocused])

  return (
    <Container activeOpacity={1} onPress={onPress} key={label}>
      <ContentTabItem
        style={[
          {
            backgroundColor: isFocused ? COLORS.BRAND[100] : undefined,
            borderRadius: isFocused ? 24 : undefined,
            opacity: isFocused ? 1 : undefined,
            height: isFocused ? 45 : undefined,
            width: isFocused ? 100 : undefined,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          },
        ]}
      >
        {IconComponent ? (
          <Animated.View style={isFocused && animatedIconStyle}>
            <IconComponent
              width={26}
              height={26}
              color={isFocused ? COLORS.BRAND[100] : COLORS.NEUTRAL[100]}
            />
          </Animated.View>
        ) : (
          <IconTab
            name={IconComponent}
            color={isFocused ? COLORS.BRAND[100] : COLORS.NEUTRAL[100]}
          />
        )}

        {isFocused && <Label>{label}</Label>}
      </ContentTabItem>
    </Container>
  )
}

export { CustomTabItem }
