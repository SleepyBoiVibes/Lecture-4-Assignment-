//Angel Reyes And Daunevin Medeiros

//Exercise 1
function Max(...numbers) {
    if (numbers.length === 0) {
        return -Infinity
    }

let theMax = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > theMax) {
        theMax = numbers[1]
       }  
    }
return theMax

}
console.log(Max(7, 3, 1));


//Exercise 2
function reverse(n) {
    let s = String(n)
    if (s.startsWith('-')) {
        let reverse = s.substring(1).split('').reverse().join('');
        return '-' + reverse;
    }
    else{
        return s.split ('').reverse().join('');
    }
    
}

console.log(reverse(123));


//Exercise 3
function uppercase(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        let charcode = char.charCodeAt(0); 

        if (charcode >= 97 && charcode <= 122) {
            
            let uppercharcode = charcode - 32;
            result += String.fromCharCode(uppercharcode);
        }
        else {
            
            result += char;
        }
    }
    return result;
}


console.log(uppercase("I am Daniel"))


//Exercise 4
function invert(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        let charcode = char.charCodeAt(0); 

        if (charcode >= 97 && charcode <= 122) {
            
            let uppercharcode = charcode - 32;
            result += String.fromCharCode(uppercharcode);
        }
        else if(charcode >= 65 && charcode <= 90) {
            let lowercharcode = charcode + 32

            result += String.fromCharCode(lowercharcode); 
        }
        else {
            result += char;
        }
    }
    return result;
}

console.log(invert("AnPpLE"))