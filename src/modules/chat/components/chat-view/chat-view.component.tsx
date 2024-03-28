import { MAP_ICON_DEFAULT } from 'app/shared/assets/icons-svg'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { useTheme } from 'styled-components'

import { MAP_IMAGE_DEFAULT } from 'app/shared/assets/images'
import { useFetchMessages } from 'app/shared/hooks/client/useFetchMessages'
import { Fragment, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { FadeInLeft } from 'react-native-reanimated'
import useChatStore, { ChatMessage } from '../../stores/useChatStore'
import {
  AvatarContainer,
  AvatarContainerMessage,
  AvatarImage,
  AvatarImageHeader,
  Button,
  ButtonFooter,
  Container,
  ContainerCenterAnimated,
  ContainerFooter,
  ContainerHeader,
  ContainerInput,
  ContainerLeft,
  ContainerMessageLeft,
  ContainerMessageRight,
  ContainerRight,
  ImageBackground,
  Input,
  Message,
  ScrollMessage,
} from './chat-view.component.styles'

type CardProps = {
  data?: any
  avatarUri?: string
}

const IconRefresh = MAP_ICON_DEFAULT.REFRESH
const IconAdd = MAP_ICON_DEFAULT.ADD
const IconSend = MAP_ICON_DEFAULT.SEND

const ImageEmpty = MAP_IMAGE_DEFAULT.CHAT_EMPTY_BG
const LogoByBadaro = MAP_ICON_DEFAULT.BYLOGO

const ChatView: React.FC<CardProps> = ({ avatarUri }) => {
  const { COLORS } = useTheme()
  const addMessage = useChatStore((state) => state.addMessage)
  const cleanMessages = useChatStore((state) => state.cleanMessages)
  const messages = useChatStore((state) => state.messages)
  const [newMessageText, setNewMessageText] = useState('')
  const [hasScroll, setHasScroll] = useState(false)

  useFetchMessages({ url: '/messages_bot' })

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.y
    setHasScroll(scrollOffset > 0)
  }

  const handleSendMessage = () => {
    if (newMessageText.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now(),
        text: newMessageText,
        sender: 'user',
      }
      addMessage(newMessage)
      setNewMessageText('')

      setTimeout(() => {
        sendAutomaticBotMessage()
      }, 2000)
    }
  }

  const sendAutomaticBotMessage = () => {
    const botMessage: ChatMessage = {
      id: Date.now() + 1,
      text: 'Olá! Aguarde um momento por favor... Estou processando sua mensagem.',
      sender: 'bot',
    }
    addMessage(botMessage)
  }

  const renderHeader = () => {
    return (
      <ContainerHeader hasScroll={hasScroll}>
        <ContainerLeft>
          <Button
            onPress={() => {
              cleanMessages()
            }}
          >
            <IconRefresh
              width={RFValue(18)}
              height={RFValue(24)}
              stroke={COLORS.DARK[100]}
              style={{ marginRight: RFValue(5) }}
            />
            <Message variant="H2">{'Reiniciar'}</Message>
          </Button>
        </ContainerLeft>
        <ContainerRight>
          <Button onPress={() => {}}>
            <Message variant="H2">{'Mais Sobre'}</Message>
            <IconAdd
              width={RFValue(24)}
              height={RFValue(24)}
              stroke={COLORS.DARK[100]}
            />
          </Button>
        </ContainerRight>
      </ContainerHeader>
    )
  }

  const renderEmpty = () => {
    return (
      <ContainerCenterAnimated entering={FadeInLeft.delay(400).duration(400)}>
        <ImageBackground source={ImageEmpty} />
      </ContainerCenterAnimated>
    )
  }

  const renderChat = () => {
    return (
      <ScrollMessage
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {messages.map((message, index) => (
          <Fragment key={`${message.id}-${index}`}>
            {message.sender === 'bot' ? (
              <ContainerLeft>
                <AvatarContainerMessage>
                  <AvatarImage source={{ uri: avatarUri }} />
                </AvatarContainerMessage>
                <ContainerMessageLeft>
                  <Message variant="H2">{message.text}</Message>
                </ContainerMessageLeft>
              </ContainerLeft>
            ) : (
              <ContainerRight>
                <ContainerMessageRight>
                  <Message variant="H2">{message.text}</Message>
                </ContainerMessageRight>
                <AvatarContainerMessage>
                  <AvatarImage source={{ uri: avatarUri }} />
                </AvatarContainerMessage>
              </ContainerRight>
            )}
          </Fragment>
        ))}
      </ScrollMessage>
    )
  }

  return (
    <Container>
      <AvatarContainer>
        <AvatarImageHeader source={{ uri: avatarUri }} />
      </AvatarContainer>
      {renderHeader()}
      {messages.length === 0 && renderEmpty()}
      {messages && renderChat()}
      <ContainerFooter>
        <ContainerInput>
          <ButtonFooter onPress={handleSendMessage}>
            <IconSend
              stroke={COLORS.DARK[100]}
              width={RFValue(24)}
              height={RFValue(24)}
            />
          </ButtonFooter>
          <Input
            placeholder="Escreva sua mensagem"
            multiline
            value={newMessageText}
            onChangeText={setNewMessageText}
          />
        </ContainerInput>
        <LogoByBadaro style={{ position: 'absolute', bottom: 30 }} />
      </ContainerFooter>
    </Container>
  )
}

export { ChatView }
