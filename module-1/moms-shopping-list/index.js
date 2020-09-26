var list = document.querySelector('#list');

function addDeleteEvent(button){
    button.addEventListener("click", function(){
        button.parentNode.remove();
    });
}

function addEditEvent(button){
    button.addEventListener("click", function(){
        if (!button.parentNode.lastElementChild.id){ // make sure item is not in edit mode
            let newInput = document.createElement("input");
            newInput.id = "new-input";
            newInput.value = button.parentNode.firstElementChild.textContent;          
            button.parentNode.append(newInput);
            button.textContent = "save";
        } else { // in edit mode, save the new item and update form
            button.parentNode.firstElementChild.textContent = 
                document.getElementById("new-input").value;
            
            button.textContent = "edit";
            button.parentNode.lastElementChild.remove();            
        }
    });
}

function createItem(todo){
    let cln = document.getElementById("list").firstElementChild.cloneNode(true);
    cln.classList.remove("no-show");
    cln.firstElementChild.textContent = todo;
    addDeleteEvent(cln.lastElementChild);
    addEditEvent(cln.childNodes[3]);
    list.appendChild(cln);
}

// add delete listener
const delButtons = document.getElementsByClassName("delete");
for (let button of delButtons) addDeleteEvent(button);

// add edit listener
const editButtons = document.getElementsByClassName("edit");
for (let button of editButtons) addEditEvent(button);

document.querySelector("form").onsubmit = (e) => {
        e.preventDefault();
        createItem(document.getElementById("title").value);
        document.getElementById("title").value = "";
};
