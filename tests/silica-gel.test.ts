import { expect, test, describe, spyOn } from 'bun:test'
// @ts-ignore
import { SILICA_GEL } from '../src'

describe('SILICA_GEL', () => {
	test('just works', () => {
		const consoleSpy = spyOn(console, 'log')
		SILICA_GEL()
		expect(consoleSpy).toHaveBeenCalledWith(
			'DESICCANT SILICA GEL THROW AWAY "DO NOT EAT"',
		)
		consoleSpy.mockRestore()
	})
})
