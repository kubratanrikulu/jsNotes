function eventCode (){
 alert("Selam")
}

{/* <button onClick= "eventCode()"></button> */}

document.getElementById("tryit").addEventListener("click", changeColor)

function changeColor() {
  document.getElementById(intro1).style.color = "blue"
}

document.getElementById("tryit").removeEventListener("click", changeColor) //eventi silme