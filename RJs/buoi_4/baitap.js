// map------------------------------------
const birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];

birdId = birds.map(
    bird=>
    console.log(bird.ID)
    )
console.log(birdId);

// Set--------------------------
const mySet= new Set();
mySet.add('dog');
mySet.add('dog2');
mySet.add('dog3');
mySet.add('dog4');
mySet.add('dog5');
console.log(mySet.has('dog3'));
console.log(mySet.delete('dog'));

for(let animal of mySet){
    console.log(animal)
}

// Static-----------------------
class Thing {
    constructor(name, description, func){
        this.name = name;
        this.description = description;
        this.func = func * 3;
    }
//     Func(item = 1){
//         console.log(item*3);
//     }
}

class Thing1 extends Thing {
    constructor( name , description, func, long){
        super( name , description, func);
        this.long = long;
    }
}

let thing = new Thing1( "DPAT" , 27 , 4, "1m7");
console.log(thing);

// Getter and Setter--------------
class Person {
    constructor(name, constructor){
        this.name = name;
        this.constructor = constructor;  
    }
    get getName() {
        return this.name;
    }
    get getConstructor() {
        return this.constructor;
    }
    set setName(name) {
        this.name = name;
    }
    set setConstructor(constructor) {
        this.constructor = constructor;
    }
    walk(){
        console.log('Dang di chuyen');
    }
}

class Programmer extends Person {
    constructor(name, constructor,language){
        super(name, constructor);
        this.language = language;
    }
    writeCode(){
        console.log("Dang viet code")
    }
}


