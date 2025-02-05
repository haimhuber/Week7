function function1() {
    const parentElement = document.querySelector("#parent");
    const newElement = document.createElement('h2');
    newElement.textContent = "I am h2"
    parentElement.parentNode.appendChild(newElement);
}
function1();

function function2() {
    const newDiv = document.createElement('div');
    newDiv.textContent = "I am Div 1";
    document.querySelector("#parent").insertBefore(newDiv, document.querySelector("#sibling"));
}
function2();


function function3() {
    const newDiv = document.createElement('div');
    newDiv.textContent = "I am Div 2";
    document.querySelector("#parent").insertBefore(newDiv, document.querySelector("#sibling").nextSibling);
}
function3();

function functio4() {
    const child = document.querySelector('#child');
    child.style.color = 'blue';
}
functio4();

function functio5() {
    const child = document.querySelectorAll('[id*="sibling"]');
    child.forEach(element => {
        element.style.fontSize = '18px';
    });
}
functio5();
