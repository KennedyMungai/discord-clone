'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ThemeProviderComponent = ({ children }: Props) => {
	return (
		<NextThemesProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
            storageKey='discord-theme'
		>
			{children}
		</NextThemesProvider>
	)
}

export default ThemeProviderComponent
