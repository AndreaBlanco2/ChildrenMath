const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');

const audio = document.getElementById('wrongsound');
const audio2 = document.getElementById('correctsound');

var answer = 0;

function genEq() {
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);

    var dummy1 = Math.floor(Math.random() * 13);
    var dummy2 = Math.floor(Math.random() * 13);


    answer = num1 + num2;
   
    var allAnswers = [answer, dummy1, dummy2];
    var shuffled = [];

    for( var i =allAnswers.length; i--;){
        shuffled.push(allAnswers.splice(Math.floor(Math.random() *(i+1)) , 1)[0]);
    }

    console.log(shuffled[0]);
    console.log(shuffled[1]);
    console.log(shuffled[2]);

    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    opt1.innerHTML = shuffled[0];
    opt2.innerHTML = shuffled[1];
    opt3.innerHTML = shuffled[2];
}

opt1.addEventListener('click', () => {
    if (opt1.innerHTML == answer) {
        audio2.play();
        genEq();
    } else {
        audio.play();
        console.log(answer);
    }
});

opt2.addEventListener('click', () => {
    if (opt2.innerHTML == answer) {
        genEq();
    } else {
        audio.play();
    }
});

opt3.addEventListener('click', () => {
    if (opt3.innerHTML == answer) {
        genEq();
    } else {
        audio.play();
    }
});

genEq();