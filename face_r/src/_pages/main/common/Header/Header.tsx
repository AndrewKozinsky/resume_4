import React from 'react'
import cn from 'classnames'
import './Header.scss'

type HeaderProps = {
	children: string
	tag: 'h2' | 'h3'
}

function Header(props: HeaderProps) {
	const { tag, children } = props

	const Tag = tag

	return <Tag className={cn('header', 'header--' + tag)}>{children}</Tag>
	// return <Tag>555</Tag>
}

export default Header
