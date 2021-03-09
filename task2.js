// Задание №6
// Напишите функцию, которая удаляет определенный элемент из массива.
// (Input: arr=[1,2,3,4,3,2,1], item=2, Output: [1,3,4,3,1)

let arrayInput = [1,2,3,4,3,2,1];

// заменила метод indexOf на цикл

function arrayCleanPrintCycle (arr)
{
  for (let i = 0; i < arr.length; i++ )
  {
    if (arr[i] === 2)
    {
      result = arr.splice(i, 1);
    }
  }
  console.log (arr)
}
arrayCleanPrintCycle (arrayInput);