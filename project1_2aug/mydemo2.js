var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
for (var _a = 0, sportsTwo_1 = sportsTwo; _a < sportsTwo_1.length; _a++) {
    var tempSport = sportsTwo_1[_a];
    console.log(tempSport);
}
