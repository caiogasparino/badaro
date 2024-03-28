import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding } from 'app/modules/un-logged/pages/onboarding/onboarding.page'
import { SplashScreen } from 'app/modules/un-logged/pages/splash-screen/splash-screen.page'

const { Navigator, Screen } = createNativeStackNavigator()

const UnLoggedRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="Onboarding" component={Onboarding} />
    </Navigator>
  )
}

export { UnLoggedRoutes }
