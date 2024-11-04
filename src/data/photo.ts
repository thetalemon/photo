import { TagList } from '@/data/tags'
import { getUrlDate } from '@/utils/dateHelper'

import photo20200105 from '@/pages/photo/2022/1/5/_1.jpg'
import photo202401022 from '@/pages/photo/2024/10/22/_20241022_14.jpg'
import photo202401023 from '@/pages/photo/2024/10/23/_20241023_13.jpg'
import photo202401024 from '@/pages/photo/2024/10/24/_20241024_38.jpg'
import photo202401025 from '@/pages/photo/2024/10/25/_20241025_21.jpg'

export type Photo = {
  id: number
  title: string
  eyecatch: ImageMetadata
  photographingDate: Date
  publicationDate: Date
  lastUpdateDate?: Date
  tagList: string[]
  isNew?: boolean
}

export const PhotoList: Photo[] = [
  {
    id: 4,
    title: '福岡旅行 3日目 | マリンワールド海の中道',
    eyecatch: photo202401025,
    photographingDate: new Date('2024-10-25'),
    publicationDate: new Date('2024-11-4'),
    tagList: [TagList.travel, TagList.fukuoka, TagList.suizokukan],
    isNew: true,
  },
  {
    id: 4,
    title: '福岡旅行 2日目 | 門司港レトロ',
    eyecatch: photo202401024,
    photographingDate: new Date('2024-10-24'),
    publicationDate: new Date('2024-11-3'),
    tagList: [TagList.travel, TagList.fukuoka],
    isNew: true,
  },
  {
    id: 3,
    title: '福岡旅行 1日目 | 小倉',
    eyecatch: photo202401023,
    photographingDate: new Date('2024-10-23'),
    publicationDate: new Date('2024-11-3'),
    tagList: [TagList.travel, TagList.fukuoka],
    isNew: true,
  },
  {
    id: 2,
    title: '福岡旅行 0日目 | 横須賀からフェリーに乗る',
    eyecatch: photo202401022,
    photographingDate: new Date('2024-10-22'),
    publicationDate: new Date('2024-10-31'),
    lastUpdateDate: new Date('2024-11-3'),
    tagList: [TagList.travel, TagList.ferry, TagList.yokosuka],
    isNew: true,
  },
  {
    id: 1,
    title: 'たぶん大井町',
    eyecatch: photo20200105,
    photographingDate: new Date('2022-1-5'),
    publicationDate: new Date('2024-10-27'),
    tagList: [TagList.tokyo, TagList.Oimachi, TagList.kenki],
    isNew: true,
  },
]

export const getUrlByPhoto = (date: Date) => {
  return `/photo/${getUrlDate(date)}`
}

export const getPhotoById = (id: number) => {
  return PhotoList.find((photo) => photo.id === id)
}
