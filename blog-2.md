## TypeScript Generics: Write Once, Work Everywhere — Without Losing Type and how Generics Keep Your Code Reusable and Strictly Typed

## Introuction
Generic is a method that dynamically generalize the type of multiple array without losing any type.It generilize the type and make accessable for more use with individua type


## Build reusable components with Generic
```typescript
type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [1,2,3,4,5];
const isEligibleList:GenericArray<boolean> = [true,false];

```

In the given code we define the GenericArray type only once. But when we put `number` it represents a number array and when we put `boolean` it represents a boolean array. The type is the same but it is used in different places, and this is called the reusability of `Generic`.


## Build reusable Function with Generic

Before we declare function type without `Generic`

```typescript
const getFirstNumber = (array: number[]): number =>{
     return array[0];
}

const getFirstString = (array: string[]): string =>{
     return array[0];
}
```
Here have to write getFirstNumber and getFirstString as two individual functions.But both functions do the same thing return the first element of the array.When a new type arrives we have to write a new function again .This is problem.

After we declare function with Generic
```typescript
const getFirst = <T>(array: T[]) =>{
  return array[0];
}

getFirst([1, 2, 3]);          
getFirst(["a", "b", "c"]); 
```
In here getFirst<T> is the only function. T is the placeholder of the type when we call the function TypeScript automatically detects what T actually means here.when we put `number[]` T becomes number and when `string[]` T becomes string.Here one function work in any type.This called reusabillity.
In summary without `Generic` we have to write indiviual function for each type and with `Generic` one function is enough.


```typescript
const getFirst= <T>(array: T[]): T => {
  return array[0];
}

const first = getFirst([1, 2, 3]);
  first.toFixed(2);      

const second = getFirst(["a", "b", "c"]);
   second.toUpperCase();  
```
In here We see the main power of `Generic`.When we call getFirst([1, 2, 3])  function TypeScript knows the return type is number, that's why .toFixed() works here.When we call getFirst(["a", "b", "c"])  function TypeScript know the return type is string, that's why .toUpperCase() work here.Put any data structure here `Generic` will remember the exact type.That's called typed regardless of the data structures passed in.

## Conclusion
Generic is one of the powerful features of TypeScript. It solves two problems at once:
Reusability — Only one type or fuction is enough no need to write individual types or functions.
Strictly Typed — Give any data structure, TypeScript will remember the exact type and give you the error before your mistake.
