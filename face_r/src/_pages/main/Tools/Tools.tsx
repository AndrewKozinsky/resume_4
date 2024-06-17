import React from 'react'
import { LangType } from '../../../config/config'
import Header from '../common/Header/Header'
import { ToolConfig, toolsConfig } from './fn/config'
import { metaConfig } from './fn/metaConfig'
import './Tools.scss'

type ToolsProps = {
	lang: LangType
}

function Tools(props: ToolsProps) {
	const { lang } = props

	return (
		<div>
			<Header tag="h2">{metaConfig.sectionHeader[lang]}</Header>
			<div className="tools">
				{toolsConfig.map((configItem) => {
					return <Tool configItem={configItem} lang={lang} />
				})}
			</div>
		</div>
	)
}

export default Tools

type ToolProps = {
	configItem: ToolConfig
	lang: LangType
}

function Tool(props: ToolProps) {
	const { configItem, lang } = props

	return (
		<div className="tool">
			<div className="tool__left-part">
				<Header tag="h3">{configItem.toolName[lang]}</Header>
			</div>
			<div className="tool__right-part">
				<div className="tool__description">
					{configItem.description[lang].map((text) => {
						return <p>{text}</p>
					})}
				</div>
			</div>
		</div>
	)
}
