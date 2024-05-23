//U36432650

//Calculate the Tip:
//Determine the tip amount based on the bill using a ternary operator instead of if/else statements. Store this result in a variable named tip.
const calcTip = bill => {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    return tip;
}
//Output Details:
//Display a message in the console that includes the bill amount, the tip amount, and the total cost (bill plus tip).
const bill1 = 150;
const tip1 = calcTip(bill1);
const total1 = bill1 + tip1;
console.log(`The bill was $${bill1}, the tip was $${tip1}, and the total value $${total1}.`);

//Create a Function calcTip:
//Develop a function named calcTip that accepts any bill amount as an input and returns the calculated tip, following the specified rules. Test this function with a bill value of $100.
const bill2 = 100;
console.log(`For a bill of $${bill2}, the tip would be $${calcTip(bill2)}.`);

//Utilize Arrays:
//Construct an array bills containing the test data values.
//Data Set 1: Bill values of 275, 40, and 430
const billsDataSet1 = [275, 40, 430];

//Generate an array tips where each entry is the result of calling your calcTip function for each corresponding bill value.
const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));

//Assemble an array totals that sums each bill with its respective tip.
const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);

console.log("Data Set 1:");
console.log("Bills:", billsDataSet1);
console.log("Tips:", tipsDataSet1);
console.log("Totals:", totalsDataSet1);

//Construct an array bills containing the test data values.
//Data Set 2: Bill values of 125, 555, and 44
const billsDataSet2 = [125, 555, 44];

//Generate an array tips where each entry is the result of calling your calcTip function for each corresponding bill value.
const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));

//Assemble an array totals that sums each bill with its respective tip.
const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);

console.log("Data Set 2:");
console.log("Bills:", billsDataSet2);
console.log("Tips:", tipsDataSet2);
console.log("Totals:", totalsDataSet2);
