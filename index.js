const driver = {}

function updateDriverWithKeyAndValue(driver, key,value) {
  const newDriver = Object.assign({}, key, value)
  return newDriver
}