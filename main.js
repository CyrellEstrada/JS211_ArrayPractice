let car = ["Ford", "BMW", "Lexus", "Toyota"]
// console.log(car.length)

let moreCars = ["GMC", "Lincon", "Hyndui", "Honda"]
let totalCars = car.concat(moreCars);
// console.log(totalCars)

// console.log(totalCars.indexOf("Honda"))
// console.log(totalCars.lastIndexOf("Ford"))

let stringOfCars = totalCars.join(",")
// console.log(stringOfCars)

let carsFromString = stringOfCars.split(",")
// console.log(carsFromString)

let carsInReverse = totalCars.reverse()
// console.log(carsInReverse)

// console.log(carsInReverse.sort())
// console.log(carsInReverse.indexOf('BMW'));

const pets = ['dog', 'cat', 'fish', 'hamster', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4, 6)
// console.log(reptiles)
// console.log(pets)

let removedReptiles = pets.splice(4, 2, "hello");
// console.log(removedReptiles);
// console.log(pets)

let removedPet = pets.pop(6)
// console.log(removedPet)
pets.push('bird')
// console.log(pets)

pets.shift()
// console.log(pets)

pets.unshift("turtle")
// console.log(pets)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

// const addTwo = (num, index, arr) => {
//     }
    
//     addTwo()
//     console.log(numbers)


const addTwo = (num, index, arr) => {
    arr[index] = num + 2;
}

numbers.forEach(addTwo);

console.log("Updated numbers array: ", numbers);