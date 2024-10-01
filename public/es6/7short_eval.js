// 단축 평가(short-circuit evaluation)
// and, or, 논리연산 특징

let isValid = true

// old way
if(isValid) console.log("hello")

isValid && console.log("hello")

isValid=false
isValid && console.log("hello") // not printed

let a=20
console.log(isValid || a>10)
console.log(isValid || a<10)
isValid=true
console.log(isValid || a>10)
