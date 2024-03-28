import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { View, ViewProps } from 'react-native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const AnimatedView = Animated.createAnimatedComponent(View)

interface ContainerHeaderProps extends ViewProps {
  hasScroll?: boolean
}

export const Container = styled.View`
  flex: 1;
  z-index: 9999;
  margin-top: ${RFValue(120)}px;
  border-top-left-radius: ${RFValue(24)}px;
  border-top-right-radius: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
`
export const ContainerHeader = styled.View.attrs<ContainerHeaderProps>({})`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-top-left-radius: ${RFValue(24)}px;
  border-top-right-radius: ${RFValue(24)}px;
  padding: ${({ theme }) => theme.METRICS.PADDING.x16}px;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};

  ${(props) =>
    props.hasScroll &&
    `
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.407);
    elevation: 10;
  `}
`

export const ContainerCenterAnimated = styled(AnimatedView)`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`
export const ContainerCenter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`
export const ContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
`
export const ContainerRight = styled.View`
  flex-direction: row;
  align-items: center;
`
export const ScrollMessage = styled.ScrollView`
  flex: 1;
  padding-horizontal: ${RFPercentage(3)}px;
`
export const ContainerMessageLeft = styled.View`
  flex: 1;
  margin-left: ${RFPercentage(2)}px;
  margin-vertical: ${RFPercentage(2)}px;
  padding-horizontal: ${RFPercentage(2)}px;
  padding-vertical: ${RFPercentage(1)}px;
  flex-direction: row;
  border-width: 3px;
  border-color: ${({ theme }) => theme.COLORS.BASE[300]};
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
  border-bottom-right-radius: ${RFValue(20)}px;
`
export const ContainerMessageRight = styled.View`
  flex: 1;
  margin-right: ${RFPercentage(2)}px;
  margin-vertical: ${RFPercentage(2)}px;
  padding-horizontal: ${RFPercentage(2)}px;
  padding-vertical: ${RFPercentage(1)}px;
  flex-direction: row;
  border-width: 3px;
  border-color: ${({ theme }) => theme.COLORS.BASE[300]};
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
  border-bottom-left-radius: ${RFValue(20)}px;
`
export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFPercentage(1.5)}px;
  margin-bottom: ${RFPercentage(3)}px;
`
export const ContainerFooter = styled.View`
  flex-direction: column;
  align-items: center;
  height: ${RFPercentage(20)}px;
  padding-horizontal: ${RFPercentage(1)}px;
  padding-vertical: ${RFPercentage(3)}px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.COLORS.BASE[300]};
`
export const AvatarContainer = styled.View`
  position: absolute;
  z-index: 9999;
  align-self: center;
  top: ${RFPercentage(-4)}px;
  background-color: transparent;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.407);
  elevation: 10;
`
export const AvatarContainerMessage = styled.View`
  background-color: transparent;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.407);
  elevation: 10;
`
export const AvatarImageHeader = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`
export const AvatarImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`
export const Input = styled.TextInput`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x16}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[500]};
  color: ${({ theme }) => theme.COLORS.DARK[100]};
  width: 90%;
  padding: ${RFPercentage(1.5)}px;
  padding-left: ${RFPercentage(5)}px;
  align-self: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BASE[50]};
  border-width: 3px;
  border-color: ${({ theme }) => theme.COLORS.BASE[300]};
`
export const Message = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[500]};
`
export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const ButtonFooter = styled.TouchableOpacity`
  z-index: 99999;
  position: absolute;
  left: ${RFPercentage(1.5)}px;
`
export const TextButton = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY[500]};
  color: ${({ theme }) => theme.COLORS.DARK[100]};
  text-align: center;
`

export const ImageBackground = styled.Image`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(40)}px;
  opacity: 0.6;
  margin-top: ${RFPercentage(30)}px;
  border-radius: 16px;
`
