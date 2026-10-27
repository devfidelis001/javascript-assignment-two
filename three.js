const students = [
  { name: "Gerald", age: 20, gender: "male", score: 72 },
  { name: "Victorious", age: 19, gender: "female", score: 88 },
  { name: "Fidelis", age: 11, gender: "male", score: 45 },
  { name: "Triumphant", age: 26, gender: "male", score: 64 },
  { name: "Blessing", age: 17, gender: "female", score: 91 },
  { name: "Tobi", age: 14, gender: "female", score: 38 }
];

// 1
let number = students.forEach((call) => console.log(`${students.indexOf(call) + 1} - ${call.name}`))



//2
let score = students.forEach((count) => {
  if(count.score > 50){
    console.log(`${count.name} - PASSED`)
  }

  else{
    console.log(`${count.name} - FAILED`)
  }
})


// 3
let collectGirls = students.filter((girls) => girls.gender == 'female')
let putGirls = collectGirls.map((girls) => girls.name)
let counter = putGirls.length
console.log(counter)


//4
let returnValue = students.forEach((value) => {
  return value.name
})

let value = returnValue
console.log(value)

// undefined

//4b

// use map to group or collect items into a list and use for each to loop through and work with objest individually and do something

