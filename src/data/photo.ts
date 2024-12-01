import { TagList } from '@/data/tags'
import { getUrlDate } from '@/utils/dateHelper'

import photo20200105 from '@/pages/photo/2022/1/5/_1.jpg'
import photo202401022 from '@/pages/photo/2024/10/22/_20241022_14.jpg'
import photo202401023 from '@/pages/photo/2024/10/23/_20241023_13.jpg'
import photo202401024 from '@/pages/photo/2024/10/24/_20241024_38.jpg'
import photo202401025 from '@/pages/photo/2024/10/25/_20241025_21.jpg'
import photo202401026 from '@/pages/photo/2024/10/26/_20241026_13.jpg'
import photo202401108 from '@/pages/photo/2024/11/08/_20241108_2.jpg'
import Photo20241122 from '@/pages/photo/2024/11/22/_20241122_16.jpg'

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
    id: 8,
    title: '大阪・神戸 1日目 | 天王寺動物園',
    eyecatch: Photo20241122,
    photographingDate: new Date('2024-11-22'),
    publicationDate: new Date('2024-12-1'),
    tagList: [
      TagList.travel,
      TagList.kinki,
      TagList.osaka,
      TagList.kobe,
      TagList.zoo,
    ],
    isNew: true,
  },
  {
    id: 7,
    title: '川越～大宮散歩',
    eyecatch: photo202401108,
    photographingDate: new Date('2024-11-08'),
    publicationDate: new Date('2024-11-10'),
    tagList: [TagList.sanpo, TagList.saitama, TagList.kanto],
    isNew: true,
  },
  {
    id: 6,
    title: '福岡旅行 4日目 | 帰路',
    eyecatch: photo202401026,
    photographingDate: new Date('2024-10-26'),
    publicationDate: new Date('2024-11-9'),
    tagList: [TagList.travel, TagList.fukuoka],
  },
  {
    id: 5,
    title: '福岡旅行 3日目 | マリンワールド海の中道',
    eyecatch: photo202401025,
    photographingDate: new Date('2024-10-25'),
    publicationDate: new Date('2024-11-4'),
    tagList: [TagList.travel, TagList.fukuoka, TagList.suizokukan],
  },
  {
    id: 4,
    title: '福岡旅行 2日目 | 門司港レトロ',
    eyecatch: photo202401024,
    photographingDate: new Date('2024-10-24'),
    publicationDate: new Date('2024-11-3'),
    tagList: [TagList.travel, TagList.fukuoka],
  },
  {
    id: 3,
    title: '福岡旅行 1日目 | 小倉',
    eyecatch: photo202401023,
    photographingDate: new Date('2024-10-23'),
    publicationDate: new Date('2024-11-3'),
    tagList: [TagList.travel, TagList.fukuoka],
  },
  {
    id: 2,
    title: '福岡旅行 0日目 | 横須賀からフェリーに乗る',
    eyecatch: photo202401022,
    photographingDate: new Date('2024-10-22'),
    publicationDate: new Date('2024-10-31'),
    lastUpdateDate: new Date('2024-11-3'),
    tagList: [TagList.travel, TagList.ferry, TagList.yokosuka],
  },
  {
    id: 1,
    title: 'たぶん大井町',
    eyecatch: photo20200105,
    photographingDate: new Date('2022-1-5'),
    publicationDate: new Date('2024-10-27'),
    tagList: [TagList.tokyo, TagList.Oimachi, TagList.kenki],
  },
]

export const getUrlByPhoto = (date: Date) => {
  return `/photo/${getUrlDate(date)}`
}

export const getPhotoById = (id: number) => {
  return PhotoList.find((photo) => photo.id === id)
}
