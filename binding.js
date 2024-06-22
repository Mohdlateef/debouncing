
let obj1={
    a:4,
    b:2,
}
function fun1(...arg1){
    console.log(this.b);
    console.log(arg1)
}
let obj2={
    b:3,
    c:4,
}
// fun1.call(obj2,1)
fun1.call(obj1,4)
let arr=[1,2,3,4,5];
fun1.apply(obj1,arr)
let fun2=fun1.bind(obj2,100)
fun2(2,40);
fun2(40,50,60)