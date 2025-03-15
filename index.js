// Code your solution here

const drivers = ["Derrick", "Michael", "Nathaniel", "Kevin", "James", "Patrick", "ZACH", "Nathan", "Nahashon"];

function findMatching(driverArr, nameHolder){
    return driverArr.filter(((search)=> search.toLowerCase() === nameHolder.toLowerCase()));
}
console.log(findMatching(drivers, "zach"));


function fuzzyMatch(driverNames, firstLetters){
    return driverNames.filter((names) => names.startsWith(firstLetters));
}
console.log(fuzzyMatch(drivers, "Na"));

const driverObjects = [
    {name: "derrick", hometown: "kawangware"},
    {name: "bronny", hometown: "westlands"},
    {name: "collins", hometown: "githurai"},
    {name: "jason", hometown: "ruiru"},
    {name: "wahome", hometown: "thika"}
]

function matchName(driverObj, arg){
    return driverObj.filter((data) => data.name === arg)
}
console.log(matchName(driverObjects, "wahome"));
