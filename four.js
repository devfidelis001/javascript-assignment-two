const students = [
  { name: "Gerald", age: 20, gender: "male", score: 72 },
  { name: "Victorious", age: 19, gender: "female", score: 88 },
  { name: "Fidelis", age: 11, gender: "male", score: 45 },
  { name: "Triumphant", age: 26, gender: "male", score: 64 },
  { name: "Blessing", age: 17, gender: "female", score: 91 },
  { name: "Tobi", age: 14, gender: "female", score: 38 }
];

//1
let collectGirls = students.filter((boys) => boys.gender == 'male')
console.log(collectGirls)

//2
let age = students.filter((ages) => ages.age < 15)
console.log(age)

//3 
let T = students.filter((names) => names.name.includes("T"))
console.log(T)


//4
let tCase = students.filter((names) => names.name.toLocaleLowerCase().includes("t"))
console.log(tCase)


//5
let studentNames = students.map((names) => names.name)
console.log(studentNames)

//6
let nameAge = students.map((nameAges) => (`${nameAges.name} - (${nameAges.age})`))
console.log(nameAge)

//7 ......

//8
let ageMap = students.map((ages) => ages.age)
let ageSum = ageMap.reduce((acc, num) => acc + num)
console.log(ageMap)
console.log(ageSum)


//9
let scoreMap = students.map((scores) => scores.score)
let scoreAdd = scoreMap.reduce((acc, num) => acc + num / scoreMap.length)
let scoreKeep = scoreMap.reduce((acc, num) => acc + num)
console.log(scoreAdd)

//10
let highest = scoreMap.reduce((acc, num) => {
//....................................
})

//11
const gender = [
keepMale = students.map((males) => (males.gender == 'male')),
keepFemale = students.map((females) => (females.gender == 'female'))
]


let male = keepMale.reduce((acc, num) => acc + num )

let female = keepFemale.reduce((acc, num) => acc + num )

const newObj = ((male, female) => {
    let show = {male: male, female: female}
    console.log(show)
})

newObj(male, female)



















// let final = gender.reduce = ((acc, num) => {
//     let males = gender.keepMale
//     let females = gender.keepFemale

//     let bundle = {male: males, female: females}
//     return bundle
// })

// console.log(final())

// let male = keepMale.reduce((males) => )

