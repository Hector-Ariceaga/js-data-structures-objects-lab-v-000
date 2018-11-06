const driver = {}

function updateDriverWithKeyAndValue(driver, key,value) {
  const newDriver = {...driver};
    newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
  driver[key] = value
  return driver
}

function deleteFromDriverWithKey(driver,key){
  const newDriver = {...driver}
  newDriver.assign({}, key)
  return newDriver
}