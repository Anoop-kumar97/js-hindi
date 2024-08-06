 //  ***  Marge Array   *** 

const marval_heros = ["thor","ironman","spiderman"]
const dc_heros = ["batman","flash", "superman"]

// marval_heros.push(dc_heros)     //      it's not good type of marge
// console.log(marval_heros)      //  [ 'thor', 'ironman', 'spiderman', [ 'batman', 'flash', 'superman' ] ]

  const newHeros = marval_heros.concat(dc_heros)  // concat method ,  it's good
 // console.log(newHeros)             //  [ 'thor', 'ironman', 'spiderman', 'batman', 'flash', 'superman' ]

const all_new_Heros = [...marval_heros,...dc_heros]   // Spread method, Mostly uses this method.for marge
 console.log(all_new_Heros)       //       [ 'thor', 'ironman', 'spiderman', 'batman', 'flash', 'superman' ]


//   ***  Nested Array  => convert to a single Array / spread    ***

const num_arr = [1,2,3,[4,5,6],7,8,[9,10,[11,12,[0,50],13],14,15],16]

// const new_num_arr = num_arr.flat(Infinity)  // it's good but Mostly use number count
const new_num_arr = num_arr.flat(3)    //  Mostly uses
console.log(new_num_arr)



console.log(Array.isArray("Anoop"))   //  Ask  -  it is Array  => it's not A Array.
console.log(Array.from("Anoop"))      //  it's Array
console.log(Array.from({name: "Anoop"}))  //  interesting ,  value received empty Array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))    //  Return a new Array from a set of elements.
// Receive Value =>  [ 100, 200, 300 ]