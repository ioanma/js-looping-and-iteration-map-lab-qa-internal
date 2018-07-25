// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newDrivers = drivers.slice();
  newDrivers = newDrivers.map(toLowerCase());
  return newDrivers;
}

function nameToAttributes(drivers) {
  const driverNames = drivers.map(str.split(" "));
  const driverObject = {
    firstName: driverNames[0],
    lastName: driverNames[1],
  };
  return driverObject;
}

function attributesToPhrase(drivers) {
  
}