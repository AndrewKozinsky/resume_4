import React from 'react'
import Header from '../common/Header/Header'
import './Contacts.scss'

function Contacts() {
	return (
		<div>
			<Header tag="h2">Контакты</Header>
			<div className="contacts">
				<p>andkozinsky@gmail.com</p>
				<p>8 (919) 842-35-99</p>
				<p>Telegram: @AndrewKozinsky</p>
			</div>
		</div>
	)
}

export default Contacts
