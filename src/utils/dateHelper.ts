import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export const getDate = (value: Date) =>
  format(value, 'yyyy-MM-dd', {
    locale: ja,
  })
