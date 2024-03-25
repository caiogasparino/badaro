import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'
import { RADIUS_MAP } from 'app/shared/config/constants/radius-map'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import {
  Container,
  ContainerRadius,
  ContainerTitle,
  Title,
} from './radius.component.styles'

const RadiusComponent: React.FC = () => {
  const { COLORS } = useTheme()
  const iconKeys = Object.keys(RADIUS_MAP)

  const MAP_ICON_NAME = {
    [RADIUS_MAP.CARD]: MAP_ICON_DEFAULT.CARD,
    [RADIUS_MAP.MONEY_RECIVE]: MAP_ICON_DEFAULT.MONEY_RECIVE,
    [RADIUS_MAP.CALENDAR]: MAP_ICON_DEFAULT.CALENDAR,
    [RADIUS_MAP.MESSAGE]: MAP_ICON_DEFAULT.MESSAGE_QUESTION,
  }

  return (
    <>
      {iconKeys.map((key, index) => {
        const IconComponent = MAP_ICON_NAME[RADIUS_MAP[key]]
        const displayName = RADIUS_MAP[key]

        return (
          <Container key={index}>
            <ContainerRadius>
              {IconComponent && (
                <IconComponent
                  stroke={COLORS.BRAND[100]}
                  strokeWidth={1.5}
                  width={RFValue(24)}
                  height={RFValue(24)}
                />
              )}
            </ContainerRadius>
            <ContainerTitle>
              <Title>{displayName}</Title>
            </ContainerTitle>
          </Container>
        )
      })}
    </>
  )
}

export { RadiusComponent }
