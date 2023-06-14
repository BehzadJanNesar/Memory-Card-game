const cards = document.querySelectorAll(".card");

let cardOne , cardTwo;
let disableChoise = false;
let countCard = 0;


function findIndex(e) {
    var index = e.target;
    if (index != cardOne && !disableChoise) {
        index.classList.add("active");
        
        if (!cardOne) {
            return cardOne = index;
        }

        cardTwo = index;
        disableChoise = true;

        let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
        
        userWin(cardOneImg , cardTwoImg)

    }
}

function userWin( card1 , card2) {

    if (card1 === card2) {
        countCard++;

        cardOne.removeEventListener("click" , findIndex)
        cardTwo.removeEventListener("click" , findIndex)

        if (countCard == 8) {
            setTimeout(() => {
                return restartGame();
            }, 2000);
        }
        cardOne.classList.add("anime");
        cardTwo.classList.add("anime");

        cardOne = cardTwo = "" 
        return disableChoise = false;
    } else {
                
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);
        
        setTimeout(() => {
            cardOne.classList.remove("active" , "shake");
            cardTwo.classList.remove("active" , "shake");
            cardOne = cardTwo = ""
            disableChoise = false;
        }, 1200);
    }
    
}

function restartGame() {
    countCard = 0;
    cardOne = cardTwo = "";

    let arry = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arry.sort(()=> Math.random()-0.5);

    cards.forEach((index , i) => {

        let imgRandom = index.querySelector("img");
        imgRandom.src = `anime img/${arry[i]}.png`;


        index.classList.remove("active");
        index.addEventListener("click" , findIndex);
        index.classList.remove("anime");
        isStarting = true;
    })
}
restartGame();

cards.forEach(index => {
    index.addEventListener("click" , findIndex);
})