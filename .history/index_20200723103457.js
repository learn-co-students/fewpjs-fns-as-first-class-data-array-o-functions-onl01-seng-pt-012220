function wakeDog(n, b) {
    console.log(`Wake ${n} the ${b}`);
    return `Wake ${n} the ${b}`;
};
function leashDog(n, b) {
    console.log(`Leash ${n} the ${b}`);
};
function walkToPark(n, b) {
    console.log(`Walk to the park with ${n} the ${b}`);
};
function throwFrisbee(n, b) {
    console.log(`Throw the frisbee for ${n} the ${b}`);
};
function walkHome(n, b) {
    console.log(`Walk home with ${n} the ${b}`);
};
function unleashDog(n, b) {
    console.log(`Unleash ${n} the ${b}`);
};
let routine = [wakeDog, leashDog , walkToPark , throwFrisbee , walkHome , unleashDog];

function exerciseDog(dogName, dogBreed) {
    let i = 0;
    while (i<routine.length) {
        routine[i](dogName, dogBreed);
        i++;
    };
    
};