
//Problem 1
const filterEvenNumbers  = (arrayOfNumbers: number[])  => {
   const arrayOfEvenNumbers = [];
    for(const number of arrayOfNumbers){
        if(number%2== 0){
           arrayOfEvenNumbers.push(number);
        }
    }
    return arrayOfEvenNumbers ;
};

const evenNumbersArray = filterEvenNumbers([1, 2, 3, 4, 5, 6]) ;
console.log(evenNumbersArray);




// Problem 2
const reverseString = (inputString : string) => {
      const reverseStringWord = inputString.split('').reverse().join('');
      console.log(reverseStringWord);

};
reverseString("typescript")




// Problem 3
type StringOrNumber = string | number ;

const checkType = (inputType : StringOrNumber) => {
    if(typeof inputType === "string"){
        console.log("String");
    }
    else if(typeof inputType === "number"){
        console.log("Number");
    }
    
       
} ;
checkType("Hello")
checkType( 42 )





// Problem 4
type User = {
    id : number ;
    name: string ;
    age: number;
}

 const getProperty = <X>(object:X, key: keyof X ) => {

    console.log(object[key]);
 } ;

 const user:User = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");




//Problem 5
interface Book{
    title: string;
    author: string;
    publishedYear: number;
}
type BooleanProperty ={
    isRead : boolean;
}

const toggleReadStatus = (book:Book ) =>{
  
  const newMyBookObject :Book & BooleanProperty = {
    
    ...book,
    isRead: true

  }
   console.log(newMyBookObject);
};

const myBook: Book = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);






//Problem 6
class Person {
    name: string;
    age: number;

    constructor (name:string, age:number){
        this.name = name;
        this.age = age;
    }

}
class Student extends Person{
    grade: string;
    constructor(name:string,age:number,grade:string){
        super(name,age);

        this.grade=grade;
    }
    getDetails(){
        console.log(`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`);
    }
}


const student = new Student("Alice", 20, "A");
student.getDetails();





//Problem 7
const getIntersection = (firstArray :number[], secondArray:number[]): number[] =>{
     const commonArray = [];
     for(const firstArrayNumber of firstArray){
        for(const secondArrayNumber of secondArray){
            if(firstArrayNumber == secondArrayNumber){

               commonArray.push(firstArrayNumber);

            }
        }
     }
    return commonArray;


};

const commonElementsArray: number[] = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(commonElementsArray);
