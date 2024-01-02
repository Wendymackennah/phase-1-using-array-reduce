const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// Use reduce() to calculate the total sum of battery amounts
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => accumulator + currentBatch, 0);

// Output the result
console.log(totalBatteries);
