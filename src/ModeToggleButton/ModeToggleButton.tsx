import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { IconButton } from '@mui/material'
import { appThemeMode, ThemeMode } from '../atom/atoms'

interface DynamicIconProps {
    mode: ThemeMode
}

function DynamicIcon({ mode }: DynamicIconProps): ReactElement {
    if (mode === 'dark') return <div>다크</div>
    return <div>라이트</div>
}

function ModeToggleButton(): ReactElement {
    const [mode, setMode] = useRecoilState(appThemeMode)

    const toggleMode = () => {
        setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    }

    return (
        <IconButton onClick={toggleMode} sx={{ width: 40, height: 40 }}>
            <DynamicIcon mode={mode} />
        </IconButton>
    )
}

export default ModeToggleButton
