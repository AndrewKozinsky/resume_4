import React from 'react'
import { ToolConfig, toolsConfig } from './fn/config'

function Tools() {
	return (
		<div>
			{toolsConfig.map((configItem) => {
				return <Tool configItem={configItem} />
			})}
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
		<div>
			<p>{configItem.toolName}</p>
			<div>
				{configItem.description.map((text) => {
					return <p>{text}</p>
				})}
			</div>
		</div>
	)
}
