// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<UserProvider>
				<body>{children}</body>
			</UserProvider>
		</html>
	)
}
