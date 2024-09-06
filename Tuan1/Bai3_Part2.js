// Creating the objects for Mark and John
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // in kg
    height: 1.69, // in meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, // in kg
    height: 1.95, // in meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

// Calculating BMIs for both Mark and John
mark.calcBMI();
john.calcBMI();

// Comparing BMIs and logging the result
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}