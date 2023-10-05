//           1)
// suppose we want all the varailbles to have value string

type value = string

// we can do this in types but can't using interface


//           2)
// suppose you want to make an array , and for defining for custom type of array type method is more easy

type stringArray = [string]

interface numberArray{
    [index : number] : number
}


//         3)
// functions rerpresentation in the form of types and interface

type logger = (msg : string , errorCode : number)=>void

interface loggerInterface{
    log : (msg:string , errorCode : number)=>void
}

//            4)
// defining unions is possible in types but not in interfaces

type text = string | number;


