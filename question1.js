const result  = {
    name : "sanket",
    marks : 98
}

// What is the type here typescript is going to assume here ? 

// Do you think typescript will allow us to do result.marks = 100; (updating a old key value pair)
// --> YES

// Do you think typescript will allow this result.address = "hey"; (adding a new key value pair)
// --> NO , Because when we initialise the raw object this is what the typescript is going to assume

const result :{name:string,marks:number} = {
    name : "sanket",
    marks : 98
}

// so when we do result.address = "hey" we are voilating the above contract because in contract we never mentioned 
// there is a possibility to get an address so to mention it we have to write...

const result :{name:string , marks:number, address?:string} = {
    name : "sanket",
    marks : 98
}
