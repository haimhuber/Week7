function function1() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Hello world';
    document.querySelector("body").appendChild(newElement); // מוסיף את האלמנט לסוף האלמנט
}