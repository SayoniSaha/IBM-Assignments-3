let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let tempSport of sportsOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}

let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
for (let tempSport of sportsTwo) {
    console.log(tempSport);
}