//Code your solution here

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(drivers, string) {
  return drivers.filter((driver) =>
    driver.toLowerCase().includes(string.toLowerCase())
  );
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(string.toLowerCase())
  );
}

function matchName(drivers, string) {
  const lowercaseStr = string.toLowerCase();

  return drivers.filter((driver) => {
    const driverName = driver.name;

    if (lowercaseStr) {
      return driverName.toLowerCase().includes(lowercaseStr);
    } else {
      return driverName.includes(searchString);
    }
  });
}
