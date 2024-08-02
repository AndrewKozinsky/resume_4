import React from 'react'
import type { Metadata } from 'next'
import './_in/style/global.scss'

export const metadata: Metadata = {
	title: 'Андрей Козинский (React и Nest)',
	description: 'Резюме разработчика',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	)
}
