export const DRAFT_KEY = 'chapter-3-rework'

export function draftBackHref(isAdmin: boolean): string {
  return isAdmin ? '/admin/chapitres/nouvelle-edition' : '/'
}
