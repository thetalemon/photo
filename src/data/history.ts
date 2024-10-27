import { myUrl } from '@/constants/constants'

import photo20200105 from '@/pages/photo/2022/1/5/_1.jpg'
export type History = {
  title: string
  description: string
  content: string
  slug: string
  id: string
  link: string
  pubDate: Date
}

const generateAbsoluteUrl = (path: string) => `${myUrl}${path}`

export const HistroyList: History[] = [
  {
    title: '開設しました',
    description: '開設しました',
    content: 'サイト開設しました。',
    slug: '20241027',
    id: generateAbsoluteUrl('/photo/2022/1/5'),
    link: generateAbsoluteUrl('/photo/2022/1/5'),
    pubDate: new Date('2024-10-27'),
  },
]
