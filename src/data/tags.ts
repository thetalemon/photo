type Tags = {
  [key: string]: string
}

export const TagList: Tags = {
  tochigi: '栃木',
  toyama: '富山',
}

export const getTagByValue = (value: string) => {
  return Object.keys(TagList).find((key) => TagList[key] === value)
}

export const gettagByKey = (key: string) => {
  return TagList[key]
}
