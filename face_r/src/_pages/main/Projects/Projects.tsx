import React from 'react'
import { projectsConfig, ProjectConfig } from './fn/config'

function Projects() {
	return (
		<div>
			<div>
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
		<div>
			<p>{configItem.name}</p>
			{configItem.github && <p>{configItem.github}</p>}
			{configItem.description && (
				<div>
					{configItem.description.map((item) => {
						return <p>{item}</p>
					})}
				</div>
			)}
			<div>
				{configItem.technologies.map((item) => {
					return <p>{item}</p>
				})}
			</div>
		</div>
	)
}
