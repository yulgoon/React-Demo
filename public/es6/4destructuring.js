const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// the new way of assigning array items to a variable:
// 배열 구조 분해
// const vehicles_ = ['mustang', 'f-150', 'expedition'];
const [car_, truck_, suv_] = vehicles;
console.log(vehicles, car_, truck_, suv_)

// When destructuring arrays, the order that variables are declared is important.
// If we only want the car and suv we can simply leave out the truck but keep the comma:
const [car__,, suv__] = vehicles;
console.log('car__: ', car__)
console.log('suv__: ', suv__)


//the old way of using an object inside a function:
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  let result = myVehicle(vehicleOne);
  console.log('result: ', result)

  // old way
  function myVehicle(vehicle) {
    return   'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
  }

  //the new way of using an object inside a function:
  myVehicle_(vehicleOne);
  // Notice that the object properties do not have to be declared in a specific order.
  function myVehicle_({type, color, brand, model}) {
    // const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    const message = `My ${type} is a ${color} ${brand} ${model}`;
    console.log('message: ', message)
  }

//   We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again /
//  destructure the items needed from the nested object:
  const vehicleOne__ = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicle__(vehicleOne__);
  // { } 양끝에 공백이 필요한지 확인해야함.
  function myVehicle__({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    console.log('message: ', message)
  }

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}  //배열 리턴

const [ add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add)
  console.log(subtract)
  console.log(multiply)
  console.log(divide)