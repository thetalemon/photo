import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export const getDate = (value: Date) =>
  format(value, 'yyyy-MM-dd', {
    locale: ja,
  })

export const getUrlDate = (value: Date) =>
  format(value, 'yyyy/MM/dd', {
    locale: ja,
  })

export const getSimpleDate = (value: Date) =>
  format(value, 'yyyyMMdd', {
    locale: ja,
  })
