// Test data: array of bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Empty arrays for tips and totals
const tips = [];
const totals = [];

// Function to calculate the tip based on the bill value
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Loop to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

// Output the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Bonus: Function to calculate the average of an array
const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// Calculate the average of the totals array
const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal);