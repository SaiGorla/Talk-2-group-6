
//Imports
import utter from './utter_data.js'
import data from './data.js'

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






let container1  = document.getElementById("c1");
let container2  = document.getElementById("c2");


let colors1 = ['blue','yellow','black','brown','orange'];
var randomColor1 = colors1[Math.floor(Math.random()*colors1.length)];
if (randomColor1 == 'blue'){
    var  str1 = " and now the color is changed to blue."
}
else if(randomColor1 == 'yellow'){
    var  str1 = "and now the color is changed to yellow."
}
else if(randomColor1 == 'black'){
    var  str1 = "and now the color is changed to black."
}
else if(randomColor1 == 'brown'){
    var  str1 = "and now the color is changed to brown."
}
else if(randomColor1 == 'orange'){
    var  str1 = "and now the color is changed to orange."
}

let colors2 = ['brown','red','yellow','blue','grey'];
var randomColor2 = colors2[Math.floor(Math.random()*colors2.length)];
if (randomColor2 == 'blue'){
    var  str2 = " and now the color is changed to blue."
}
else if(randomColor2 == 'yellow'){
    var  str2 = "and now the color is changed to yellow."
}
else if(randomColor2 == 'grey'){
    var  str2 = "and now the color is changed to grey."
}
else if(randomColor2 == 'brown'){
    var  str2 = "and now the color is changed to brown."
}
else if(randomColor2 == 'red'){
    var  str2 = "and now the color is changed to red."
}

container1.addEventListener('click',function(){
    document.getElementById("c1").style.background = randomColor1;
})

container2.addEventListener('click',function(){
    document.getElementById("c2").style.background = randomColor2;
})


 function onClickColor1() {

    utter.forEach(function(value){
        let utterance = new SpeechSynthesisUtterance(value.c1_message+str1);
        console.log(utterance)
        speechSynthesis.speak(utterance);
    });
   
}

 function onClickColor2() {

    data.forEach(function(value){
        let utterance = new SpeechSynthesisUtterance(value.c2_message+str2);
        console.log(utterance)
        speechSynthesis.speak(utterance);
    });

}