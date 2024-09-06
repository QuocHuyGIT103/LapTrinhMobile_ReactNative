// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Bonus Data 1
let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

// Bonus Data 2
let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];

// Function to calculate the average score
function calculateAverage(scoreArray) {
    let sum = scoreArray.reduce((a, b) => a + b, 0);
    return sum / scoreArray.length;
}

// Function to determine the winner
function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log(`Dolphins win with an average score of ${dolphinsAvg}!`);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log(`Koalas win with an average score of ${koalasAvg}!`);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log(`It's a draw with both teams scoring ${dolphinsAvg}!`);
    } else {
        console.log('No team wins the trophy!');
    }
}

// Tinh Trung binh cho Test Data 1
let dolphinsAvg1 = calculateAverage(dolphinsScores1);
let koalasAvg1 = calculateAverage(koalasScores1);

// Tinh Trung binh cho Bonus Data 1
let dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
let koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);

// Tinh Trung binh cho Bonus Data 2
let dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
let koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);

//Tim Doi chien thang cho Test Data 1
console.log('Test Data 1:');
determineWinner(dolphinsAvg1, koalasAvg1);

// Tim Doi chien thang Bonus Data 1
console.log('Bonus Data 1:');
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1);

// Tim Doi chien thang Bonus Data 2
console.log('Bonus Data 2:');
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2);