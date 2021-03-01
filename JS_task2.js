// Задание №6
// Напишите функцию, которая удаляет определенный элемент из массива.
// (Input: arr=[1,2,3,4,3,2,1], item=2, Output: [1,3,4,3,1)


// variant 1
let arrayInput = [1,2,3,4,3,2,1];

function arrayCleanPrint(arr){
  for (let index = arr.indexOf (2, 0); index !== -1; index = arr.indexOf (2, 0)){
    result = arr.splice(index, 1)
  }
  console.log(arr)
}
arrayCleanPrint(arrayInput);

// variant 2
function arrayCleanPrint2(arr){
  let arrayClean = arr.filter(value => { return value !== 2});
  console.log(arrayClean)
}
arrayCleanPrint2(arrayInput)
