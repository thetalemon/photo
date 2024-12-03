import {
  mySiteDefaultDescription,
  mySiteName,
  myUrl,
} from '@/constants/constants'
import { HistoryList } from '@/data/history'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const baseUrl = myUrl
  return rss({
    title: mySiteName,
    description: mySiteDefaultDescription,
    site: context.site ?? myUrl,
    items: HistoryList.map((post) => {
      const url = `${baseUrl}/history/${post.slug}`
      return {
        title: post.title,
        description: post.content,
        content: post.content,
        id: url,
        link: url,
        pubDate: new Date(post.pubDate),
      }
    }),
    customData: `<language>ja</language>`,
  })
}
