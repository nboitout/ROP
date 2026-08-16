const NARROW_NO_BREAK_SPACE = '\u202f'

/**
 * Keeps French two-part punctuation attached to the preceding word without
 * changing the author's punctuation. Only existing spaces are normalized, so
 * URLs, times, and other colon usages without a space are left untouched.
 */
export function applyFrenchNonBreakingPunctuation(text: string): string {
  return text
    .replace(/[ \u00a0\u202f]+([;:?!»])/g, `${NARROW_NO_BREAK_SPACE}$1`)
    .replace(/«[ \u00a0\u202f]+/g, `«${NARROW_NO_BREAK_SPACE}`)
}

export function applyLocalizedTypography(text: string, lang: string): string {
  return lang === 'fr' ? applyFrenchNonBreakingPunctuation(text) : text
}
