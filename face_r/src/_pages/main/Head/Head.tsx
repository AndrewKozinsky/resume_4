import React from 'react'
import './Head.scss'

function Head() {
	return (
		<div className="head">
			{/*<div className="head__left-site"></div>*/}
			<div className="head__right-site">
				<p className="head__position">Fullstack (React и Nest)</p>
				<h1 className="head__name">Андрей Козинский</h1>
				<p className="head__level">Уровень: специалист.</p>
			</div>
		</div>
	)
}

export default Head
