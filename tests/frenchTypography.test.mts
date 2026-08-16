import assert from 'node:assert/strict'
import test from 'node:test'

import { applyFrenchNonBreakingPunctuation, applyLocalizedTypography } from '../lib/frenchTypography'

test('French double punctuation stays attached to the preceding word', () => {
  assert.equal(
    applyFrenchNonBreakingPunctuation('Premier item ; deuxième : pourquoi ? oui !'),
    'Premier item\u202f; deuxième\u202f: pourquoi\u202f? oui\u202f!'
  )
})

test('French guillemets keep their inner spaces non-breaking', () => {
  assert.equal(
    applyFrenchNonBreakingPunctuation('Le terme « vitalité » reste clinique.'),
    'Le terme «\u202fvitalité\u202f» reste clinique.'
  )
})

test('punctuation without an existing space and non-French text stay unchanged', () => {
  assert.equal(applyFrenchNonBreakingPunctuation('https://example.com:8080'), 'https://example.com:8080')
  assert.equal(applyLocalizedTypography('Text : example ;', 'en'), 'Text : example ;')
})
