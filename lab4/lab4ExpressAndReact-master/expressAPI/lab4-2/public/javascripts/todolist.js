console.log("in script");

var req;

// use this class (or an equivalent constructor function) 
// if you want to represent a todo item as a class instance rather
// than an 'ad-hoc' object
class ToDoItem {
    constructor(todo){
        this.todo = todo;
        this.done = false;
    }
}

function gettodos()
{
    var url = "http://localhost:3000/todos";
    req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = gettodoscallback;
    req.send(null);

    // alternative version - with this you don't need to check for readystate/status or parse result as JSON
    // var url = "/todos";
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => gettodoscallback(data))
}

function gettodoscallback()
{
    if (req.readyState == 4) {
        if (req.status == 200) {
            var response = JSON.parse(req.responseText);
            var todolist = document.getElementById("todolist");
            todolist.innerHTML="";
            for (i = 0; i < response.length; i++) {
                var value = response[i];    // using ad-hoc object
                //var value = new ToDoItem(response[i].todo);   // using class
                var node = document.createElement("li");                
                var textnode = document.createTextNode(value.todo); 
                //var textnode = document.createTextNode(value.title); 
                node.appendChild(textnode);  
                todolist.appendChild(node);
            }
        }
    }
}

window.onload = function(){
    gettodos();
    document.getElementById("addtodo").onsubmit = addtodo;
    document.getElementById("clear").onclick = cleartodos;
}

var addtodo = function (e) {
    // suppress form submit to prevent page refresh
    // need this as button in form is an input/submit element
    e.preventDefault();

    // get the form data and embed in object 
    var newtodo = document.getElementById("todo");
    // var data = {todo: newtodo.value, done: false };   // using ad-hoc object
    var data = new ToDoItem(newtodo.value);    // using class
    newtodo.value="";

    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:3000/todos/add", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the data as JSON
    xhr.send(JSON.stringify(data));
    xhr.onloadend = gettodos;
};


var cleartodos = function(){   
     // suppress form submit to prevent page refresh
     //e.preventDefault();

    // construct an HTTP request
    var xhr = new XMLHttpRequest();

    // send the request
    xhr.open("get", "http://localhost:3000/todos/clear", true);
      xhr.send(null);
      xhr.onloadend = gettodos;
 }