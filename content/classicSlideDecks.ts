import { chapter1Slides, chapter1SlidesEn } from './chapter1.slidesync'
import { chapter2Slides, chapter2SlidesEn } from './chapter2.slidesync'
import { chapter3ReworkSlides, chapter3ReworkSlidesEn } from './chapter3-rework.slidesync'
import { chapter4ReworkSlides, chapter4ReworkSlidesEn } from './chapter4-rework.slidesync'
import { chapter5ReworkSlides } from './chapter5-rework.slidesync'
import { chapter5SlidesDe, chapter5SlidesEn, chapter5SlidesEs, chapter5SlidesIt } from './chapter5.slidesync'
import { chapter6Slides, chapter6SlidesEn } from './chapter6.slidesync'
import { chapter7Slides, chapter7SlidesEn } from './chapter7.slidesync'
import { chapter8Slides, chapter8SlidesEn } from './chapter8.slidesync'
import { chapter9Slides, chapter9SlidesEn } from './chapter9.slidesync'
import { chapter10Slides, chapter10SlidesEn } from './chapter10.slidesync'
import { chapter11Slides, chapter11SlidesEn } from './chapter11.slidesync'
import { chapter12Slides, chapter12SlidesEn } from './chapter12.slidesync'
import { chapter13Slides, chapter13SlidesEn } from './chapter13.slidesync'
import { chapter14Slides, chapter14SlidesDe, chapter14SlidesEn, chapter14SlidesEs, chapter14SlidesIt } from './chapter14.slidesync'
import { chapter15Slides, chapter15SlidesDe, chapter15SlidesEn, chapter15SlidesEs, chapter15SlidesIt } from './chapter15.slidesync'
import { chapter16Slides, chapter16SlidesDe, chapter16SlidesEn, chapter16SlidesEs, chapter16SlidesIt } from './chapter16.slidesync'
import { chapter17Slides, chapter17SlidesDe, chapter17SlidesEn, chapter17SlidesEs, chapter17SlidesIt } from './chapter17.slidesync'
import { chapter18Slides, chapter18SlidesDe, chapter18SlidesEn, chapter18SlidesEs, chapter18SlidesIt } from './chapter18.slidesync'
import { chapter19Slides } from './chapter19.slidesync'
import { chapter20Slides } from './chapter20.slidesync'
import { chapter21Slides } from './chapter21.slidesync'
import type { Lang } from '@/app/i18n/translations'

export type ClassicSlide = { src: string; title: string; orientation?: 'portrait' }

export const classicSlideDecks: Record<string, Partial<Record<Lang, ClassicSlide[]>>> = {
  'chapter-1': { fr: chapter1Slides, en: chapter1SlidesEn },
  'chapter-2': { fr: chapter2Slides, en: chapter2SlidesEn },
  'chapter-3': { fr: chapter3ReworkSlides, en: chapter3ReworkSlidesEn },
  'chapter-4': { fr: chapter4ReworkSlides, en: chapter4ReworkSlidesEn },
  'chapter-5': { fr: chapter5ReworkSlides, en: chapter5SlidesEn, de: chapter5SlidesDe, es: chapter5SlidesEs, it: chapter5SlidesIt },
  'chapter-6': { fr: chapter6Slides, en: chapter6SlidesEn },
  'chapter-7': { fr: chapter7Slides, en: chapter7SlidesEn },
  'chapter-8': { fr: chapter8Slides, en: chapter8SlidesEn },
  'chapter-9': { fr: chapter9Slides, en: chapter9SlidesEn },
  'chapter-10': { fr: chapter10Slides, en: chapter10SlidesEn },
  'chapter-11': { fr: chapter11Slides, en: chapter11SlidesEn },
  'chapter-12': { fr: chapter12Slides, en: chapter12SlidesEn },
  'chapter-13': { fr: chapter13Slides, en: chapter13SlidesEn },
  'chapter-14': { fr: chapter14Slides, en: chapter14SlidesEn, de: chapter14SlidesDe, es: chapter14SlidesEs, it: chapter14SlidesIt },
  'chapter-15': { fr: chapter15Slides, en: chapter15SlidesEn, de: chapter15SlidesDe, es: chapter15SlidesEs, it: chapter15SlidesIt },
  'chapter-16': { fr: chapter16Slides, en: chapter16SlidesEn, de: chapter16SlidesDe, es: chapter16SlidesEs, it: chapter16SlidesIt },
  'chapter-17': { fr: chapter17Slides, en: chapter17SlidesEn, de: chapter17SlidesDe, es: chapter17SlidesEs, it: chapter17SlidesIt },
  'chapter-18': { fr: chapter18Slides, en: chapter18SlidesEn, de: chapter18SlidesDe, es: chapter18SlidesEs, it: chapter18SlidesIt },
  'chapter-19': { fr: chapter19Slides },
  'chapter-20': { fr: chapter20Slides },
  'chapter-21': { fr: chapter21Slides },
}
