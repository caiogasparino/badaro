import { StackActions, useNavigation } from '@react-navigation/native'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useEffect } from 'react'

import {
  FadeInLeft,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import AppIconSvg from 'app/modules/un-logged/assets/svgs/app-icon.svg'

import { BRAND_TEXT } from '../../constants/splash-data'
import { Container, Content, TextOnboarding } from './splash-screen.styles'

const SplashScreen: React.FC = () => {
  const { dispatch } = useNavigation()

  const offsetYIcon = useSharedValue(30)

  const styledAnimated = useAnimatedStyle(() => ({
    transform: [{ translateY: offsetYIcon.value }],
  }))

  useEffect(() => {
    offsetYIcon.value = withSpring(RFValue(-20), {
      duration: 600,
    })
  }, [])

  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch(StackActions.replace('Onboarding'))
    }, 2000)

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Container>
      <Content style={styledAnimated}>
        <AppIconSvg width={RFValue(180)} height={RFValue(180)} />
      </Content>

      <Content entering={FadeInLeft.delay(400).duration(400)}>
        <TextOnboarding variant="H1">{BRAND_TEXT}</TextOnboarding>
      </Content>
    </Container>
  )
}

export { SplashScreen }
