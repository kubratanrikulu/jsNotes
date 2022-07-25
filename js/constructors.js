//this in func inside an obj
var student = {
  firstName : "Engin",
  lastName : "Demiroğ",
  fullName : function(){
    return this.firstName + this.lastName
  }
}
alert(student.fullName())

//obj constr.
//this in an obj
function Customer(first, last, city, age) {
  this.first = first,
  this.last = last,
  this.city = city,
  this.age = age
}

var someCustomer = new Customer("Engin", "Demiroğ", "Ankara", 30)
alert(someCustomer.city)