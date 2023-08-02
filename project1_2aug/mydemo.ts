// tsc <name of ts file>

// node <name of js file>

let message : string="World";
console.log('Hello'+message);

let m2 : any="World";
console.log(m2);
m2=10;
console.log(m2);

let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = 'Kumar';
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);

for (let i=0; i < 5; i++) {
    console.log(i);
}

let reviews: number[] = [5, 5, 4.5, 1, 3];
for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
}