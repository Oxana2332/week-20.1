"use strict";

let superheroesJSON;
let superheroes;
let selectedNum = 0;
let rate;

fetch ('superheroes.json')
.then (resp => resp.json())
.then (data => superheroesJSON = data);

document.addEventListener("DOMContentLoaded", function (evt) {
    showHero(selectedNum);
});

function onBtnClickPrev() {
    if(selectedNum>0){
    selectedNum--;
    showHero(selectedNum);}
    else {return false;}
}

function onBtnClickNext() {
    if(selectedNum<9){
        selectedNum++;
        showHero(selectedNum);}
        else {return false;}
}

function showHero (number) {
    if(localStorage.getItem("superheroes"))
        superheroes = JSON.parse(localStorage.getItem("superheroes"));
    else superheroes = JSON.parse(superheroesJSON);
    const superheroCard = `<div class="hero-card">
    <div class="hero-info">
                <img class="hero-pic" src="${superheroes[number].pic}">
                <div><h2>${superheroes[number].name}</h2>
                <div>Вселенная: ${superheroes[number].universe}</div>
                <div>Альтер-эго: ${superheroes[number].alterEgo}</div>
                <div>Род деятельности: ${superheroes[number].occupation}</div>
                <div>Друзья: ${superheroes[number].friends}</div>
                <div>Суперсилы: ${superheroes[number].powers}</div><hr></div></div></div>
                <div class="hero-details"><div>${superheroes[number].details}</div><hr>
                </div><span>Оценка: <select onchange="rateHero(selectedNum);" id="rate">
                <option value="0">не выбрано</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option></select>
                Вы поставили оценку: ${superheroes[number].rate} <input id="result"></input>`;
            
            document.getElementById('container').innerHTML = superheroCard;
};
function rateHero(number){
    rate = document.getElementById('rate').value;
    superheroes[number].rate=rate;
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
    document.getElementById('result').value = rate;
} 

    document.querySelector('#prev').addEventListener('click', onBtnClickPrev);
    document.querySelector('#next').addEventListener('click', onBtnClickNext);