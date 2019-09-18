var work=function()
{
  var node = document.createElement("h2");
  console.log("node",node);
  node.innerText="There is a Centre student named Procras Tinator. Today they woke up and decided to be productive! To start the day, you:";
  node.setAttribute("onclick","make()");
    
  var body = document.querySelector("body");
    body.appendChild(node);
    
  var button = document.querySelector("#firstClick");

  button.setAttribute("onclick",null);
}

var work2=function()
{
    var node2 = document.createElement("h2");
    console.log("node",node2);
    node2.innerText="You chose to get breakfast early and start reviewing for your first class. Way to be productive!";
    
    var body = document.querySelector("body");
    body.appendChild(node2);
    
    var button = document.querySelector("#secondClick");

    button.setAttribute("onclick",null);
}

var make1 = function()
{
    
}

var make2 = function2()
{
    
}
