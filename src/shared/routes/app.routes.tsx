import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ChatRoutes } from 'app/modules/chat/routes/chat.routes'
import { HomeRoutes } from 'app/modules/home/routes/chat.routes'
import { UnLoggedRoutes } from 'app/modules/un-logged/routes/un-logged.routes'
import { TabRoutes } from './tab-routes'

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="UnLoggedRoutes" component={UnLoggedRoutes} />
      <Screen name="Home" component={HomeRoutes} />
      <Screen name="Chat" component={ChatRoutes} />
      <Screen name="TabRoutes" component={TabRoutes} />
    </Navigator>
  )
}

export { AppRoutes }
