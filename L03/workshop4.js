const guests =['Alice','Bob','Charlie','David'];


const message = "Hello World";

let i = 0;
while (i < guests.length) {
    if (guests[i] === 'Charlie'){
        console.log('Found Charlie!');
        break;
    }
        i++
    }



for (let char of message) {
    if ('aeiou'.includes(char.toLowerCase())) {
        console.log(char);
    }
}






