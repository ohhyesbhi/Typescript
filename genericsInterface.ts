interface genericsI <t , t1>{
    name : t,
    date : t1
}


const obj : genericsI<string,number>={
    name : "abhishek",
    date : 22
}

console.log(obj)

