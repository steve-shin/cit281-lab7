class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = "CustomError";
    }
}


function throwCustomError() {
    throw new CustomError("Custom Error");
};

function throwGenericError() {
    throw new Error("Generic Error");
}

// function throwGenericError() {
//     throw new GenericError("Generic Error");
// };
// console.log(throwGenericError())


// console.log(throwCustomError);

console.log("Force Generic Error");
try {
    console.log("Generic Error try block");
    throwGenericError();
   // console.log(`${err.message} try block`)
} 
catch (err) {
    console.log("Generic Error catch block")
    console.log(`${err.name}: ${err.message}`);
}
finally {
    console.log("Generic Error finally block")
}


console.log("Force Custom Error");
try {
    console.log("Custom Error try block");
    throwCustomError();
} 
catch (err) {
    console.log("Custom Error catch block")
    console.log(`${err.name}: ${err.message}`);
}
finally {
    console.log("Custom Error finally block")
}