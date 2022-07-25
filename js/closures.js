var counter = 0
function add (){
  var counter = 0;
  counter +-1;
  return counter
}

function someOtherFunc (){
  counter += 10
}


//global olup priv 
var add = (function () {
  var counter = 0;
  return function(){
    return counter += 1
  }
})
