import React from 'react'
import Contacts from '../Contacts/Contacts'
import Experience from '../Experience/Experience'
import Head from '../Head/Head'
import Projects from '../Projects/Projects'
import Tools from '../Tools/Tools'
import './MainPage.scss'

function MainPage() {
	return (
		<div className="page-wrapper">
			<Head />
			<Experience />
			<Tools />
			<Projects />
			<Contacts />
		</div>
	)
}

export default MainPage
