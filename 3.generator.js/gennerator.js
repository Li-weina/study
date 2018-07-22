function * say(){
    yield 1;
    yield 2;
    yield 3;
}

let it = say();
let obj = it.next();
console.log(obj)
let obj1 = it.next();
console.log(obj1)
let obj2 = it.next();
console.log(obj2)
let obj3 = it.next();
console.log(obj3)

async function m (){
    await 
}