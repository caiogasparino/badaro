import { create } from 'zustand'

export interface ChatMessage {
  id: number
  text: string
  sender: 'user' | 'bot'
}

interface ChatState {
  messages: ChatMessage[]
  addMessage: (message: ChatMessage) => void
  cleanMessages: () => void
}

const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  cleanMessages: () => set(() => ({ messages: [] })),
}))

export default useChatStore
