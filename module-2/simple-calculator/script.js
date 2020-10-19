const forms = document.querySelectorAll('.calc');

const operators = {
    "add" : function (x, y) { return parseInt(x + y) },
    "subtract" : function (x, y) { return parseInt(x - y) },
    "multiply" : function (x, y) { return parseInt(x * y) },
};

forms.forEach(function(currentForm){
    currentForm.addEventListener('submit', function(event){
        event.preventDefault();
        calculate(currentForm);
    })
})

function calculate(form){
    let result = operators[form.name](parseInt(form.numOne.value), parseInt(form.numTwo.value));
    let h = document.createElement("H1");
    h.innerText = `${form.name} ${form.numOne.value} and ${form.numTwo.value}, your result is is: ${result}`;
    document.body.appendChild(h);
}
