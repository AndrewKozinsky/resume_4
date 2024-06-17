import React from 'react'
import { LangType } from '../../../config/config'
import { headConfig } from './fn/headConfig'
import './Head.scss'

type HeadProps = {
	lang: LangType
}
function Head(props: HeadProps) {
	const { lang } = props

	return (
		<div className="head">
			<div className="head__left-site">
				<img
					src="/images/my_photo.jpg"
					className="head__author-photo"
					alt={headConfig.myPhotoAlt[lang]}
				/>
			</div>
			<div className="head__right-site">
				<p className="head__position">{headConfig.authorPosition[lang]}</p>
				<h1 className="head__name">{headConfig.authorName[lang]}</h1>
				<p className="head__text">
					<strong>{headConfig.skillLevelHeader[lang]}</strong>{' '}
					{headConfig.skillLevelValue[lang]}
				</p>
				<p className="head__text">
					<strong>{headConfig.locationHeader[lang]}</strong>{' '}
					{headConfig.locationValue[lang]}
				</p>
				<p className="head__text">
					<strong>{headConfig.salaryHeader[lang]}</strong> {headConfig.salaryValue[lang]}
				</p>
				<p className="head__text">{headConfig.movementStatus[lang]}</p>
				<p className="head__pdf-paragraph">
					<a href="/resume.pdf" className="link" title={headConfig.pdfResume[lang]}>
						{headConfig.pdfResume[lang]}
					</a>
				</p>
			</div>
		</div>
	)
}

export default Head
