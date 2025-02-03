const referenceElement = document.querySelector("#parent");
//Exercise 1
const newElement = document.createElement('h2');
newElement.textContent = 'I am a sibling';
document.querySelector("#parent").appendChild(newElement);

//Exercise 2
const newElement2 = document.createElement('div');
newElement2.textContent = 'I am a Div 1';
const ref = document.querySelector("#sibling");
referenceElement.insertBefore(newElement2, ref);

//Exercise 3
const newElement3 = document.createElement('div');
newElement3.textContent = 'I am a Div 2';
const ref2 = document.querySelector("#sibling2");
referenceElement.insertBefore(newElement3, ref2);


//Exercise 4
const childColor = document.getElementById('child');
childColor.style.color = 'red';


//Exercise 5
const sibText = document.querySelectorAll('#sibling');
sibText.forEach((element) => {
    element.style.color = 'blue';
    element.style.fontSize = '28px'
    
});
