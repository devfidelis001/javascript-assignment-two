let register = [];

// 1. Add a student
function addStudent(register, name, age, gender, score) {
    register.push({
        name: name,
        age: age,
        gender: gender,
        score: score
    });
}

// 2. Update a student's score
function updateScore(register, name, newScore) {
    let student = register.find((student) => student.name === name);

    if (student) {
        student.score = newScore;
    } else {
        console.log(`${name} was not found in the register.`);
    }
}

// 3. Get the summary
function getSummary(register) {
    let total = register.length;

    let averageScore = total === 0
        ? 0
        : register.reduce((acc, student) => acc + student.score, 0) / total;

    let passed = register.filter((student) => student.score >= 50).length;

    let topStudent = register.reduce((top, student) =>
        student.score > top.score ? student : top
    , register[0]);

    return {
        total: total,
        averageScore: Number(averageScore.toFixed(2)),
        passed: passed,
        topStudent: topStudent ? topStudent.name : "None"
    };
}

// 4. Print the register
function printRegister(register) {
    register.forEach((student, index) => {
        console.log(`${index + 1} - ${student.name}: ${student.score}`);
    });
}

// 5. Add five students
addStudent(register, "Ada", 16, "Female", 82);
addStudent(register, "John", 17, "Male", 40);
addStudent(register, "Mary", 16, "Female", 90);
addStudent(register, "David", 17, "Male", 55);
addStudent(register, "Grace", 16, "Female", 68);

// 6. Update two scores
updateScore(register, "John", 47);
updateScore(register, "Ada", 82);

// 7. Print register and summary
printRegister(register);

let summary = getSummary(register);

console.log("\nTotal:", summary.total);
console.log("Average Score:", summary.averageScore.toFixed(2));
console.log("Passed:", summary.passed);
console.log("Top Student:", summary.topStudent);