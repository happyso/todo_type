import React, { ReactElement, useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { appThemeMode } from '../atom/atoms'

interface Props {
    children: JSX.Element | JSX.Element[]
}

function AppThemeProvider(props: Props): ReactElement {
    const mode = useRecoilValue(appThemeMode)
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#61dafb',
                    },
                    secondary: {
                        main: '#EB9612C',
                    },
                },
            }),
        [mode]
    )
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}

export default AppThemeProvider
