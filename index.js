function function1() {
    const newElement = document.createElement("h1");
    newElement.textContent = "Hello";
    document.querySelector("#container").parentNode.appendChild(newElement);
}

function function2() {
    const changeColor = document.querySelectorAll('[id*="p"]')
    changeColor.forEach(curr => {
        curr.style.color = 'red';
    });
}

function function3() {
    document.querySelector("#p3").remove();
}

function function4() {
    const changeColor = document.querySelectorAll('[id*="p"]')
    changeColor.forEach(curr => {
        curr.style.border = '2px black solid';
    });
}

function function5() {
    const button = document.querySelector("#clickMe");
    button.textContent = "Clicked";
}

function function6() {
    const theBody = document.querySelector("body");
    theBody.addEventListener('click', () => {
        document.querySelector("body").style.backgroundColor = 'yellow';
    });

}

function function7() {
    const newul = document.createElement('ul');
    const newli = ['item1', 'item2', 'item3'];
    newli.forEach(li => {
        const newil = document.createElement('li');
        newil.textContent = li;
        newul.appendChild(newil);
    });
    document.querySelector('#container').parentNode.appendChild(newul);
}

function function8() {
    const newPicsrc = document.createElement('img');
    newPicsrc.setAttribute("src", "https://images.pexels.com/photos/30462129/pexels-photo-30462129/free-photo-of-majestic-himalayan-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");
    newPicsrc.style.width = '300px';
    newPicsrc.style.height = '300px';
    document.querySelector("#container").parentNode.appendChild(newPicsrc);
}


function function9() {
    const fontChange = document.querySelectorAll('[id*="p"]');
    fontChange.forEach(curr => {
        curr.style.fontFamily = "Arial, Helvetica, sans-serif";
    });
}

function function10() {
    document.querySelector("#clickMe").remove();
}
