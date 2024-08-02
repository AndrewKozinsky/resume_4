import React from 'react'
import './ParagraphsContainer.scss'

type HeaderProps = {
	children: React.ReactNode[]
}

function ParagraphsContainer(props: HeaderProps) {
	const { children } = props

	return (
		<div className="paragraphs_container">
			{children.map((item) => {
				return item
			})}
		</div>
	)
}

export default ParagraphsContainer
