// Snippet A
// let a = 12;
// let b = a;

// b = 30;
// b = 50;
// a = 0;

// console.log(a);
// console.log(b);

// 0, 50
// the value of the variables keep changing.
// but javascript always take the last value
// primitive assignment copy the value 


// Snippet B
// let obj1 = { name: "Tommy" };
// let obj2 = obj1;

// obj2.name = "Jackson";

// console.log(obj1.name);
// console.log(obj2.name);

// jackson, jackson
// since its a object, the two variable still share the same object, another object was not created
// this mean object assignment copies the refrence(they are still sharing the object)


// Snippet C

// let obja = { name: "Tommy" };
// let objb = obja;

// objb = { name: "Jackson" };

// console.log(obja.name);
// console.log(objb.name);

// tommy, jackson
// a new object was later reassign to objb


// Snippet D

// function birthday(person) {
//   person.age = person.age + 1;
// }

// function rename(name) {
//   name = "Unknown";
// }

// let user = { name: "Grace", age: 24 };
// let userName = user.name;

// birthday(user);
// rename(userName);

// console.log(user.age);
// console.log(userName);


// 25, grace
// the birthday function collected the whole user object and then changed somethig which affected cause its in reference
// username is just a variable that copied the same nme from what was in the obj but is not any part of the obj so the change in the function didnt affect it


// Snippet E

// let list1 = [1, 2, 3];
// let list2 = list1;
// let list3 = [...list1];

// list2.push(4);
// list3.push(5);

// console.log(list1);
// console.log(list2);
// console.log(list3);
// console.log(list1 === list2);
// console.log(list1 === list3);


//output:
//[ 1, 2, 3, 4 ]
//[ 1, 2, 3, 4 ]
//[ 1, 2, 3, 5 ]
//true
//false

// list two reference list 1 and they just share the same list
// and list 3 shares a shallow copy of list 1 and 2

// written questions:
// 1) because obj 2 was later assign to an entirely new obj
// 2) beacuse birthday shared a referenced obj and renamed just use a common variable that was assign to take what ever the name from the obj was
// 3) because there are two seperate array and assigned to two seperate variable
// 4) js default is variable if we dont asign and its a bad habit because we may later be forgetting that we need const, lets etc
