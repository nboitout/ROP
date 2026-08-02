// Shared between the two reading modes of the chapter 5 rework draft
// (/lecture/chapitre-5-rework and /chapitre-5-rework).

/** Key this draft is granted under — see lib/access.ts and mint-draft-grant.ts. */
export const DRAFT_KEY = 'chapter-5-rework'

/**
 * "← Tous les chapitres" target. The admin chapter list is behind the admin
 * gate, so sending a grant holder there would bounce them to the login screen;
 * they get the homepage instead.
 */
export function draftBackHref(isAdmin: boolean): string {
  return isAdmin ? '/admin/chapitres' : '/'
}
