function sendEmail(personInterface) {
  var to = personInterface.eMail;
  var name = personInterface.name;

  var send = function(){
      alert("Mail sent to: " + name + "/" + to);
  }
  send();
}
function Customer(name,eMail){
  this.name=name;
  this.eMail=eMail;
  //other staff
}
function Employee(name,eMail){
  this.name=name;
  this.eMail=eMail;
  //other staff
}
var someCustomer=new Customer("engin","engin@goliq.net");
var someEmployee=new Employee("salih","salih@goliq.net");
sendEmail(someCustomer);
sendEmail(someEmployee);