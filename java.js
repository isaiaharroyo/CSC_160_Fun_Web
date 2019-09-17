var work = function()
{
  var node = document.createElement("h2");
  console.log("node",node);
  node.innerText="k bet";
  node.setAttribute("onclick","make()");
    
  var body = document.querySelector("body");
    body.appendChild(node);
    
  var button = document.querySelector("#firstClick");

  button.setAttribute("onclick",null);
}

var make = function()
{
    
}
