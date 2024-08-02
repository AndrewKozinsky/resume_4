import React from 'react'
import './Paragraph.scss'

type HeaderProps = {
	children: string
}

function Paragraph(props: HeaderProps) {
	const { children } = props

	return <p className="paragraph">{children}</p>
}

export default Paragraph
