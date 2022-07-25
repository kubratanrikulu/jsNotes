var customer = {
  id: 1,
   contactName: "Engin"
}
customer.country = "Turkey"
customer.sayHello = function(){
  alery("Hello" + this.contactName)
}
customer.sayHello()