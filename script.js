const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
    const test = "Testing";
    return test;
}
const call = padRow();
console.log(call);

for (let i = 0; i < count; i++) {
    rows.push(character.repeat(i + 1))
}

let result = "";

for (const row of rows) {
     result = result + "\n" + row;
}

console.log(result);

let inputCounter = 5;

document.getElementById('createButtonPh').addEventListener('click', function() {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-container');

    const counter = document.createElement('span');
    counter.textContent = inputCounter + ' ';

    const inputForm = document.createElement('input');
    inputForm.type = 'text';
    inputForm.placeholder = 'To-Do';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        formDiv.remove();
    });

    formDiv.appendChild(counter);
    formDiv.appendChild(inputForm);
    formDiv.appendChild(checkBox);
    formDiv.appendChild(deleteButton);
    
    document.getElementById('formContainerPh').appendChild(formDiv);

    inputCounter++;
});

let inputCounterAc = 5;
document.getElementById('createButtonAc').addEventListener('click', function() {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-container');

    const counter = document.createElement('span');
    counter.textContent = inputCounterAc + ' ';

    const inputForm = document.createElement('input');
    inputForm.type = 'text';
    inputForm.placeholder = 'To-Do';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        formDiv.remove();
    });

    formDiv.appendChild(counter);
    formDiv.appendChild(inputForm);
    formDiv.appendChild(checkBox);
    formDiv.appendChild(deleteButton);
    
    document.getElementById('formContainerAc').appendChild(formDiv);

    inputCounterAc++;
});

let inputCounterSp = 5;
document.getElementById('createButtonSp').addEventListener('click', function() {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-container');

    const counter = document.createElement('span');
    counter.textContent = inputCounterSp + ' ';

    const inputForm = document.createElement('input');
    inputForm.type = 'text';
    inputForm.placeholder = 'To-Do';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        formDiv.remove();
    });

    formDiv.appendChild(counter);
    formDiv.appendChild(inputForm);
    formDiv.appendChild(checkBox);
    formDiv.appendChild(deleteButton);
    
    document.getElementById('formContainerSp').appendChild(formDiv);

    inputCounterSp++;
});