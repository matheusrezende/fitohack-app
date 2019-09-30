export const buildQueryString = (searchData) => {
  const str = []
  for (const p in searchData) { //eslint-disable-line
    if (searchData.hasOwnProperty(p) && typeof searchData[p] !== 'object') {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(searchData[p])}`)
    } else if (searchData[p] !== null && searchData[p].length > 0) {
      str.push(parameterizeArray(p, searchData[p]))
    }
  }
  return str.join('&')
}

export const parameterizeArray = (key, arr) => {
  arr = arr.map(encodeURIComponent) // eslint-disable-line
  return `${key}=${arr.join(`&${key}=`)}`
}

