var work=function()
{
  var node = document.createElement("h2");
  console.log("node",node);
  node.innerText="There is a Centre student named Procras Tinator. Maybe today is the day that they woke up and decided to be productive! What's your move?";
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
    node2.innerText="You chose to get breakfast early and start reviewing for your first class. Way to be productive! But you lost track of time and have to be in class in 3 minutes! What's your move?";
    
    var body = document.querySelector("body");
    body.appendChild(node2);
    
    var button = document.querySelector("#secondClick");

    button.setAttribute("onclick",null);
}

var work3=function()
{
    var node3 = document.createElement("h2");
    console.log("node",node3);
    node3.innerText="You chose to go back to sleep. You wake up to realize that you have 3 minutes left before you have to be in class. What's your move?";
    
    var body = document.querySelector("body");
    body.appendChild(node3);
    
    var button = document.querySelector("#thirdClick");

    button.setAttribute("onclick",null);
}

var work4=function()
{
    var node4 = document.createElement("h2");
    console.log("node",node4);
    node4.innerText="You chose to head to class anyway! You've gone through the whole day and FINALLY it's 5 PM. What do you do now?";
    
    var body = document.querySelector("body");
    body.appendChild(node4);
    
    var button = document.querySelector("#fourthClick");

    button.setAttribute("onclick",null);
}

var work5=function()
{
    var node5 = document.createElement("h2");
    console.log("node",node5);
    node5.innerText="You chose to skip class and go back to sleep. You wake up late and realize that the day is better spent in bed. Now it's 5 PM, what's next?";
    
    var body = document.querySelector("body");
    body.appendChild(node5);
    
    var button = document.querySelector("#fifthClick");

    button.setAttribute("onclick",null);
}

var work6=function()
{
    var node6 = document.createElement("h2");
    console.log("node",node6);
    node6.innerText="You chose to go back to sleep for a \"short\" power nap. It's now 9 PM. Looks like it's gonna be another long night. Not so surprising for Procras Tinator!";
    
    var body = document.querySelector("body");
    body.appendChild(node6);
    
    var button = document.querySelector("#sixthClick");

    button.setAttribute("onclick",null);
}

var work7=function()
{
    var node7 = document.createElement("h2");
    console.log("node",node7);
    node7.innerText="You go to Cowan and run into some people that you know. You end up talking for about 4 hours. Now it's 9 PM. Looks like it's gonna be another long night. Not so surprising for Procras Tinator!";
    
    var body = document.querySelector("body");
    body.appendChild(node7);
    
    var button = document.querySelector("#seventhClick");

    button.setAttribute("onclick",null);
}

