import type { Metadata } from 'next'
import './_in/style/global.scss'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
	title: 'Андрей Козинский (React и Nest)',
	description: 'Резюме разработчика',
}

//👇 Configure our font object
const montserrat = Montserrat({
	subsets: ['cyrillic'],
	display: 'swap',
	weight: ['400', '500', '600'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru" className={montserrat.className}>
			<body>{children}</body>
		</html>
	)
}
