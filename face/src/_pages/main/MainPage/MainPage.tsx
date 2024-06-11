import React from 'react'
import Contacts from '../Contacts/Contacts'
import Experience from '../Experience/Experience'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Tools from '../Tools/Tools'
import './MainPage.scss'

function MainPage() {
	return (
		<div className="page-wrapper">
			<Header />
			<Experience />
			<Tools />
			<Projects />
			<Contacts />
		</div>
	)
}

export default MainPage
