import React from 'react'
import { LangType } from '../../../config/config'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import ParagraphsContainer from '../common/ParagraphsContainer/ParagraphsContainer'
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
			<ParagraphsContainer>
				<Paragraph>{metaConfig.email[lang]}</Paragraph>
				<Paragraph>{metaConfig.phone[lang]}</Paragraph>
				<Paragraph>{metaConfig.telegram[lang]}</Paragraph>
			</ParagraphsContainer>
		</div>
	)
}

export default Contacts
