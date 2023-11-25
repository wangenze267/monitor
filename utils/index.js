const formatObj = (data) => {
  const arr = []
  for (let key in data) {
    arr.push(`${key}=${data[key]}`)
  }
  // {a:1,b:2} => a=1&b=2
  return arr.join('&');
}

export default {
  formatObj
}