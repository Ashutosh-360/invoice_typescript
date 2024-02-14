// TypeScript is a statically-typed superset of JavaScript that adds optional static typing to the language. It is designed and maintained by Microsoft. TypeScript code is transcompiled to JavaScript, which means that TypeScript code can be run on any JavaScript runtime.

// Key features of TypeScript include:

// Static Typing: TypeScript allows developers to specify types for variables, function parameters, and return values.
// This helps catch type - related errors during development, before the code is even run.

// ECMAScript Compatibility: TypeScript is a superset of JavaScript, meaning that all valid JavaScript code is also valid TypeScript code.
//  Developers can gradually adopt TypeScript in existing JavaScript projects.

// Object-Oriented Programming Features: TypeScript supports features such as classes, interfaces, inheritance, and modules, making it more suitable for large-scale, object-oriented development.

// Tooling and IDE Support: TypeScript is well-supported by modern development tools and integrated development environments (IDEs).
// This includes features like autocompletion, refactoring support, and better code navigation.

// Readability and Maintainability: With the use of static types and enhanced tooling support,
// TypeScript can improve code readability and maintainability.It provides better documentation for functions and classes through type annotations.

// Enhanced Editor Experience: TypeScript-aware editors, such as Visual Studio Code, provide richer development experiences, including better code suggestions, error checking, and navigation.

// Code Quality: The use of static typing can catch potential errors early in the development process, leading to higher code quality and reducing the likelihood of runtime errors.

// Developers choose TypeScript over JavaScript for these reasons, especially in larger projects or when working with teams.
// However, it's important to note that TypeScript is not always necessary for all projects, and the decision to use it depends on factors such as project size, team expertise, and specific requirements. Small and simple projects may not benefit as much from TypeScript as larger, more complex ones.

// To understand type safety, consider an example where you define a variable name. In JavaScript, you would use a similar code as below:

// var name = "Harshil"
// Since this is a variable name and we haven’t defined its type, this variable can have any value. It doesn’t matter if it’s a string, number, boolean, or object. Hence, the below code will execute without errors:

// name = 17

// name = false

// name = {
// first: "Harshi",
// last: "Agrawal:
// }
// Using TypeScript, you can define the type string for the variable name, as below:

// var name :string = "Harshil"
// If you change its value to any other type, the compiler returns an error.
// Type safety saves a lot of debugging time and helps in keeping the code consistent.

// Interface
// You receive an object when you call any Contentful API. This object response contains the necessary data that you need. Similar to the Contentful API, other APIs also send an object as a response.

// Interfaces get used to ensure that the object contains the required data with the correct data type. This object can be a response or request body or parameters for a function.

// An interface has the following syntax:

// interface interfaceName {
// 	variableOne: type;
// 	variableTwo: type;
// }
// Using the above syntax, we can create an interface Profile with the properties name and social.

// interface Profile {
// 	name: string;
// 	social: string;
// }
// The above interface can be used as follow:

// function hello (params: Profile) {
// 	return "Find " + params.name + " here " + params.social
// }
// The above is a simple example of interfaces. There are various other functionalities that interfaces provide. You can set optional properties, extend interfaces to add new properties, and more. To learn more about interfaces, refer to the TypeScript documentation.

// Literal Types
// Another feature that I find useful is Literal Types. Though, by themselves, they’re not so useful. But one can combine them into unions, which makes the Literal Types useful.

// The following example demonstrates the syntax of Literal Types.

// let social: "twitter" = "harshil1712"
// Here, the variable social has the type “twitter.” However, this isn’t useful on its own.

// function greet(message: string, name: "Alice" | "Bob" ){
// 	//...
// }
// greet("Hello", "Alice" );
// greet("Hey", "Bob");
// greet("Hey", "Max"); // Argument of type '"Max"' is not assignable to parameter of type '"Alice" | "Bob"'.
// In the above function, the second parameter can only take values that have the type of either “Alice” or “Bob.” This helps us in writing functions that only accept a certain set of known values. They can do much more with Literal Types. Read the official documentation to learn more.
