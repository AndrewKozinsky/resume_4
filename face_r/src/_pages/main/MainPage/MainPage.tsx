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
				<Head lang="rus" />
				<Experience lang="rus" />
				<Tools lang="rus" />
				<Projects lang="rus" />
				<Contacts lang="rus" />
				<Footer lang="rus" />
			</div>
			<div className="page-part">
				<Head lang="eng" />
				<Experience lang="eng" />
				<Tools lang="eng" />
				<Projects lang="eng" />
				<Contacts lang="eng" />
				<Footer lang="eng" />
			</div>
		</div>
	)
}

export default MainPage
