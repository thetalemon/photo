import { myUrl } from '@/constants/constants'

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

const generateDateRelateData = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const absoluteUrl = generateAbsoluteUrl(`/history/${year}/${month}/${day}`)
  return {
    slug: `${year}${month}${day}`,
    id: absoluteUrl,
    link: absoluteUrl,
    pubDate: date,
  }
}

export const HistroyList: History[] = [
  {
    title: '福岡旅行0日目をアップしました',
    description: '福岡旅行0日目をアップしました',
    content:
      '<p><a href="/photo/2024/10/22">福岡旅行0日目</a>をアップしました。</p>',
    ...generateDateRelateData(new Date('2024-10-31')),
  },
  {
    title: '開設しました',
    description: '開設しました',
    content: 'サイト開設しました。',
    ...generateDateRelateData(new Date('2024-10-27')),
  },
]
