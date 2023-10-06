type pairs = [number,number|string];


function fun(array:(number|string)[] , x:(number|string)) : pairs{

     for(let i = 0 ; i < array.length ; i++){
        if(array[i] == x){
            return [i,x]
        }
     }
     return [-1,-1]
}


console.log(fun([1,2,3,4],2));

console.log(fun(["abc","def","ghi"],"abc"))

// In the above example we can see that everything looks fine but what if the input we are giving would be string array
// and the the value we have to find is number at that time it will be the biggest error we might get ao at 
// that time we use GENERICS