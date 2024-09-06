// Function to calculate the tip based on the bill value
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Array of bill values
const bills = [125, 555, 44];

// Array of tips calculated using the calcTip function
const tips = bills.map(calcTip);

// Array of total values (bill + tip)
const totals = bills.map((bill, index) => bill + tips[index]);

// Output the results
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${totals}`);