// // First class with values and a function
// class Person1 {
//   constructor(fname, lname) {
//     this.xfname = fname;
//     this.xlname = lname;
//   }
//   getFullName() {
//     return `${this.xfname} ${this.xlname}`;
//   }
// }


// class Person2 extends Person1 {
 
// }

// const p1= new Person1
// const p2= new Person2("Ali", "Mughal")

// console.log(p2.getFullName);




// Constructor function for Student
function Student(name, rollNo) {
  this.name = name;
  this.rollNo = rollNo;
}


Student.prototype.introduce = function() {
  return `My name is ${this.name} and my roll number is ${this.rollNo}`;
};


const student1 = new Student("Ali", 101);
const student2 = new Student("Ahmed", 102);

// Calling introduce() method
console.log(student1.introduce());  
console.log(student2.introduce()); 
