// function function1() {
//     const newElement = document.createElement('div');
//     newElement.textContent = 'Hello world';
//     document.querySelector("body").appendChild(newElement); // מוסיף את האלמנט לסוף האלמנט
// }

// function function2() {

//     const referenceElement = document.querySelector('#reference');
//     const newElement = document.createElement('p');
//     newElement.textContent = 'I am a sibling!';

//     // הוספה אחרי האלמנט
//     referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);

// }

// function function3() {

//     const element = document.querySelector('#myElement');
//     element.style.color = 'red';
//     element.style.backgroundColor = 'yellow';
//     element.style.fontSize = '20px';

// }


// function function4() {

//     const elements = document.querySelectorAll('p[id*="item"]');
//     elements.forEach((el) => {
//         el.style.border = '1px solid black';
//     });
// }

// function function5() {

//     window.addEventListener('load', () => {
//         console.log('Page loaded!');
//     });

//     const button = document.querySelector('#myInput');
//     button.addEventListener('click', () => {
//         alert('Button clicked!');
//     });

//     document.addEventListener('keyup', (event) => {
//         console.log(`Key pressed: ${event.key}`);
//     });



// }

// function5();


// מאזין אירוע על 
//   grandparent
document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('Grandparent clicked');
});

// מאזין אירוע על 
//   parent
document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent clicked');
});

// מאזין אירוע על 
//    child 
//  ועצירת ה
//    Bubbling
document.querySelector('#child').addEventListener('click', (event) => {
    console.log('Child clicked');
    // event.stopPropagation(); //  מניעת המשך עלית הארוע למעלה
});


function function6() {
    const element = document.querySelector('#child');

    // אפשרות 1: שימוש ב
    // remove()
    // element.remove();

    // אפשרות 2: הסרה דרך האב
    const parent = element.parentNode;
    parent.removeCtohild(element);


}


function function8() {

    const element = document.querySelector('#grandparent');
    const element1 = document.querySelector('#child');
    element1.classList.add("hidden")

    // הוספת מחלקה
    // element.classList.add('highlight');

    // הסרת מחלקה
    // element.classList.remove('highlight');

    // Toggle 
    //  מחלקה
    // (הוספה אם אינה קיימת, הסרה אם קיימת)
    element.classList.toggle('dream');

}

function function9() {
    let imageElement = document.querySelector("img");
    imageElement.setAttribute("src", "https://images.pexels.com/photos/12904144/pexels-photo-12904144.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")
    imageElement.style.width = "200px";
    imageElement.style.height = "200px";
}
