/*use the for loop to output even numbers from 2 to 10.

for (let i = 1; i <=10; i++) {
    if(i%2 == 0){
        console.log(`Current even number: ${i}`);
    }
} */

/* Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}


let i = 0;
while (i<3){
    console.log(`number ${i}`)
    ++i;
} */

/*Repeat until the input is correct

Write a loop which prompts for a number greater than 100. If the visitor 
enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number 
greater than 100 or cancels the input/enters an empty line.*/

let userNumber = 0;
let numberGreaterThan100 = false;

while(numberGreaterThan100 == false){
    userNumber = prompt('Insert a number greater than 100');
    if(userNumber>100){
        console.log('Great! Thank you!!!');
        numberGreaterThan100 = true;
    }else if(userNumber<=100){
        console.log('God dammit, try again and do it right.');
        continue;
    }
}