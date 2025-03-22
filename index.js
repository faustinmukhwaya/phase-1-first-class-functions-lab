const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2);
};
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers0);
console.log(selectingDrivers1);

const createFareMultiplier= function(multiplier) {
        return function(fare) {
            return fare * multiplier;
        };
};
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5));

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(12));

const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));

