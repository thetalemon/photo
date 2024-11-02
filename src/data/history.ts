import { myUrl } from '@/constants/constants'
import { getUrlDate, getSimpleDate } from '@/utils/dateHelper'

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
  const absoluteUrl = generateAbsoluteUrl(`/history/${getUrlDate(date)}`)
  return {
    slug: getSimpleDate(date),
    id: absoluteUrl,
    link: absoluteUrl,
    pubDate: date,
  }
}

export const HistroyList: History[] = [
  {
    title: '福岡旅旅行1日目をアップしました',
    description: '福岡旅行1日目をアップしました',
    content: `<p><a href="${generateAbsoluteUrl('/photo/2024/10/23')}">福岡旅行1日目</a>をアップしました。</p>`,
    ...generateDateRelateData(new Date('2024-11-3')),
  },
  {
    title: '福岡旅行0日目をアップしました',
    description: '福岡旅行0日目をアップしました',
    content: `<p><a href="${generateAbsoluteUrl('/photo/2024/10/22')}">福岡旅行0日目</a>をアップしました。</p>`,
    ...generateDateRelateData(new Date('2024-10-31')),
  },
  {
    title: '開設しました',
    description: '開設しました',
    content: 'サイト開設しました。',
    ...generateDateRelateData(new Date('2024-10-27')),
  },
]
