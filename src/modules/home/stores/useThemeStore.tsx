import { create } from 'zustand'

interface ThemeState {
  theme: string
  setTheme: (theme: string) => void
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'THEME_LIGHT',
  setTheme: (theme: string) => set({ theme }),
}))

export default useThemeStore
