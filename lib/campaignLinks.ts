import { SITE_URL } from '@/lib/site'

export type CampaignLink = {
  id: string
  label: string
  audience: string
  path: string
  source: string
  medium: string
  campaign: string
  content?: string
  url: string
}

type CampaignLinkInput = Omit<CampaignLink, 'url'>

function buildCampaignUrl(input: CampaignLinkInput): string {
  const url = new URL(input.path, SITE_URL)
  url.searchParams.set('utm_source', input.source)
  url.searchParams.set('utm_medium', input.medium)
  url.searchParams.set('utm_campaign', input.campaign)
  if (input.content) url.searchParams.set('utm_content', input.content)
  return url.toString()
}

const CAMPAIGN_LINK_INPUTS: CampaignLinkInput[] = [
  {
    id: 'facebook-free-chapters',
    label: 'Facebook - free chapters',
    audience: 'Warm social audience',
    path: '/#acces-libre',
    source: 'facebook',
    medium: 'social',
    campaign: 'prelaunch_free_chapters',
    content: 'organic_post',
  },
  {
    id: 'linkedin-professionals',
    label: 'LinkedIn - professionals',
    audience: 'Manual-therapy professionals',
    path: '/#acces-libre',
    source: 'linkedin',
    medium: 'social',
    campaign: 'prelaunch_professionals',
    content: 'organic_post',
  },
  {
    id: 'email-free-chapters',
    label: 'Email - free chapters',
    audience: 'Existing R.O.P. contacts',
    path: '/#acces-libre',
    source: 'email',
    medium: 'newsletter',
    campaign: 'prelaunch_free_chapters',
    content: 'main_cta',
  },
  {
    id: 'email-launch-book',
    label: 'Email - book launch',
    audience: 'Registered readers and Institute contacts',
    path: '/#acheter',
    source: 'email',
    medium: 'newsletter',
    campaign: 'launch_book',
    content: 'main_cta',
  },
  {
    id: 'rop-institute',
    label: 'R.O.P. Institute site',
    audience: 'Training website visitors',
    path: '/#acces-libre',
    source: 'rop_institute',
    medium: 'referral',
    campaign: 'professional_network',
    content: 'site_link',
  },
  {
    id: 'direct-professional-share',
    label: 'Direct professional share',
    audience: 'One-to-one practitioner outreach',
    path: '/#acces-libre',
    source: 'direct',
    medium: 'manual_outreach',
    campaign: 'professional_network',
    content: 'personal_message',
  },
]

export const campaignLinks: CampaignLink[] = CAMPAIGN_LINK_INPUTS.map((input) => ({
  ...input,
  url: buildCampaignUrl(input),
}))
