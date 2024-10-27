import { myUrl } from '@/constants/constants'

export type History = {
  title: string
  description: string
  content: string
  slug: string
  id: string
  link: string
  pubDate: Date
  enslosure: {
    url: string
  }
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
    enslosure: {
      url: 'https://kenk1.github.io/photo/2022/1/5/_1.jpg',
    },
  },
]
