//            1)

let hi : "true" | "false" = "true"

let hey : string  = "haha"

hey = hi;  // here we can assign
hi = hey;  // here we cannot assign


//             2)

type complex = {real : number , imaginary : number}

interface Icomplex{
   real : number,
   imaginary : number
}

let c1 : complex = {
   real : 10,
   imaginary : 10
} 

let c2 : Icomplex = {
   real : 9,
   imaginary : 9
}

c1 = c2 ; // TS will consider complex and Icomplex same because the members are same .Although names are
          // different still it doesn't matter
console.log(c1)


//             3)

type complex = {real : number , imaginary : number}

interface Icomplex{
   real : number,
   imaginary : number,
   add : (c:complex)=>complex
}

let c1 : complex = {
   real : 10,
   imaginary : 10
} 

let c2 : Icomplex = {
   real : 9,
   imaginary : 9,
   add : (c)=>{return c}  // if we introduced a function we can see that everything works well
}

c1 = c2 ;
console.log(c1)

//                      4)

type complex = {real : number , imaginary : number}

interface Icomplex{
   real : number,
   imaginary : number,
   value : number
}

let c1 : complex = {
   real : 10,
   imaginary : 10
} 

let c2 : Icomplex = {
   real : 9,
   imaginary : 9,
    value : 10
 }

c1 = c2 ;  // and here also you can see that we can assign c2 to c1 without getting any error what is the
           //  reason behind it ? 
console.log(c1)

// REASON -: Because typescript will check for what do need for a variable to be a type complex and we can see that
//           we just need real and imaginary and now let's check doees Icomplex has real and imaginary ? YES
//           and if it has something extra it doesn't matter it will get assigned to c1