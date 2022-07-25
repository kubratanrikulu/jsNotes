var date = new Date()
var hour = date.getHours()

if (hour >= 5 && hour <= 11) {
  alert("Good Morning")
} else if (hour >= 11 && hour <17){
  alert("Good Afternoon")
}else if (hour >= 17 && hour < 23){
  alert("Good Evening")
}else {
  alert("Good Night")
}
var language = prompt("What is your English")
switch(language) {
  case "fr":
    alert("French")
    break;
  case "tr":
    alert("tr")
    break
  default:
    alert("English")
    break
}

