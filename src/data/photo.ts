import { TagList } from '@/data/tags'

import photo20200105 from '@/pages/photo/2022/1/5/_1.jpg'
import photo202401022 from '@/pages/photo/2024/10/22/_20241022_14.jpg'

export type Photo = {
  id: number
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
    id: 2,
    title: '福岡旅行 0日目',
    eyecatch: photo202401022,
    year: 2024,
    month: 10,
    day: 22,
    tagList: [TagList.travel, TagList.ferry, TagList.yokosuka],
    isNew: true,
  },
  {
    id: 1,
    title: 'たぶん大井町',
    eyecatch: photo20200105,
    year: 2022,
    month: 1,
    day: 5,
    tagList: [TagList.tokyo, TagList.Oimachi, TagList.kenki],
    isNew: true,
  },
]

export const getUrlByPhoto = (year: number, month: number, day: number) => {
  return `/photo/${year}/${month}/${day}`
}

export const getPhotoById = (id: number) => {
  return PhotoList.find((photo) => photo.id === id)
}
