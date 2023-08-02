// class Address {
//     private addressLine1:string;
//     private addressLine2:string;
//     private city:string;

//     constructor(_addressLine1:string,_addressLine2:string,_city)
//     {
//         this.addressLine1=_addressLine1;
//         this.addressLine2=_addressLine2;
//         this.city=_city;
//     }

//     public get _addressLine1():string {
//         return this.addressLine1;
//     }

//     public set _addressLine1(_addressLine1:string) {
//         this.addressLine1=_addressLine1;
//     }

//     public get _addressLine2():string {
//         return this.addressLine2;
//     }

//     public set _addressLine2(_addressLine2:string) {
//         this.addressLine2=_addressLine2;        
//     }

//     public get _city():string {
//         return this.city;
//     }

//     public set _city(_city:string) {
//         this.city=_city;
//     }
// }

// class Person {
//     private firstName: string;
//     private lastName: string;
//     private email: string;
//     private address:Address;

//     constructor(_firstName:string,_lastName:string,_email,_address)
//     {
//         this.firstName=_firstName;
//         this.lastName=_lastName;
//         this.email=_email;
//         this.address=_address;
//     }

//     public get _firstName():string {
//         return this.firstName;
//     }

//     public set _firstName(_firstName:string) {
//         this.firstName=_firstName;
//     }

//     public get _lastName():string {
//         return this.lastName;
//     }

//     public set _lastName(_lastName:string) {
//         this.lastName=_lastName;        
//     }

//     public get _email():string {
//         return this.email;
//     }

//     public set _email(_email:string) {
//         this.email=_email;
//     }

//     public get _address(): Address {
//         return this.address;
//     }

//     public set _address(_address: Address) {
//         this.address = _address;
//     }

// }

// let address = new Address('4', 'lane 11', 'abc');
// let person=new Person('John','Doe','john@email.com',address);
// person._firstName='Sachin';
// console.log("Name: " + person._firstName + " " + person._lastName);

// console.log("Address: " + person._address._addressLine1 + " " + person._address._addressLine2);
// console.log(person._address._city);


import { Address } from "./Address";

export class Person {
    constructor(private firstName: string, private lastName: string, private email: string, address: Address) {
    }

    public get _firstName(): string {
        return this.firstName;
    }

    public set _firstName(_firstName: string) {
        this.firstName = _firstName;
    }

    public get _lastName(): string {
        return this.lastName;
    }

    public set _lastName(_lastName: string) {
        this.lastName = _lastName;
    }

    public get _email(): string {
        return this.email;
    }

    public set _email(_email: string) {
        this.email = _email;
    }
}
