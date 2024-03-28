import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/home/home.page'

const { Navigator, Screen } = createNativeStackNavigator()

const HomeRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeScreen" component={Home} />
    </Navigator>
  )
}

export { HomeRoutes }
