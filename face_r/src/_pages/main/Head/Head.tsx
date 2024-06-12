import React from 'react'
import './Head.scss'

function Head() {
	return (
		<div className="head">
			<div className="head__left-site">
				<img
					src="/images/my_photo.jpg"
					className="head__author-photo"
					alt="Фотография Андрея Козинского"
				/>
			</div>
			<div className="head__right-site">
				<p className="head__position">Fullstack (React и Nest)</p>
				<h1 className="head__name">Андрей Козинский</h1>
				<p className="head__text">
					<strong>Уровень:</strong> специалист
				</p>
				<p className="head__text">
					<strong>Место:</strong> Россия, Оренбург
				</p>
				<p className="head__text">
					<strong>З/п:</strong> 150 000 руб. (1500 долл.)
				</p>
				<p className="head__text">Не готов к переезду</p>
				<p className="head__pdf-paragraph">
					<a href="/resume.pdf" className="link" title="Резюме в PDF">
						Резюме в PDF
					</a>
				</p>
			</div>
		</div>
	)
}

export default Head
