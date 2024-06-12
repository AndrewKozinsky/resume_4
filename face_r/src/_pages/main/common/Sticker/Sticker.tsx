import React from 'react'
import './Sticker.scss'

type StickerProps = {
	children: string
}
function Sticker(props: StickerProps) {
	return <span className="sticker">{props.children}</span>
}

export default Sticker
