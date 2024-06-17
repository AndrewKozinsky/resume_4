import React from 'react'
import { LangType } from '../../../config/config'
import { metaConfig } from './fn/metaConfig'
import './Footer.scss'

type FooterProps = {
	lang: LangType
}

function Footer(props: FooterProps) {
	const { lang } = props

	return (
		<div className="footer">
			<p>{metaConfig.agreement[lang]}</p>
		</div>
	)
}

export default Footer
