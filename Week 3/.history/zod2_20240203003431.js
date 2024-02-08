const zod = require("zod");


//zod is independent of express its just a validation library
//let the input be :-
// {
//     email: string => email
//     password : at least 8 characters
//     country: "IN" , "US" 
// }
//Zod schema for above input 

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
        country: zod.literal("IN").or(zod.literal("US")),
        kidneys: zod.array(zod.number())
    });

    const response = schema.parse(obj);
    console.log(response);
}

validateInput()