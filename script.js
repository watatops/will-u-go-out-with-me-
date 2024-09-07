const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

let noBtnWidth = 100;
let noBtnHeight = 50;

noBtn.addEventListener('click', () => {
    noBtnWidth += 20;
    noBtnHeight += 10;
    noBtn.style.width = `${noBtnWidth}px`;
    noBtn.style.height = `${noBtnHeight}px`;
});

yesBtn.addEventListener('click', () => {
    alert('Yay! You said yes!');
    // You can add more code here to handle the "yes" response
});