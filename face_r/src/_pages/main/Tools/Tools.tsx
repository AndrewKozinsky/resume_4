import React from 'react'
import Header from '../common/Header/Header'
import { ToolConfig, toolsConfig } from './fn/config'
import './Tools.scss'

function Tools() {
	return (
		<div>
			<Header tag="h2">Инструменты</Header>
			<div className="tools">
				{toolsConfig.map((configItem) => {
					return <Tool configItem={configItem} />
				})}
			</div>
		</div>
	)
}

export default Tools

type ToolProps = {
	configItem: ToolConfig
}

function Tool(props: ToolProps) {
	const { configItem } = props

	return (
		<div className="tool">
			<div className="tool__left-part">
				<Header tag="h3">{configItem.toolName}</Header>
			</div>
			<div className="tool__right-part">
				<div className="tool__description">
					{configItem.description.map((text) => {
						return <p>{text}</p>
					})}
				</div>
			</div>
		</div>
	)
}
