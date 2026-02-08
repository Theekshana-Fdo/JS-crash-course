class Animal {
    eat() {
        console.log("Every animal eats")
    }   
}

class Dog extends Animal{
    eat() {
        console.log("Dog eats meat")
        console.log("Dog eats vegs")
    }
}
