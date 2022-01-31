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
