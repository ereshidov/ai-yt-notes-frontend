'use client'
import React, { createContext, useMemo, useState } from 'react'

import {
  ThemeProvider as MUIThemeProvider,
  createTheme
} from '@mui/material/styles'

import { PropsWithChildren } from 'react'
import { CssBaseline, PaletteMode } from '@mui/material'

interface ColorModeContextShape {
  toggleColorMode: () => void
}

export const ColorModeContext = createContext<ColorModeContextShape>({
  toggleColorMode: () => {}
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('dark')

  const colorMode = useMemo((): ColorModeContextShape => {
    return {
      toggleColorMode: () => {
        setThemeMode((prevThemeMode) =>
          prevThemeMode === 'dark' ? 'light' : 'dark'
        )
      }
    }
  }, [])

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: themeMode
      }
    })
  }, [themeMode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  )
}
