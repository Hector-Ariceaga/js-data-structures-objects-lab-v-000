const driver = {}

function updateDriverWithKeyAndValue(key,value) {
  const newDriver = Object.assign({}, driver, key, value)
  return newDriver
}