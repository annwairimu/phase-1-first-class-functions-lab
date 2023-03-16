function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(value){
    return function(fare) {
        return fare * value;
    }
}
function fareDoubler(fare) {
    return fare + fare;
}
function fareTripler(fare) {
    return fare * 3;
}
function selectDifferentDrivers(drivers,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}