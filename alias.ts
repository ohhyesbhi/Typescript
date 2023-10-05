// suppose we are creating many objects at that type mentioning the type again and again becomes and hastle
// for example

const result1 :{name:string,marks:number} = {
    name : "sanket",
    marks : 98
}

const result2 :{name:string,marks:number} = {
    name : "sanket",
    marks : 98
}

// so instead of mention the type again and again we can do ..

type Studentmarks = {name : string , marks : number , address ? : number}


const result1 : Studentmarks = {
    name : "sanket",
    marks : 98
}

const result2 : Studentmarks = {
    name : "sanket",
    marks : 98
}

console.log(result1,result2)

// so here students is like a nick name or alias for the wghole type object