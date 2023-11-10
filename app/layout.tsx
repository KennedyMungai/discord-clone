import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import UserProvider from '@/Providers/UserProvider'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Discord Clone',
	description: 'A simple discord clone'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<UserProvider>
				<body className={open_sans.className}>{children}</body>
			</UserProvider>
		</html>
	)
}
