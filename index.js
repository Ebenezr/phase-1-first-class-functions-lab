// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    const newDrivers = [...drivers];
    return newDrivers.splice(0,2)
};
const returnLastTwoDrivers = (drivers) => {
    const newDrivers = [...drivers];
    return newDrivers.splice(-2)
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
    return function(fare){
       return fare * int;
    }
    
}

const fareDoubler = (fare ) => {
    return createFareMultiplier(fare,int);
   
}
const fareTripler =() =>{
    return (createFareMultiplier(fare))*3
}
const selectDifferentDrivers = (drivers, FirstTwoDrivers, LastTwoDrivers) =>{
    return returnFirstTwoDrivers(drivers)
}