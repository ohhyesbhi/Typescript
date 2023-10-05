// we want to define a comman type for authentication form s
// this commom type will take multiple parameters 
// - name 
// - handle submission
// - handle reset 
// - what should be the text of submitting form


interface Authform {
    name : string,
    buttonText : string,
    onSubmit : (e:any)=>void,
    onReset : (e:any)=>void,
}

const loginForm  : Authform =
{
    name:"login",
    buttonText : "login",
    onReset : (e)=>{
    },
    onSubmit : (e)=>{
    }
}

console.log(loginForm)

// o/p
// {
//     "name": "login",
//     "buttonText": "login"
//   } 