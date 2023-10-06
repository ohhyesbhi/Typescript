//                1)

interface genericsI <t , t1>{
    name : t,
    date : t1
}


const obj : genericsI<string,number>={
    name : "abhishek",
    date : 22
}

console.log(obj)

//                 2)

interface Logable {
    log: () => void;
  }

  function logItems<T>(items: T[]): void {
    items.forEach(item => item.log());
  }

// here it accepts that each element of an array should have the log function but actually we can see they don't have so it starts giving an error
// and when we do .....

interface Logable {
    log: () => void;
  }

  function logItems<T extends Logable>(items: T[]): void {
    items.forEach(item => item.log());
  }

// now we can see that error has been gone , here we are not going to pass any kind of generic type we are only
// going to pass the generic type which can extend Loaggable interface now let's see what is going on now we are
// not saying that all the possible different types can be passed here in the log items but we are saying that 
// among all the different types only those types which have implemented this Logable interface are going to
// be supported this is nothing but PARAMETER CONSTRAINTS where we are not going to allow each and every different
// type of types we are going to constraint it that only the particular type of a type can added as generic in functions
 