import React from 'react'
import Contacts from '../Contacts/Contacts'
import Experience from '../Experience/Experience'
import Footer from '../Footer/Footer'
import Head from '../Head/Head'
import Projects from '../Projects/Projects'
import Tools from '../Tools/Tools'
import './MainPage.scss'

function MainPage() {
	return (
		<div className="page-wrapper">
			<div className="page-part">
				<Head />
				<Experience />
				<Tools />
				<Projects />
				<Contacts />
				<Footer />
			</div>
			<div className="page-part">
				<Head />
				<Experience />
				<Tools />
				<Projects />
				<Contacts />
				<Footer />
			</div>
		</div>
	)
}

export default MainPage
