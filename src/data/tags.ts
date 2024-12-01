type Tags = {
  [key: string]: string
}

export const TagList: Tags = {
  tochigi: '栃木',
  toyama: '富山',
  Oimachi: '大井町',
  tokyo: '東京',
  kenki: '建設機械',
  travel: '旅行',
  ferry: 'フェリー',
  yokosuka: '横須賀',
  fukuoka: '福岡',
  suizokukan: '水族館',
  zoo: '動物園',
  saitama: '埼玉',
  sanpo: '散歩',
  kanto: '関東',
  kinki: '近畿',
  osaka: '大阪',
  kobe: '神戸',
}

export const getTagByValue = (value: string) => {
  return Object.keys(TagList).find((key) => TagList[key] === value)
}

export const gettagByKey = (key: string) => {
  return TagList[key]
}
