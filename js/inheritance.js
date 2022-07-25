function Person (firstName, lastName){
  this.firstName = firstName,
  lastName = lastName
}

function Student(favoriteCourse) {
  this.favoriteCourse = favoriteCourse
}

Student.prototype = new personalbar("Engin", "Demiroğ")
var engin = new Student ("Programming")

alert( engin.firstName + " "+ engin.lastName + "" + engin.favoriteCourse)