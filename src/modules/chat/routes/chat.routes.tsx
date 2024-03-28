import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Chat } from 'app/modules/chat/pages/chat.page'

const { Navigator, Screen } = createNativeStackNavigator()

const ChatRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="ChatScreen" component={Chat} />
    </Navigator>
  )
}

export { ChatRoutes }
