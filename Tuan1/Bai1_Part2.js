// Arrow function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Function to check the winner
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
};

// Test Data 1
let dolphinsAvg1 = calcAverage(44, 23, 71);
let koalasAvg1 = calcAverage(65, 54, 49);
checkWinner(dolphinsAvg1, koalasAvg1);

// Test Data 2
let dolphinsAvg2 = calcAverage(85, 54, 41);
let koalasAvg2 = calcAverage(23, 34, 27);
checkWinner(dolphinsAvg2, koalasAvg2);