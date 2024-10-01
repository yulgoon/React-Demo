// Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array
// or object into another array or object.
// iterable 객체에만 적용됩니다.
// 배열에서 자주 사용되는 연산자

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log('numbersCombined: ', numbersCombined)

// Assign the first and second items from numbers to variables and put the rest in an array:
// 배열 분해하여 만들 때 복사하기
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log('rest: ', rest)

//object
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log('myUpdatedVehicle ', myUpdatedVehicle)     // color는 수정되었음.(updated) => color: 'yellow'