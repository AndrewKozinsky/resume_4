import React from 'react'
import Header from '../common/Header/Header'
import { projectsConfig, ProjectConfig } from './fn/config'
import './Projects.scss'

function Projects() {
	return (
		<div>
			<Header text="Проекты" />
			<div className="projects">
				{projectsConfig.map((configItem) => {
					return <ExperienceItem configItem={configItem} />
				})}
			</div>
		</div>
	)
}

export default Projects

type ExperienceItemProps = {
	configItem: ProjectConfig
}

function ExperienceItem(props: ExperienceItemProps) {
	const { configItem } = props

	return (
		<div className="project">
			<p className="project__name">{configItem.name}</p>
			{configItem.github && (
				<p className="project__site">
					<a href={'https://' + configItem.github} className="link">
						{configItem.github}
					</a>
				</p>
			)}

			{configItem.description && (
				<div className="project__description">
					{configItem.description.map((item) => {
						return <p>{item}</p>
					})}
				</div>
			)}
			<div className="project__technologies">
				{configItem.technologies.map((item) => {
					return <p className="project__technology">{item}</p>
				})}
			</div>
		</div>
	)
}
