//U36432650

//Determine the tip amount based on the bill using a ternary operator instead of if/else statements. Store this result in a variable named tip.
const calcTip = bill => {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    return tip;
}

