# Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data by type narrowing


## Introduction--------------------------------------------------------------

We breakup from javascript and switch to Typescript only for get type safety, but `any` breaks the base of type safety.
In this blog we will see how `any` destoyed the type safety, why `unknown` is safer choice and how we can define types explicitly through `unknown` and rebuild our type safety by type narrowing.


## `any` the dangerous typesafety whole in typescript

We often search for a shortcut type declaration in a variable that's why we use `any` as a type for that variable. As a result, typeScipt stops type checking for that particular variable. That means you can do any operation or changing in that variable typeScript will not give you any objection.For example:

```typescript 
 let data:any = 'hello';
 data = 32;
 console.log(data.toUpperCase());  
```
Here the code get Error in runtime.If we look at the code variable data was a sting 'hello' we updated it to a number 32.But in console log we use call the toUppercase() function, which is a string method property but the data variable already update to a number.

TypeScript does not give us error because we use `any` type in data variable.That's why we couldn't find any error while we write the code.Think about big project and unpredictable value we can't imagine the type and detect the problem. As a result, it creates a type safety hole.


# `unknown` the safer choice for handling unpredictable data

`unknown` is an alternative type of `any`.After declaring a variable type as `unknown` we can't do any change or operation that variable until we check and confirm its type.

```typescript 
let data: unknown = "Hello";

console.log(data.toUpperCase());
console.log(data.length); 
```

In this code we saw red line Error in consloe log at data variable because we declare data variable as `unknown` type, this is the main safety base of TypeScript.Until we explicitly perform type checking and confirm what type it is, TypeScript will not allow us to perform any operation on that variable.

## Type Narrowing — The Key Concept

Type narrowing means explicitly define the type of a variable by using type guards.That means we tell TypeScript more accurately what the variable type is and how it will be used.
There are many type guards like typeOf, instanceof etc. In this blog we will use typeOf type guard for type narrowing.

```typescript
function formatValue(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  if (typeof data === "number") {
    return data.toFixed(2); 
  }
  return "Unknown type";
}

console.log(formatValue("hello")); 
console.log(formatValue(32)); 

```

Here in the formatValue function we explicitly define the type of the value variable by using typeof type guard.We can safely define the type and also show a message if the type is not string or number by else statement.
Therefore, we successfully declare types explicitly through `unknown` and rebuild our type safety by type narrowing.

## Conclusion
In conclusion, `any` removes TypeScript’s type checking and creates a type safety hole where we see errors at runtime.
On the other hand, `unknown` keeps the type safety, gives us red line warning and forces us to check the type before using it. Finally, type guards like typeof,instanceof we can safely define the type and make the code predictable again.