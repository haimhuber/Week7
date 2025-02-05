function function1() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Hello world';
    document.querySelector("body").appendChild(newElement); // מוסיף את האלמנט לסוף האלמנט
}

function function2() {

    const referenceElement = document.querySelector('#reference');
    const newElement = document.createElement('p');
    newElement.textContent = 'I am a sibling!';

    // הוספה אחרי האלמנט
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);

}