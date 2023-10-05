// OCT 2ND

// enums or enumeration
// it is a type that represents named constants which is internally mapped with bunch of integers and we can make enums
// to the numeric mapping or to a string also

// example -:  suppose you have tickets and ticket can have different states like [initialsed , cancelled, opened ,inProgress]
//             as we can see states have a defined set of values so instead of making dedicated variables like
//             const initial = "initialised" ; const cancel  = "cancelled" instead of using this we can make enums
//             and enums are nothing but the raw strings only

enum Ticketstates{            // we are writing it in caps because to differntiate with the variables
    INITIALISED,
    INPROGRESS,
    REJECTED,
    CLOSED
}

console.log(Ticketstates.INITIALISED) // O/P -: 0
console.log(Ticketstates.INPROGRESS) // O/P -: 1
console.log(Ticketstates.REJECTED) // O/P -: 2
console.log(Ticketstates.CLOSED) // O/P -: 3


const Ticket = {
    id : 1,
    title : "new ticket",
    status : Ticketstates.INITIALISED
}


//     and if we see o/p w.r.t to JS is then we can see IIFY

//     var Ticketstates;
//     (function (Ticketstates) {
//         Ticketstates[Ticketstates["INITIALISED"] = 0] = "INITIALISED";
//         Ticketstates[Ticketstates["INPROGRESS"] = 1] = "INPROGRESS";
//         Ticketstates[Ticketstates["REJECTED"] = 2] = "REJECTED";
//         Ticketstates[Ticketstates["CLOSED"] = 3] = "CLOSED";
//     })(Ticketstates || (Ticketstates = {}));

