import { it } from '@jest/globals'
import expect from 'expect'
import { parseText } from '../parseText'

it('parseText', () => {
	expect(parseText('it')).toEqual([])
})
