export function stringFragment(str: string) {
  const arr = str.split('-')
  arr.splice(0, 2)
  let res = ''
  for (let item of arr) {
    res += item.toLowerCase().replace(item[0], item[0].toUpperCase())
  }
  return res
}
