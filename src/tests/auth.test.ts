import { describe, it, expect } from 'vitest'
import { getAPIKey } from '../api/auth'

describe('getAPIKey', () => {
  it('returns null when there is no Authorization header', () => {
    const headers = {}
    expect(getAPIKey(headers)).toBeNull()
  })

  it('returns null when the header does not start with "ApiKey"', () => {
    const headers = { authorization: 'Bearer sometoken123' }
    expect(getAPIKey(headers)).toBeNull()
  })

  it('extracts and returns the key when header is "ApiKey <key>"', () => {
    const headers = { authorization: 'ApiKey abcdef-12345-xyz' }
    expect(getAPIKey(headers)).toEqual('abcdef-12345-xyz')
  })
})

