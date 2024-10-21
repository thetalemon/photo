type Tags = {
  [key: string]: string
}

export const TagList: Tags = {
  tochigi: '栃木',
  toyama: '富山',
  Oimachi: '大井町',
  tokyo: '東京',
  kenki: '建設機械',
}

export const getTagByValue = (value: string) => {
  return Object.keys(TagList).find((key) => TagList[key] === value)
}

export const gettagByKey = (key: string) => {
  return TagList[key]
}
