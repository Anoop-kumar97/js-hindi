 // const tinderUser = new Object()   //  singleton object
  const tinderUser = {}

  tinderUser.name = "Anoop"
  tinderUser.age = 25
  tinderUser.isLogin = false
 // console.log(tinderUser)

const regUser = {
    email: "regular@abc.com",
    fullname: {
        userfullname:{
                 firstname: "Anoop",
                 lastname: "Fauzdar"
        }
    }
}
// console.log(regUser.fullname.userfullname.firstname)


// ****   Marge Objects    ****

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//  const obj4 = Object.assign(obj1,obj2,obj3)
  const obj4 = {...obj1, ...obj2,...obj3}
//  console.log(obj4)

//  **  Object in Array   ** 

const user = [
    { 
          id: 1,
        email: "a@gmail.com"
    },
    {  
         name:"anoop",
        age: 25
    },
    { 
          city: "nadbai",
        pincode: 321601
    },
    {
      location: "jaipur",
      contact: 9785756626
    }
];

 //  console.log(user[1].age)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))      // [ 'name', 'age', 'isLogin' ]
// console.log(Object.values(tinderUser))    // [ 'Anoop', 25, false ]
// console.log(Object.entries(tinderUser))   // [ [ 'name', 'Anoop' ], [ 'age', 25 ], [ 'isLogin', false ] ]

//  console.log(tinderUser.hasOwnProperty('Anoop'))  //  check avilable keys


// *******************************************************************************************************

// +++++++++       Object  Destructuring           ++++++++++

const course = {
  courseNmae: "JS in Hindi",
  coursePrice: 999,
  courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course   //   it's destructuring
// console.log(instructor);


// ++++   Object API   => Json Format     +++++
//   "name": "Anoop",
//   "courseName": "JS in Hindi",
//   "price": "Free"
//   "user":  150000
// }

//   ++++++   Array API  => Json Format     ++++++++
 
[
  {},
  {},
  {}
]