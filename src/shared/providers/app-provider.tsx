import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactElement } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import useThemeStore from 'app/modules/home/stores/useThemeStore'
import { THEME_LIGHT, THEME_LIGHT_ORANGE } from '../design/themes/theme-light'
import { queryClient } from '../libs/react-query/query-client'

type AppProviderProps = {
  children: ReactElement
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const theme = useThemeStore((state) => state.theme)

  const THEME = theme === 'THEME_LIGHT' ? THEME_LIGHT : THEME_LIGHT_ORANGE

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <ThemeProvider theme={THEME}>
          <BottomSheetModalProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </BottomSheetModalProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export { AppProvider }
