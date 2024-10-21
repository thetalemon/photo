import { TagList } from '@/data/tags'

import photo20211225 from '@/pages/photo/2021/12/25/_Photo1.jpg'

type Photo = {
  title: string
  eyecatch: ImageMetadata
  year: number
  month: number
  day: number
  tagList: string[]
  isNew?: boolean
}

export const PhotoList: Photo[] = [
  {
    title: '2021/12/25 @栃木',
    eyecatch: photo20211225,
    year: 2021,
    month: 12,
    day: 25,
    tagList: [TagList.tochigi],
    isNew: true,
  },
]

export const getUrlByPhoto = (year: number, month: number, day: number) => {
  return `/photo/${year}/${month}/${day}`
}
