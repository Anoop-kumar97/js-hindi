
//  Immediately Invoked function Expressions  ( IIFE )

(function chai(){                       //  Named iife
    console.log(`Data Base Connected`);
}) ();

//  ( function definetion ) ( execution )    IIFE => to Remove Pollution of Global Scope.

( (name) => {                            //    simple iffe
    console.log(`Data Base Connected Two ${name}`)
})("Anoop");

