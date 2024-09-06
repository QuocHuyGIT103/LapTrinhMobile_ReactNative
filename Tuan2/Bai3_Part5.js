const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// Task 1: Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2: Remove the yellow card event from minute 64
gameEvents.delete(64);
console.log(gameEvents);

// Task 3: Compute and log "An event happened, on average, every 9 minutes"
const time = 90; // The total duration of the game
const average = time / gameEvents.size;
console.log(`An event happened, on average, every ${average.toFixed(2)} minutes`);

// Task 4: Loop over 'gameEvents' and log each element with the half it happened in
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
}