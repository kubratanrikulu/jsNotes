var firshParagraf = document.getElementById("introl")
var message = document.getElementById("message")
message.innerHTML = "Message : " + firshParagraf.innerHTML

var allul = document.getElementsByTagName("ul")
var underorder = allul[0]
var allli = document.getElementsByTagName("li")
var underorder = allli[1]

for (let index = 0; index < allli.length; index++) {
  alert(allli[i])
}

var allClassName = document.getElementsByClassName("introl")

var querySelector = document.querySelectorAll("p.intro2")
alert(querySelector[0])

var getName = document.getElementsByName("customerName")
alert(getName[0].value)

var nodeText = document.getElementById("nodes").childNodes[0].nodeValue
alert(nodeText)

var heading = document.createElement("h2")
var node = document.createTextNode("Hello Js")
heading.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")
div1.insertBefore(heading, p2)