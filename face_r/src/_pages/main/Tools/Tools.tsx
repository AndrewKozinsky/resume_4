import React from 'react'
import Header from '../common/Header/Header'
import { ToolConfig, toolsConfig } from './fn/config'
import './Tools.scss'

function Tools() {
	return (
		<div>
			<Header text="Инстурменты" />
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
		<div className="tools__item">
			<p className="tools__item-name">{configItem.toolName}</p>
			<div className="tools__item-description">
				{configItem.description.map((text) => {
					return <p>{text}</p>
				})}
			</div>
		</div>
	)
}
