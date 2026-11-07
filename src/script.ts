// let myString : string ='Programming Hero'

// myString =  "khalid Hasan"

// console.log(myString);

const Addto   = (a: number, b : number)=>{
return a + b
}

// console.log(Addto(20, 500));


const arr : string[] =["Programming", "Hero"

]
const array : Array<string> =["Programming", "Heroo"

]
arr.push(".com")

console.log(array);

const num : number []= [1,2,3,4,5]

console.log(num);




const dhakaLatLong :readonly[number, number] =  [234234.234,234234.234]
console.log(dhakaLatLong);


const concatName = (fistName : string , medidlName?: string, lastName? : string) =>{
    
    if(!lastName) {
        
        return fistName ;    
    }
    if (!medidlName) {
        return fistName + " " + lastName
    } else {
        return fistName + " "+ medidlName + " " + lastName
    }

    
}

console.log(concatName( "Md", "", ""));



const greeting =  ( fistName: string ,greeting: string ="Hello" ) : void=>  {
    console.log(greeting + " " + fistName); 
}

greeting( "Mir")
const sum  =  (...numbers : number[]) =>{
    return numbers.reduce((total , sum)=> total + sum , 0)
}

console.log(sum(1,2,3,4,5,6,7,8));


const logUserAction = (...args : [naem : string, age: number, isActive: boolean])=>{
    const  [ name , age, ] =  args;
    console.log(name + " is " + age);
}

logUserAction("KHalid", 22, true)