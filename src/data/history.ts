import { myUrl } from '@/constants/constants'
import { getUrlDate, getSimpleDate } from '@/utils/dateHelper'

export type History = {
  title: string
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
    title: '福岡旅行 3日目 | マリンワールド海の中道をアップしました',
    content: `<p><a href="${generateAbsoluteUrl('/photo/2024/10/25')}">福岡旅行 3日目 | マリンワールド海の中道</a>をアップしました。</p>`,
    ...generateDateRelateData(new Date('2024-11-4')),
  },
  {
    title:
      '福岡旅行 1日目 | 小倉, 福岡旅行, 2日目 | 門司港レトロをアップしました',
    content: `<p><a href="${generateAbsoluteUrl('/photo/2024/10/23')}">福岡旅行 1日目 | 小倉</a>, <a href="${generateAbsoluteUrl('/photo/2024/10/24')}">福岡旅行 2日目 | 門司港レトロ</a>をアップしました。</p>`,
    ...generateDateRelateData(new Date('2024-11-3')),
  },
  {
    title: '福岡旅行 0日目 | 横須賀からフェリーに乗るをアップしました',
    content: `<p><a href="${generateAbsoluteUrl('/photo/2024/10/22')}">福岡旅行 0日目 | 横須賀からフェリーに乗る</a>をアップしました。</p>`,
    ...generateDateRelateData(new Date('2024-10-31')),
  },
  {
    title: '開設しました',
    content: 'サイト開設しました。',
    ...generateDateRelateData(new Date('2024-10-27')),
  },
]
