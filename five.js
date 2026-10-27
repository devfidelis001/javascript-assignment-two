let register = [
    { name: "Gerald", age: 20, gender: "male", score: 72 }
];

function addStudent(register, name, age, gender, score){
    register.push({name: name, age: age, gender: gender, score: score})
}


function updateScore(register, name, newScore) {
    let check = register.filter((student) => student.name == name);

    if (check.length > 0) {
        check[0].score = newScore;
    } else {
        console.log("Student not found");
    }
}



function getSummary(register){
    // amount of student
    let getAmount = register.map((count) => count.name)
    let amount = getAmount.length
    console.log('total amount of student: ', amount);

    // class average  
    let getScore = register.map((score) => score.score);
    let scoreAverage = getScore.reduce((acc, num) => acc + num / getScore.length)
     console.log(scoreAverage.toFixed(2));

    // passed studenst
    let passed = register.filter((pass) => pass.score > 49)
    console.log('passed student: ', passed)


}


addStudent(register, 'fidelis', 11, 'male', 50);
updateScore(register, 'fidelis', 49 )
console.log(register);
getSummary(register)
