type Fn1 = (a:number)=>number|string
type Fn2 = (a:string)=>string
type Fn3 = Fn1&Fn2
const fn:Fn3 = (a)=>'2'
console.log(fn(1))
console.log(fn('x'))