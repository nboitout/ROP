export type ReflexMediaPair = {
  pairId: string
  cartographyImageSrc: string
  photoImageSrc?: string
}

const PHOTO_NUMBER_BY_CHAPTER: Record<string, Record<number, number | null>> = {
  'chapter-8': {
    2: 1,
    3: 4,
    5: 6,
    7: 8,
    9: 10,
    12: 11,
    14: 13,
    16: 15,
  },
  'chapter-9': {
    3: 4,
    5: 6,
    7: 8,
    9: null,
  },
}

function publicImagePath(imageSrc?: string, sourcePath?: string): string | null {
  const candidate = imageSrc || sourcePath?.replace(/^public/i, '')
  if (!candidate) return null

  const pathname = candidate.split(/[?#]/, 1)[0]?.replace(/\\/g, '/')
  if (!pathname) return null
  return pathname.startsWith('/') ? pathname : `/${pathname}`
}

function replaceFigureNumber(pathname: string, current: string, next: number): string {
  const padded = String(next).padStart(current.length, '0')
  return pathname.replace(new RegExp(`-${current}(\\.[^.]+)$`, 'i'), `-${padded}$1`)
}

export function resolveReflexMediaPair({
  chapterKey,
  imageSrc,
  sourcePath,
}: {
  chapterKey: string
  imageSrc?: string
  sourcePath?: string
}): ReflexMediaPair | null {
  const cartographyImageSrc = publicImagePath(imageSrc, sourcePath)
  if (!cartographyImageSrc) return null

  const folderMatch = cartographyImageSrc.match(/\/cartographie\/figure-(\d+)-(\d+)\.[^/]+$/i)
  if (folderMatch) {
    const chapterNumber = Number.parseInt(folderMatch[1], 10)
    const figureNumber = Number.parseInt(folderMatch[2], 10)
    if (chapterKey !== `chapter-${chapterNumber}`) return null

    const explicitPhotoNumber = PHOTO_NUMBER_BY_CHAPTER[chapterKey]?.[figureNumber]
    if (explicitPhotoNumber === undefined && figureNumber % 2 === 0) return null

    const photoNumber = explicitPhotoNumber === undefined
      ? figureNumber + 1
      : explicitPhotoNumber

    return {
      pairId: `${chapterKey}:${cartographyImageSrc.toLowerCase()}`,
      cartographyImageSrc,
      ...(photoNumber === null
        ? {}
        : { photoImageSrc: replaceFigureNumber(cartographyImageSrc, folderMatch[2], photoNumber) }),
    }
  }

  const atlasMatch = cartographyImageSrc.match(/\/chapter-14\/(?:[^/]+\/)?figure-14-(25|27)\.[^/]+$/i)
  if (chapterKey === 'chapter-14' && atlasMatch) {
    const figureNumber = Number.parseInt(atlasMatch[1], 10)
    return {
      pairId: `${chapterKey}:${cartographyImageSrc.toLowerCase()}`,
      cartographyImageSrc,
      photoImageSrc: replaceFigureNumber(cartographyImageSrc, atlasMatch[1], figureNumber - 1),
    }
  }

  return null
}
