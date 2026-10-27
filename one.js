let person = {
  name: "Daniel",
  age: 30,
  occupation: "Software Engineer"
};
// one
let personName = person.name
let personOccupation = person['occupation']
console.log(personName,"--",  personOccupation)

// two
let changeName = {...person}
changeName.age = 31

console.log(changeName);

//three
let newPerson = structuredClone(person)
newPerson.address = {
    city: 'uyo',
}
console.log(newPerson)

// four
let key = 'occupation';
console.log(person[key])
// it did not work because key is not an original member of the object but it has the word that can be used to accesss the occupation

// five
delete newPerson.address
console.log(newPerson)

function describePerson(person){
    let name = person.name;
    let age = person.age;
    let occupation = person.occupation;
    console.log(`${name} is ${age} years old and work as a ${occupation}`)
}

describePerson(person)


