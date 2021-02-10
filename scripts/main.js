window.addEventListener('load', main);

function main() {
    console.log('Page is fully loaded');
}
let c1;
let c2;

async function onClickColor1() {
    let utterance = new SpeechSynthesisUtterance("You Clicked Red");
    speechSynthesis.speak(utterance);
}

async function onClickColor2() {
    let utterance = new SpeechSynthesisUtterance("You clicked green");
            speechSynthesis.speak(utterance);
}