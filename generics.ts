//                       1)

type pairs = [number,number];
type pairsString = [string,string]


function fun<t>( array : t[], x:t):[number,t]{

     for(let i = 0 ; i < array.length ; i++){
        if(array[i] == x){
            return [i,x]
        }
     }
     return [-1,x]
}

const numberArray : number[] = [1,2,3,4];
const stringArray : string[] = ["abc","def","ghi"];
const x : number = 2;
const y : string = "abc";

const nums = fun<number>(numberArray,x);
const strs = fun<string>(stringArray,y);

console.log(nums,strs)



//                           2)

class Stack <T>{
    private array : T[]

    constructor(){
        this.array = []
    }

    push(x:T):void {
          this.array.push(x);
    }

    pop():void{
        this.array.pop()
    }

    top():T{
        return (this.array[this.array.length-1]);
    }

    display():void{
        console.log(this.array)
    }
 }

 const st = new Stack<number>();
 st.push(10);
 st.push(20);
 st.push(30);
 st.push(40);
 st.pop()
 st.display()
 console.log(st.top())