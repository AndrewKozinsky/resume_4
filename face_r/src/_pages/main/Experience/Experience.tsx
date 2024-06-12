import React from 'react'
import Header from '../common/Header/Header'
import Sticker from '../common/Sticker/Sticker'
import { experienceConfig, ExperienceConfigItem } from './fn/config'
import './Experience.scss'

function Experience() {
	return (
		<div>
			<Header tag="h2">Опыт работы</Header>
			<div className="experience">
				<div className="experience__items">
					{experienceConfig.toReversed().map((configItem) => {
						return <ExperienceItem configItem={configItem} />
					})}
				</div>
				<p className="experience__note">
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
		<div className="experience__item">
			<div className="experience__item-left">
				<p className="experience__time">
					<span>{configItem.startDate}</span>
					<span>{configItem.endDate}</span>
				</p>
				<p className="experience__duration">{configItem.duration}</p>
			</div>
			<div className="experience__item-content">
				<p className="experience__company-name">{configItem.companyName}</p>
				<p className="experience__company-site">
					<a href={'https://' + configItem.companySite} className="link">
						{configItem.companySite}
						<span className="outer-site-sign" />
					</a>
				</p>
				<p className="experience__position">{configItem.position}</p>
				<div className="experience__description">
					{configItem.description.map((item) => {
						return <p>{item}</p>
					})}
				</div>
				<div className="experience__technologies">
					{configItem.technologies.map((technology) => {
						return <Sticker>{technology}</Sticker>
					})}
				</div>

				{configItem.achievements && (
					<div className="experience__achievements">
						<h4 className="experience__achievements-header">Достижения</h4>
						<ul className="experience__achievements-list">
							{configItem.achievements.map((achievement) => {
								return <li className="experience__achievement">{achievement}</li>
							})}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}
