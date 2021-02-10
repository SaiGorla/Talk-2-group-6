
//Imports
import data from './utter_data.js'

let colorElement1 = document.getElementById("c1");
let colorElement2 = document.getElementById("c2");

function main() {
    console.log('Main function has started');
}
window.addEventListener('load', main);
colorElement1.addEventListener('click', onClickColor1);
colorElement1.addEventListener('touch', onClickColor1);
colorElement2.addEventListener('click', onClickColor2);
colorElement2.addEventListener('touch', onClickColor2);


async function onClickColor1() {

    data.forEach(function(value){
        document.getElementById("c1").innerHTML = value.c1_message;
        let utterance = new SpeechSynthesisUtterance(value.c1_message);
        speechSynthesis.speak(utterance);
    });
   
}

async function onClickColor2() {

    data.forEach(function(value){
        document.getElementById("c2").innerHTML = value.c2_message;
        let utterance = new SpeechSynthesisUtterance(value.c2_message);
        speechSynthesis.speak(utterance);
    });

}