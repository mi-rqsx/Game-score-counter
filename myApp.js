const player1 = {
    name: document.querySelector('#inpCompet1'),
    button: document.querySelector('#btnOnbehalfOf1'),
    dispSco: document.querySelector('#displSco1'),
    selectedAva: document.querySelector('#selecImg1').src
}

const player2 = {
    name: document.querySelector('#inpCompet2'),
    button: document.querySelector('#btnOnbehalfOf2'),
    dispSco: document.querySelector('#displSco2'),
    selectedAva: document.querySelector('#selecImg2').src
}

//here i need to create checkbox input with certain id and type:
//let j = 1; // to make checkbex's id different for each one
//here i determine class initially (even though i could add classList later)
//chbxI.id = `chbxNum${j}`; // id to be different for many checkbexes, that's why n is needed
// So, element is created but still is not embeded to anywhere


//here i need to embed checkboxes into (div #chbxDiv)
const chbxDiv = document.querySelector('#chbxDiv');
const rounds = document.querySelector('#numRounds');

rounds.addEventListener('change', () => {
    chbxDiv.innerHTML = '';

    for (let i = 1; i <= parseInt(rounds.value); i++) {
        const chbxI = document.createElement('input');
        chbxI.type = 'checkbox';
        chbxI.name = 'chbx1-1';
        chbxI.classList = 'chbxRounds';
        chbxI.id = 'chbx1-1' + i;
        chbxDiv.append(chbxI);
    }
})

// chbxDiv.prepend(chbxI);
// chbxDiv.append(chbxI);
// chbxDiv.append(chbxI);
// chbxDiv.append(chbxI);
// chbxDiv.append(chbxI);


// var counter = 1; //limits amount of transactions
// function addElements() {
//     if (counter < 5) //only allows 4 additional transactions
//     {
//         let div = document.createElement('div');
//         div.id = 'row' + counter;
//         document.body.appendChild(div);

//         let input = document.createElement('input');
//         input.id='search'+counter;
//         input.type = 'search';
//         input.placeholder = 'Search by product name'
//         div.appendChild(input);

//         let input1 = document.createElement('input');
//         input.id='checkbox'+counter;
//         input.type = 'checkbox';
//         div.appendChild(input1);

//         let button = document.createElement('button');
//         button.id ='button'+counter;
//         button.type = 'QRscan';
//         button.innerText = 'QR scan'
//         div.appendChild(button);
//     }

//     counter++
//     if (counter >= 6) {
//         alert("You have reached the maximum transactions.")
//     }
// }











let i = 0;
let isGameOver = false;
const maxScore = document.querySelector('#maxSco');


player1.button.addEventListener('click', () => {
    if (!isGameOver) {
        i++;
        player1.dispSco.innerText = i;
        if (player1.dispSco.innerText == maxScore.value) {
            isGameOver = true;
        }
    }




})






/*
const scores1 = document.querySelector('#scores1');
const scores2 = document.querySelector('#scores2');
const button1 = document.querySelector('#player1');
const button2 = document.querySelector('#player2');
const buttonReset = document.querySelector('#reset');
const select = document.querySelector('#maxSc');

scores1.innerText = 0;
scores2.innerText = 0;

button1.addEventListener('click', () => {

    let sco1 = scores1.innerText;
    sco1 = scores1.innerText;
    sco1 = `${parseInt(sco1) + 1}`;
    scores1.innerText = sco1;

    if (scores1.innerText == select.value) {
        scores1.style.color = 'green';
        scores2.style.color = 'red';
        button1.disabled = true;
        button2.disabled = true;
    }
})

button2.addEventListener('click', () => {
    let sco2 = scores2.innerText;
    sco2 = scores2.innerText;
    sco2 = `${parseInt(sco2) + 1}`;
    scores2.innerText = sco2;

    if (scores2.innerText == select.value) {
        scores2.style.color = 'green';
        scores1.style.color = 'red';
        button1.disabled = true;
        button2.disabled = true;
    }
})

buttonReset.addEventListener('click', reset)
select.addEventListener('change', reset)

function reset() {
    scores1.innerText = 0;
    scores2.innerText = 0;
    button1.disabled = false;
    button2.disabled = false;
    scores2.style.color = 'black';
    scores1.style.color = 'black';
}
*/