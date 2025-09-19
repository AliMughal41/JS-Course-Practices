// // Custom filter method
// if (!Array.prototype.MyFilter) {
//     Array.prototype.MyFilter = function(callback) {
//         const result = [];
//         for (let i = 0; i < this.length; i++) {
//             if (callback(this[i])) {
//                 result.push(this[i]);
//             }
//         }
//         return result;
//     };
// }

// const fruits = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Mango",
//     "Kaila"
// ];

// // Using built-in filter
// const noBananaFruits = fruits.filter(fruit => fruit !== "Banana");

// // Using custom MyFilter
// const myBananaFruit = fruits.MyFilter(fruit => fruit !== "Banana");

// console.log("Built-in filter result:", noBananaFruits);
// console.log("Custom MyFilter result:", myBananaFruit);




const original = {
  name: "Alice",
    details: { 
        age: 25,
        city: "Lahore" }
};

const shallowCopy = Object.assign({}, original);

shallowCopy.name = "Ali";
shallowCopy.details.city = "Karachi";

// console.log(original);
// console.log(shallowCopy); 

const deepCopy = structuredClone(original);

deepCopy.name = "Asad"
deepCopy.details.age = 900

// console.log(original);
// console.log(deepCopy);


// const num = -1;

// num % 2 == 0? console.log("Even") : num % 2 == 1 ? console.log("Odd") : console.log("Pata Naii");

Array.prototype.MyFilter = function(callback){
    const result = [];
    for(let i = 0; i<this.length; i++){
        if(callback(this[i])){
            result.push(this[i]) 
        }
    }
    return result; 
}

const fruits = ["Apple", "Banana", "Mango", "Orange", "Strawbery" ]
const noMango = fruits.MyFilter((fruits)=>fruits!=="Mango");
console.log(noMango);

Array.prototype.myMap = function(callback){
    const result = [];
    for(let i = 0; i<this.length; i++){
        console.log(this[i]);

        const value = callback(this[i])
        result.push(value)
    }
    return result;
}

const arr = [1, 2, 4, 6, 7];

const arr2 = arr.myMap ((item) => item*2)
console.log(arr2)