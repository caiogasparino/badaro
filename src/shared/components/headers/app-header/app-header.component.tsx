import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'

import { useNavigation } from '@react-navigation/native'
import useThemeStore from 'app/modules/home/stores/useThemeStore'
import { HEADER_MAP } from 'app/shared/config/constants/heade-bar'
import { useTheme } from 'styled-components'
import { Button, Container, IconMenu, TitleHeader } from './app-header.styles'

type AppHeaderProps = {
  title?: string
  menu?: boolean
  notification?: boolean
  message?: boolean
  logo?: boolean
  arrowLeft?: boolean
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, ...rest }) => {
  const navigation: { navigate: (screen: string) => void; goBack: () => void } =
    useNavigation()
  const { top } = useSafeAreaInsets()
  const { COLORS } = useTheme()
  const setTheme = useThemeStore((state) => state.setTheme)

  const MAP_ICON_NAME = {
    [HEADER_MAP.MESSAGE]: MAP_ICON_DEFAULT.MESSAGE_QUESTION,
    [HEADER_MAP.LOGO]: MAP_ICON_DEFAULT.BADARO_LOGO,
  }

  const height = RFValue(85) + top
  const IconMessage = MAP_ICON_NAME['message']
  const IconLogo = MAP_ICON_NAME['logo']
  const IconNotification = MAP_ICON_DEFAULT.NOTIFICATION
  const IconArrowLeft = MAP_ICON_DEFAULT.ARROW_LEFT

  const handleThemeChange = () => {
    useThemeStore.getState().theme === 'THEME_LIGHT'
      ? setTheme('THEME_LIGHT_ORANGE')
      : setTheme('THEME_LIGHT')
  }

  const handleChatScreen = () => {
    navigation.navigate('Chat')
  }

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <Container intensity={15} style={{ height }}>
      {title && (
        <Button onPress={() => {}}>
          <TitleHeader variant="H2">{title}</TitleHeader>{' '}
        </Button>
      )}
      {rest.arrowLeft && (
        <Button onPress={goBack}>
          <IconArrowLeft
            stroke={COLORS.BASE[50]}
            strokeWidth={RFValue(1.5)}
            width={24}
            height={24}
          />
        </Button>
      )}
      {rest.menu && (
        <Button onPress={goBack}>
          <IconMenu name="menu" />
        </Button>
      )}
      {rest.logo && (
        <Button onPress={handleThemeChange}>
          <IconLogo
            width={RFValue(80)}
            height={RFValue(25)}
            style={{ marginRight: RFValue(120) }}
          />
        </Button>
      )}
      {rest.message && (
        <Button onPress={() => {}}>
          <IconNotification
            stroke={COLORS.BASE[50]}
            strokeWidth={RFValue(1.5)}
            width={RFValue(24)}
            height={RFValue(24)}
          />
        </Button>
      )}
      {rest.notification && (
        <Button onPress={handleChatScreen}>
          <IconMessage
            stroke={COLORS.BASE[50]}
            strokeWidth={RFValue(1.5)}
            width={RFValue(24)}
            height={RFValue(24)}
          />
        </Button>
      )}
    </Container>
  )
}

export { AppHeader }
