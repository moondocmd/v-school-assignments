
let url = "https://api.vschool.io/michaelmooney/todo/"

// Get All
function getData(){
    axios.get(url)
        .then(response => { listData(response.data) })
        .catch(error => console.log(error))
}

function listData(data){
    clearList();
    data.forEach(element => createItem(element))
}

function clearList(){
    const el = document.getElementById("list");
    for (let i = el.childNodes.length; i > 2; i --){
        el.removeChild(el.lastChild);
    }
}

function addDeleteEvent(button){
    button.addEventListener("click", function(){
        const id = button.parentNode.childNodes[3].innerHTML;
        axios.delete(url + id)
        .then(button.parentNode.remove())
        .catch(error => console.log(error))
    });
}

function addEditEvent(button){
    button.addEventListener("click", function(){
        if (button.parentNode.childNodes[7].textContent === "edit"){ // put the todo in edit mode
            let newInput = document.createElement("input");
            let newInput2 = document.createElement("input");
            newInput2.value = button.parentNode.firstElementChild.textContent.replace(" [Image]", "");
            newInput.value = button.parentNode.childNodes[5].textContent;
            button.parentNode.replaceChild(newInput2, button.parentNode.firstElementChild);
            button.parentNode.replaceChild(newInput, button.parentNode.childNodes[5]);
            button.textContent = "save";
        } else { // in edit mode, update todo with new values
            updateTodo(
                button.parentNode.childNodes[3].innerHTML,
                button.parentNode.childNodes[1].value, 
                button.parentNode.childNodes[5].value
                );           
        }
    });
}

function updateTodo(id, title, description){
    const getURL = url + id;
    axios.put(getURL, {title: title, description: description})
    .then(setTimeout(() => {  getData(); }, 200)) //is there another way to do this?
    .catch(error => console.log(error))
}

function addCheckEvent(checkbox){
    checkbox.addEventListener( 'change', function() {
        let complete = this.checked ? true : false;
        const getURL = url + checkbox.parentNode.childNodes[3].innerHTML;
        axios.put(getURL, {completed: complete})
        .then(setTimeout(() => {  getData(); }, 200)) //is there another way to do this?
        .catch(error => console.log(error))
    });
}

function createItem(todo){
    let cln = document.getElementById("list").firstElementChild.cloneNode(true);
    cln.classList.remove("no-show");  
    if (todo.imgUrl){
        cln.firstElementChild.innerHTML += todo.title + '  <a href="' + todo.imgUrl + '" target="_blank"> [Image]</a>';
    } else { 
        cln.firstElementChild.textContent = todo.title;
    }

    if (todo.completed){
        cln.childNodes[11].checked = true;
        cln.childNodes[13].innerHTML = "Done";
    }

    cln.childNodes[3].textContent = todo._id;
    cln.childNodes[5].textContent = todo.description;
    addDeleteEvent(cln.childNodes[9]);
    addEditEvent(cln.childNodes[7]);
    addCheckEvent(cln.childNodes[11]);
    document.querySelector('#list').appendChild(cln);
}

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();

    const newTodo = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        imgUrl: document.getElementById("img_url").value
    }

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("img_url").value = "";
    
    axios.post(url, newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
};

//important
getData()