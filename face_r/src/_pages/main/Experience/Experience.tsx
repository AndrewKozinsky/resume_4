import React from 'react'
import { LangType } from '../../../config/config'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import ParagraphsContainer from '../common/ParagraphsContainer/ParagraphsContainer'
import Sticker from '../common/Sticker/Sticker'
import { experienceConfig, ExperienceConfigItem } from './fn/config'
import { metaConfig } from './fn/metaConfig'
import './Experience.scss'

type ExperienceProps = {
	lang: LangType
}

function Experience(props: ExperienceProps) {
	const { lang } = props

	return (
		<div>
			<Header tag="h2">{metaConfig.sectionHeader[lang]}</Header>
			<div className="experience">
				<div className="experience__items">
					{experienceConfig.toReversed().map((configItem) => {
						return <ExperienceItem configItem={configItem} lang={lang} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Experience

type ExperienceItemProps = {
	configItem: ExperienceConfigItem
	lang: LangType
}

function ExperienceItem(props: ExperienceItemProps) {
	const { configItem, lang } = props

	return (
		<div className="experience__item">
			<div className="experience__item-left">
				<p className="experience__time">
					<span>{configItem.startDate[lang]}</span>
					<span>{configItem.endDate[lang]}</span>
				</p>
				<p className="experience__duration">{configItem.duration[lang]}</p>
			</div>
			<div className="experience__item-content">
				<p className="experience__company-name">{configItem.companyName[lang]}</p>
				<p className="experience__company-site">
					<a href={'https://' + configItem.companySite} className="link">
						{configItem.companySite}
						<span className="outer-site-sign" />
					</a>
				</p>
				<p className="experience__position">{configItem.position[lang]}</p>
				<ParagraphsContainer>
					{configItem.description[lang].map((item) => {
						return <Paragraph>{item}</Paragraph>
					})}
				</ParagraphsContainer>
				<div className="experience__technologies">
					{configItem.technologies.map((technology) => {
						return <Sticker>{technology}</Sticker>
					})}
				</div>

				{configItem.achievements && (
					<div className="experience__achievements">
						<h4 className="experience__achievements-header">
							{metaConfig.achievementsSubheader[lang]}
						</h4>
						<ul className="experience__achievements-list">
							{configItem.achievements[lang].map((achievement) => {
								return <li className="experience__achievement">{achievement}</li>
							})}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}
