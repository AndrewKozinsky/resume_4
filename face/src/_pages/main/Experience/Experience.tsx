import React from 'react'
import { experienceConfig, ExperienceConfigItem } from './fn/config'
import './Experience.scss'

function Experience() {
	return (
		<div className="experience">
			<div className="experience-items">
				{experienceConfig.toReversed().map((configItem) => {
					return <ExperienceItem configItem={configItem} />
				})}
			</div>
			<div>
				<p>
					Мне интересно стать разработчиком полного цикла, поэтому с декабря 2023 проходил
					обучении в it-incubator.io/education/back-end. Поэтому поисками работы не
					занимался.
				</p>
			</div>
		</div>
	)
}

export default Experience

type ExperienceItemProps = {
	configItem: ExperienceConfigItem
}

function ExperienceItem(props: ExperienceItemProps) {
	const { configItem } = props

	return (
		<div className="experience-item">
			<div className="experience-item-left">
				<p className="experience-time">
					<span>{configItem.startDate}</span>
					<span>{configItem.endDate}</span>
				</p>
				<p className="experience-duration">{configItem.duration}</p>
			</div>
			<div className="experience-item-content">
				<p className="experience-company-name">{configItem.companyName}</p>
				<p className="experience-company-site">
					<a href={'https://' + configItem.companySite} className="link">
						{configItem.companySite}
					</a>
				</p>
				<p className="experience-position">{configItem.position}</p>
				<div className="experience-description">
					{configItem.description.map((item) => {
						return <p>{item}</p>
					})}
				</div>
				<div className="experience-technologies">
					{configItem.technologies.map((item) => {
						return <span className="experience-technology">{item}</span>
					})}
				</div>
			</div>
		</div>
	)
}
