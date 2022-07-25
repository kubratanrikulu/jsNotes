function validate() {
  var numberEntered = document.getElementById("numberbox")
  if (numberEntered.checkValidity == false) {
    document.getElementById("demo").innerHTML = numberEntered.validationMessage
  }else {
    document.getElementById("demo").innerHTML ="Input Ok"
  }
}