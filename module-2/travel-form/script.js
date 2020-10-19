
const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const checkedInputs = []
    
    for(let i = 0; i < form.dietary.length; i++){
        if(form.dietary[i].checked){
            checkedInputs.push(form.dietary[i].value)
        }
    }
    // console.log(checkedInputs);
    alert(
        "First Name: " + form.fname.value + "\n" +
        "Last Name: " + form.lname.value + "\n" +
        "Age: " + form.age.value + "\n" +
        "Gender: " + form.gender.value + "\n" +
        "Destination: " + form.destination.value + "\n" + 
        "Dietary Restrictions: " + checkedInputs
    );
})