import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'

import { HEADER_MAP } from 'app/shared/config/constants/heade-bar'
import {
  Container,
  IconMenu,
  IconNotification,
  TitleHeader,
} from './app-header.styles'

type AppHeaderProps = {
  title?: string
}

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const { top } = useSafeAreaInsets()

  const MAP_ICON_NAME = {
    [HEADER_MAP.MESSAGE]: MAP_ICON_DEFAULT.MESSAGE_QUESTION,
    [HEADER_MAP.LOGO]: MAP_ICON_DEFAULT.BADARO_LOGO,
  }

  const height = RFValue(85) + top
  const IconMessage = MAP_ICON_NAME['message']
  const IconLogo = MAP_ICON_NAME['logo']

  return (
    <Container intensity={15} style={{ height }}>
      {title && <TitleHeader variant="H2">{title}</TitleHeader>}
      {!title && <IconMenu name="menu" />}
      {!title && (
        <IconLogo
          width={RFValue(80)}
          height={RFValue(25)}
          style={{ marginRight: RFValue(120) }}
        />
      )}
      {!title && <IconMessage width={RFValue(24)} height={RFValue(24)} />}
      <IconNotification name="bell" />
    </Container>
  )
}

export { AppHeader }
