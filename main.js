// ----------------*Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in 
// all caps, 
// and print the value to the console

let favPowerRangerseries = 'Alein Rangers'
alert( favPowerRangerseries.slice(-3) )

// let favHoliday = 'christmas'
// favHoliday = 'diddy day'
// favHoliday = favHoliday.toUpperCase()

// console.log(favHoliday)

// let favFruit = 'orange'
// favFruit = 'cherry'
// favFruit = favFruit.toUpperCase()
// console.log(favFruit)

// let favChocolate = 'marz bar'
// favChocolate = 'snickers'

// favChocolate = favChocolate.toUpperCase()

// console.log(favChocolate)

// let favBeach = 'miami beach'
// favBeach = 'playa tulum'

// favBeach = favBeach.toUpperCase()
// console.log(favBeach)

// let favIceCream = 'vanilla'
// favIceCream = 'butterscotch'

// favIceCream = favIceCream.toUpperCase()
// console.log(favIceCream)


// let favDay = 'New Year\'s'

// favDay = 'holoween'
// favDay = favDay.toUpperCase()
//     alert(favDay)

// Declare a variable, assign it a string, alert the 
// last three characters in the string (Use your google-fu and the MDN)

// let str = 'biggiedoo'
// alert( str.slice(-3) )

// let flavor = 'vanilla'
// alert(flavor.slice(-3))

// let pie = 'pizza'
// alert(pie.slice(-3))


// let color = 'building'
// alert(color.slice(-7))

// let bird = 'hawk'
// alert(bird.slice(-3))

// let string = 'potato'
// alert(string.slice(-3))

// let car = 'Ferrari'
// alert(car.slice(-3))

// let movie = 'Scarface'
// alert(movie.slice(-5))

// let favDog = 'Cane Corso'
// alert(favDog.slice(-7))

// let vehicle = 'volkswagon'
// alert(vehicle.slice(-4))

// let weather = 'raining'
// alert(weather.slice(-6))

// ---------------*Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. 
// Alert the absolute value of the difference. Call the function.

function fiveNumFunc (n1, n2, n3, n4 , n5) {
    let difference = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(difference))
}
fiveNumFunc(27,83,42,1,5)

// function fiveNumFunc(num1,num2,num3,num4,num5) {
//     let difference = 100 - num1 - num2 - num3 - num4 - num5
//     alert(Math.abs(difference))
// }

// fiveNumFunc(27,83,42,1,5)


// function minusFiveAndAbs(n1,n2,n3,n4,n5) {
//     let difference = 100 - n1 - n2 - n3 -n4 -n5
//     alert( Math.abs(difference) )
// }
// minusFiveAndAbs(27,83,42,1,5)

// -------Create a function that takes in 3 numbers. 
// Console log lowest and highest values.
// Call the function.

function takesThreeLogsHiAndLow(num1, num2, num3) {
    let min = Math.min(num1,num2,num3)
    let max = Math.max(num1,num2,num3)

    console.log(`The lowest num is ${min} and the highest is ${max}`)
}
takesThreeLogsHiAndLow(1001,50,20000)

// function logHighAndLow(n1,n2,n3) {
//     let min = Math.min(n1,n2,n3)
//     let max = Math.max(n1,n2,n3)

//     console.log(`The lowest num is ${min} and the highest is ${max}`)
// }

// logHighAndLow(100,50,25)

// function logHighAndLow(n1,n2,n3) {
//     let min = Math.min(n1,n2,n3)
//     let max = Math.max(n1,n2,n3)
//     console.log(`The lowest num is ${min} and the highest is ${max}`)
// }
// logHighAndLow(100,50,25)



// *Conditionals*

// Create a function that returns heads or tails randomly and 
// as fairly as possible.
// Call the function.

// function headsOrTails() {
//     let result = Math.random()
//     if(result < .5) {
//         return 'heads'
//     }else {
//         return 'tails'
//     }
// }
// console.log( headsOrTails() )


// function headsOrTails() {
//     let result = Math.random()
//     if(result < .5) {
//         return 'heads'
//     }else {
//         return 'tails'
//     }
// }


// ********ENKI THIS********!!!!!!!
// const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'
// console.log( headsOrTails() )

//*Loops*

// Create a function that takes in a number. 
// Console log the result of heads or tails using the previous function x times 
// where x is the number passed into the function. Call the function.

// function flipFlipFlipper(n) {
//     for(let i = 1; i <= n; i++) {
//         result = headsOrTails()
//         console.log(result)
//     }
// }
// flipFlipFlipper(1)

const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'
console.log( headsOrTails() )

function flipFlipFlipper(n) {
    for (let i = 1; i <= n; i++ ) {
        let result = headsOrTails()
        console.log(result)
    }
}
flipFlipFlipper(1)