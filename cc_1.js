//U36432650

//Determine the tip amount based on the bill using a ternary operator instead of if/else statements. Store this result in a variable named tip.
const calcTip = bill => {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    return tip;
}
//Display a message in the console that includes the bill amount, the tip amount, and the total cost (bill plus tip).
const bill1 = 150;
const tip1 = calcTip(bill1);
const total1 = bill1 + tip1;
console.log(`The bill was $${bill1}, the tip was $${tip1}, and the total value $${total1}.`);

//Develop a function named calcTip that accepts any bill amount as an input and returns the calculated tip, following the specified rules. Test this function with a bill value of $100.
const bill2 = 100;
console.log(`For a bill of $${bill2}, the tip would be $${calcTip(bill2)}.`);


