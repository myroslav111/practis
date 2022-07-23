class Key {
    private signature: number;

    constructor(){
        this.signature = Math.random()
    }

    getSignature(): number{
        return this.signature;
    }
}

class Person {
    constructor(private key: Key){}

    getKey(): Key{
        return this.key
    }
}

abstract class House {
    protected doorPosition = false;
    private tenants: Person[] = []
    constructor(protected key: Key){}

    comeIn(persone: Person): void{
        if(!this.doorPosition){
            throw new Error('door close')
        }

        this.tenants.push(persone)
    }

    abstract openDoor(key: Key): boolean;
}

class MyHouse extends House{
    openDoor(key: Key) {
        if(key.getSignature() !== this.key.getSignature()){
            throw new Error('Key to another door')
        }
        return this.doorPosition = true
    }
}

const key = new Key();
console.log(key);

const house = new MyHouse(key);
console.log(house);
const person = new Person(key);
console.log(person);

house.openDoor(person.getKey());

house.comeIn(person);