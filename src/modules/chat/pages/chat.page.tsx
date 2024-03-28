import { avatar, data } from 'app/modules/home/utils/constants'
import { AppHeader } from 'app/shared/components/headers/app-header/app-header.component'
import React from 'react'
import { ChatView } from '../components/chat-view/chat-view.component'
import { Container } from './chat.styles'

const Chat: React.FC = () => {
  return (
    <Container>
      <AppHeader arrowLeft message />
      <ChatView data={data} avatarUri={avatar.uri} />
    </Container>
  )
}

export { Chat }
