import React from 'react'
import './Header.scss'

type HeaderProps = {
	text: string
}

function Header(props: HeaderProps) {
	const { text } = props

	return <h2 className="header">{text}</h2>
}

export default Header
