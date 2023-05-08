var fruits = ["Mango","Orange","Apple"];
console.log(fruits.length);
 fruits[3]="pineapple"    // to add when we know the place
fruits.push ("kiwi")      // add to last element
fruits.pop();             // delete last element
fruits.shift();           // delete first element
fruits.unshift("Mango");  // add in first element

console.log(fruits);
