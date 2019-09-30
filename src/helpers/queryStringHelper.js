import queryString from 'query-string'

export const stringifyQueryObject = (data) => {
  if (!data) {
    return ''
  }

  return `?${queryString.stringify(data)}`
}

export const routeReplacer = (string, data) => Object.keys(data).reduce((str, item) => str.replace(`:${item}`, data[item]), string)
