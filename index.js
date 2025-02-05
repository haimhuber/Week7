
function addCakes() {
    const cakesArr = [
        {
            cakeImgUrl: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600",
            cakeInstructions: "mix flour with milk",
            arrowImg: "https://t4.ftcdn.net/jpg/04/03/18/15/240_F_403181548_94NP0b7ooowJRzB2srpIewpYI0rYTCsS.jpg"
        },
        {
            cakeImgUrl: "https://images.pexels.com/photos/5945565/pexels-photo-5945565.jpeg?auto=compress&cs=tinysrgb&w=600",
            cakeInstructions: "do this and then",
            arrowImg: "https://t4.ftcdn.net/jpg/04/03/18/15/240_F_403181548_94NP0b7ooowJRzB2srpIewpYI0rYTCsS.jpg"
        }
    ]


    for (const curr of cakesArr) {
        const theCurrentCakeDiv = document.createElement('div');
        const currImg = document.createElement('img');
        currImg.setAttribute('src', curr.cakeImgUrl);
        currImg.classList.add("cake-img");
        const divForInstructions = document.createElement('div');
        const theH5 = document.createElement('h5');
        const theArrow = document.createElement('img');
        theArrow.setAttribute('src', curr.arrowImg);
        theH5.textContent = "show instructions";
        theH5.addEventListener('click', (event) => {
            event.target.parentNode.querySelector('p').classList.toggle('hdn');
        })
        const theInstructions = document.createElement('p');
        theInstructions.classList.add('hdn');
        theInstructions.textContent = curr.cakeInstructions;
        divForInstructions.appendChild(theH5);
        divForInstructions.appendChild(theInstructions);


        theCurrentCakeDiv.appendChild(currImg);
        theCurrentCakeDiv.appendChild(divForInstructions);

        document.querySelector("body").appendChild(theCurrentCakeDiv);
    }
}

addCakes();
