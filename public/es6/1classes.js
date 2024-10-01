// == ES6 Classes ==
// javascript에서도 다음과 같이 클래스를 정의할 수 있습니다.
class Car {
    constructor(name) {
      this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
  }
  
const mycar = new Car("Ford");
// javascript runtime 환경 node.js에서는 terminal에서 출력 확인 가능
console.log(mycar)  //Car { brand: 'Ford' }
console.log(mycar.present())

class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar2 = new Model("Ford", "Mustang");

  console.log(mycar2)
  console.log(  mycar2.show())