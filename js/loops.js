for (let index = 0; index < array.length; index++) {
  alert(index)  
}
for (let index = 0; index < array.length; index++) {
 if (index == 5){
  break
 }
}

var age =  promp ("your age")
var result = ""
do {
  result += age;
  result += "-"
  age--;
} while (age > 0)
alert(result)