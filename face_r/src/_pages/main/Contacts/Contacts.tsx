import React from 'react'
import { LangType } from '../../../config/config'
import Header from '../common/Header/Header'
import { metaConfig } from './fn/metaConfig'
import './Contacts.scss'

type ContactsProps = {
	lang: LangType
}

function Contacts(props: ContactsProps) {
	const { lang } = props

	return (
		<div>
			<Header tag="h2">{metaConfig.sectionHeader[lang]}</Header>
			<div className="contacts">
				<p>{metaConfig.email[lang]}</p>
				<p>{metaConfig.phone[lang]}</p>
				<p>{metaConfig.telegram[lang]}</p>
			</div>
		</div>
	)
}

export default Contacts
