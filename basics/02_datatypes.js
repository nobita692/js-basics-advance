
// Data Type       Example                          Description
//Number	    42, 3.14, -0	                    Represents both integers and floats.
//String	   'Raja', "Hello"	                     Text enclosed in quotes.
//Boolean   	true, false	                       Logical value: yes/no, on/off.
//Undefined     	let x;	                     Variable declared but not assigned.
//Null          	null                        	Intentional absence of any value.
//Symbol	   Symbol('id')     	            Unique and immutable identifiers.
//BigInt	  9007199254740991n              	For large integers beyond Number.

let age = 20
let name = "Raja"
let isSyudentPass = true
let Data
let id = null
let user = Symbol('user')
let Number = 32223336272
console.log(age);
console.table([age,isSyudentPass,name,id,Data,user,Number]);

console.log(typeof id);
