//   DATES =>

//        JavaScript Date objects represent a single moment in time in a platform-independent format.
//        It's define beginning of January 1, 1970, UTC-(coordinated Universal Time) .
//   Note: TC39 is working on Temporal, a new Date/Time API. 

//   Introduction
//          Date has been a long-standing pain point in ECMAScript.
//          This is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math),
//          that brings a modern date/time API to the ECMAScript language.

//  API Documentation -->
//              Temporal.Now
//     Temporal.Now.instant() - get the current system exact time
//     Temporal.Now.timeZoneId() - get the current system time zone
//     Temporal.Now.zonedDateTimeISO() - get the current date and wall-clock time in the system time zone and ISO-8601 calendar
//     Temporal.Now.plainDateISO() - get the current date in the system time zone and ISO-8601 calendar
//     Temporal.Now.plainTimeISO() - get the current wall-clock time in the system time zone and ISO-8601 calendar
//     Temporal.Now.plainDateTimeISO() - same as above, but return the DateTime in the ISO-8601 calendar

//   { TIME ZONE
//            year: 1995,
//            month: 12,
//            day: 7,
//            hour: 3,
//            minute: 24,
//            second: 30,
//            millisecond: 0,
//            microsecond: 3,
//            nanosecond: 500     }


let myDate = new Date()
// console.log(myDate.toString())          //   Sat Aug 03 2024 05:25:54 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())      //   Sat Aug 03 2024
// console.log(myDate.toLocaleString())    //   8/3/2024, 5:25:54 AM
// console.log(typeof myDate)              //   object 
console.log(myDate.toLocaleString("en-IN")) 

// let mycreateDate = new Date(2024,7,3,11,2)   //    month started to '0' in JS
// console.log(mycreateDate.toLocaleString())            //    8/3/2024, 11:02:00 AM

// let createDate = new Date(2024,7,3)   
// console.log(createDate.toDateString())     //    Sat Aug 03 2024 

let createDate = new Date("08-15-2024")
//  console.log(createDate.toLocaleString())    //   (mm-dd-yyyy / Time)
//  console.log(createDate.getTime())
let createMyDate = Date.now()
//  console.log(createMyDate)   //   check milliseconds according 1 jan 1970 to right now 
//  console.log(Math.floor(createMyDate/1000))   //  check in second

let newDate = new Date()
//  console.log(newDate)                   //     2024-08-03T13:06:59.832Z
//  console.log(newDate.getFullYear())     //     2024
//  console.log(newDate.getMonth() + 1)    //     8
//  console.log(newDate.getTime())         //     current milliseconds show

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric"
}))