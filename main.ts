let a = 2
console.log(a)

a = 4
console.log(a)

let s = 'hello'

const b = 5
console.log(b)


/////////// generic /////////////

function calculate<T>(value: T) {
    return value
}

calculate(a)


/////////// interface /////////////

interface Person {
    name: string
    age: number
}

const person: Person = {
    name: 'John',
    age: 20
}

person.age += 10

console.log(person)
