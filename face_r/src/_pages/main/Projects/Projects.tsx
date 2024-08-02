import React from 'react'
import { LangType } from '../../../config/config'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import ParagraphsContainer from '../common/ParagraphsContainer/ParagraphsContainer'
import Sticker from '../common/Sticker/Sticker'
import { projectsConfig, ProjectConfig } from './fn/config'
import './Projects.scss'
import { metaConfig } from './fn/metaConfig'

type ProjectsProps = {
	lang: LangType
}

function Projects(props: ProjectsProps) {
	const { lang } = props

	return (
		<div>
			<Header tag="h2">{metaConfig.sectionHeader[lang]}</Header>
			<div className="projects">
				{projectsConfig.map((configItem) => {
					return <ExperienceItem lang={lang} configItem={configItem} />
				})}
			</div>
		</div>
	)
}

export default Projects

type ExperienceItemProps = {
	lang: LangType
	configItem: ProjectConfig
}

function ExperienceItem(props: ExperienceItemProps) {
	const { lang, configItem } = props

	return (
		<div className="project">
			<Header tag="h3">{configItem.name[lang]}</Header>
			{configItem.github && (
				<p className="project__site">
					<a href={'https://' + configItem.github} className="link">
						{configItem.github}
					</a>
				</p>
			)}

			{configItem.description && (
				<ParagraphsContainer>
					{configItem.description[lang].map((item) => {
						return <Paragraph>{item}</Paragraph>
					})}
				</ParagraphsContainer>
			)}
			<div className="project__technologies">
				{configItem.technologies.map((item) => {
					return <Sticker>{item}</Sticker>
				})}
			</div>
		</div>
	)
}
