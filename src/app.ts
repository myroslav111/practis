// class Hous {
//     // private street: string;
//     private tenants: string[] = [];

//     constructor(public readonly type: string, protected street: string){}

//     public showAddres (this: Hous): void{
//         console.log('Addres:' + this.street );
//     }

//     public showType (this: Hous): void{
//         console.log('Type:' + this.type );
//     }

//     public addTenat (name: string){
//         this.tenants.push(name)
//     }
    
//     public showTenants(){
//         console.log(this.tenants);
//     }


// }

// // const house = new Hous('wood', 'midle-earth');
// class StoneHous extends Hous {
//     private chatrgetOfTheHous: string
//     constructor(street: string, general: string){
//         super('stone', street)

//         this.chatrgetOfTheHous = general
//     }

    
//     public showAddres (): void{
//         console.log('Addres:' + this.street );
//     }

//     public showTenants(){
//         console.log('General:' + this.chatrgetOfTheHous);

//         super.showTenants()
//     }

// }

// const stoneHouse = new StoneHous('stone-world', 'max')

// stoneHouse.addTenat('dog')
// stoneHouse.addTenat('cat')

// stoneHouse.showTenants()
/*--------------------------Static------------------------------*/
// class UseStatic {
//     private static count = 0

//     constructor(){
//         UseStatic.count += 1
//     }

//     public static isStaticMethod(){
//         console.log('I m static');
//     }

//     public showCount (){
//         console.log(UseStatic.count);
//     }

// }

// const obj1 = new UseStatic()
// const obj2 = new UseStatic()
// const obj3 = new UseStatic()

// obj1.showCount()
// obj2.showCount()
// obj3.showCount()

// UseStatic.isStaticMethod()
/*----------------------abstract class-----------------------------*/
// abstract class Plane {
//     protected pilotInCabin = false;

//     public sitInPlane (){
//         this.pilotInCabin = true;
//     }

//     public abstract startEngin (): string;
// }

// class Maize extends Plane{
//     public startEngin (){
//         return 'trtrrtrtrt'
//     }
// }

// class Boing extends Plane{
//     public startEngin (){
//         return 'boooooooo'
//     }
// }

// const maize = new Maize()
// const boing = new Boing()

// maize.sitInPlane()
// boing.sitInPlane()

// console.log(maize.startEngin());
// console.log(boing.startEngin());
/*--------------------interface-----------------*/
// interface IPerson {
//     readonly name: string;
//     // не обязательное поле "?"
//     age?: number;

//     greet(phrase: string): void
// }

// let user: IPerson;

// user = {
//     name: 'max',
//     age: 21,

//     greet(phrase: string){
//         console.log(phrase + ' ' + this.name);
//     }
// }

// user.greet('hallo everyone I')
/*-------------type-----------------*/
// type IPerson =  {
//     readonly name: string;
//     age: number;

//     greet(phrase: string): void
// }

// let user: IPerson;

// user = {
//     name: 'max',
//     age: 21,

//     greet(phrase: string){
//         console.log(phrase + ' ' + this.name);
//     }
// }

// user.greet('hallo everyone I')
/*-------------interface class-----------------*/
// interface IPerson {
//     readonly name: string;
//     // не обязательное поле "?"
//     age?: number;

//     greet(phrase: string): void
// }

// interface IPilot {
//     flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot{
//     constructor(public readonly name: string, public age: number){
//         this.checkAge()
//     }

//     private checkAge(){
//         if(this.age < 28){
//             throw new Error('pilot is young')
//         }
//     }

//     public greet(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
//     }

//     flyMessage(): void {
//         console.log('plane fly good ');
//     }
// }

// const pilot = new Pilot('max', 32)

/*--------------------------------------------*/
// abstract class Plane {
//     protected pilot?: IPilot;

//     public sitInPlane (pilot: IPilot){
//         this.pilot = pilot;
//     }

//     public abstract startEngin (): boolean;
// }


// class Boing extends Plane{
//     public startEngin (){
//         if(!this.pilot){
//             throw new Error('have no pilot')
//         }
//         console.log('brrrrrrrrr');
//         this.pilot.flyMessage()
//         return true
//     }
// }

// const pilot = new Pilot('max', 32)
// const boing = new Boing()

// pilot.greet('hallo I')

// boing.sitInPlane(pilot)

// boing.startEngin()
/*-----------------Type intersection----------*/
// type Admin = {
//     name: string;
//     privileges: string[];
//   };
  
//   type Employee = {
//     name: string;
//     startDate: Date;
//   };

//   type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: 'Anton',
//   privileges: ['drop-all'],
//   startDate: new Date()
// };

/*-----------------Type Guards----------*/
// type Admin = {
//     name: string;
//     privileges: string[];
//   };
  
//   type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   type UnknownObject = Employee | Admin;
  
//   function showFields (e1: UnknownObject) {
//     console.log(e1.name);
//     if ('privileges' in e1) {
//       console.log(e1.privileges);
//     }
//     if ('startDate' in e1) {
//       console.log(e1.startDate);
//     }
//   }

//   class Car {
//     drive() {
//       console.log('Driving...');
//     }
//   }
  
//   class Truck {
//     drive() {
//       console.log('Driving a truck...');
//     }
  
//     loadCargo(amount: number) {
//       console.log('Loading cargo ...' + amount);
//     }
//   }
  
//   type Vehicle = Car | Truck;
  
//   const v1 = new Car();
//   const v2 = new Truck();
  
//   function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//       vehicle.loadCargo(1000);
//     }
//   }

/*-----------------Type Casting----------*/
// const input = <HTMLInputElement>document.getElementById('inputEmail');

// input.value = 'test@test.ts';

// const input = document.getElementById('inputEmail') as HTMLInputElement;

// input.value = 'test@test.ts';

// const input = document.getElementById('inputEmail');

// if (input) {
//   (input as HTMLInputElement).value = 'test@test.ts';
// }
/*-----------------Index Properties----------*/
// interface Person {
//     name: string;
//     [x: string]: string;
//   }
  
//   const user: Person = {
//     name: 'Alex',
//     gender: 'MAN',
//     country: 'Ukraine',
//   }
/*-----------------Optional Chaining----------*/
// interface Person {
//     name: string;
//     additionInfo?: {
//       someInfo: string;
//     }
//   }
  
//   const user: Person = {
//     name: 'Alex'
//   }
  
//   console.log(user?.additionInfo?.someInfo);
/*-----------------Nullish Coalescing----------*/
// const userInput = '';

// const store = userInput || 'DEFAULT';

// console.log(store);

// const userInput = '';

// const store = userInput ?? 'DEFAULT';


// console.log(store);
// И теперь DEFAULT будет только тогда, когда userInput будет равно null или undefined.

/*-----------------function overloads----------*/
// type Combinable = string | number;

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type AdminType = {
//     type: 'admin';
//     name: string;
//   }
  
//   type UserType = {
//     type: 'user';
//     name: string;
//   }
  
//   function checkUser (name: string, type: 'admin'): AdminType;
//   function checkUser (name: string, type: 'user'): UserType;
//   function checkUser (name: string, type: 'admin' | 'user') {
//     if (type === 'admin') {
//       return {
//         name,
//         type: 'admin'
//       }
//     } else {
//       return {
//         name,
//         type: 'user'
//       }
//     }
//   }
  
//   const user = checkUser('Nikita', 'user');
//   const admin = checkUser('Tonya', 'admin');

/*----------------------------------------------------------------------------------*/ 
/*-----------------Generics----------*/