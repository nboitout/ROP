export const DRAFT_KEY = 'chapter-14-rework'

export function draftBackHref(isAdmin: boolean): string {
  return isAdmin ? '/admin/chapitres/nouvelle-edition' : '/'
}
