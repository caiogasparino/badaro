import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from 'app/modules/home/pages/home/home.page'
import { MockPage } from 'app/modules/mock/pages/mock/mock.page'
import { TAB_BAR_MAP } from '../config/constants/tab-bar-map'
import { CustomTabBarContainer } from './components/custom-tab-bar-container/custom-tab-bar-container.component'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  return (
    <Navigator
      tabBar={(tabBarProps) => <CustomTabBarContainer {...tabBarProps} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={TAB_BAR_MAP.HOME} component={Home} />
      <Screen name={TAB_BAR_MAP.CALENDAR} component={MockPage} />
      <Screen name={TAB_BAR_MAP.CARD} component={MockPage} />
      <Screen name={TAB_BAR_MAP.HEART} component={MockPage} />
      <Screen name={TAB_BAR_MAP.KEY} component={MockPage} />
    </Navigator>
  )
}

export { TabRoutes }
