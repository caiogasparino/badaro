import useChatStore, { ChatMessage } from 'app/modules/chat/stores/useChatStore'
import { axiosInstance } from 'app/shared/libs/axios/client'
import { useEffect } from 'react'

interface FetchMessagesProps {
  url: string
}

export const useFetchMessages = ({ url }: FetchMessagesProps): void => {
  const addMessage = useChatStore((state) => state.addMessage)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(url)
        response.data.forEach((message: ChatMessage) => {
          addMessage(message)
        })
      } catch (error) {
        console.error('Erro ao buscar mensagens: ', error)
      }
    }

    fetchData()
  }, [url, addMessage])
}
