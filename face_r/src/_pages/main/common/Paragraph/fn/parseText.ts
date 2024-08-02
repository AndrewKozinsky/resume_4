type TextConfig = (Text | Link)[]
type Text = {
	type: 'text'
	text: string
}
type Link = {
	type: 'link'
	text: string
}

export function parseText(text: string): TextConfig {
	return []
}
