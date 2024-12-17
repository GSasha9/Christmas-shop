
import {arrOfGifts, menu__mobile_burger, menu_list, blackout, menu_list_lines, menu_items, slider,
        arrowLeft, arrowRight, timerNumbers, allCategories, listOfCards, top_button, modal_window
} from "./variables.js";


let sliderTransform = 0;
let sliderSteps = 0;
let sliderStepsCounter = 0;
let stepSize = 0;
let sliderPaddingLeft;
let sliderPaddingRight;

//БУРГЕР-МЕНЮ
function initBurgerMenu(){
    if(window.innerWidth <= 768){
        burgerIconIntoCross();
        menu_list.classList.toggle('menu-list-display');
        document.querySelector('body').classList.toggle('stop-scroll');
    }
}

function closeBurgerMenu(){
    if(menu_list.classList.contains('menu-list-display')){
        menu_list.classList.remove('menu-list-display');
        document.querySelector('body').classList.remove('stop-scroll');
        burgerIconIntoCross();
    }
}

function burgerIconIntoCross(){
    [...menu_list_lines][0].classList.toggle('burger-line-first');
    [...menu_list_lines][1].classList.toggle('burger-line-second');
}

function hideBurgerMenu(){
    if(window.innerWidth > 768){
        closeBurgerMenu();
    }
}




//СЛАЙДЕР
function initSlider(){
    if(window.innerWidth >768){
        sliderSteps = 3;
    } else{
        sliderSteps = 6;
    }
    slider.style.transform = `translateX(0px)`;
    sliderTransform = 0;
    arrowLeft.classList.add('disabled-arrow');
    arrowRight.classList.remove('disabled-arrow');
    sliderPaddingLeft = parseFloat(window.getComputedStyle(slider).paddingLeft); //покажет в пикс
    sliderPaddingRight = parseFloat(window.getComputedStyle(slider).paddingRight); //покажет в пикс
    stepSize = 0;
    sliderStepsCounter = 0;
}

function slide(event){
    arrowLeft.classList.remove('disabled-arrow');
    arrowRight.classList.remove('disabled-arrow');
    let windowWidth = window.innerWidth;
    if(windowWidth > 1440){
        windowWidth = 1440;
    }
    let sliderWidth = parseFloat(window.getComputedStyle(slider).width);
    stepSize = (sliderWidth - windowWidth + sliderPaddingLeft + sliderPaddingRight)/sliderSteps; //+20px вертикальный скролл

    if(event.target === arrowLeft){
        sliderTransform += Math.abs(stepSize);
        slider.style.transform = `translateX(${sliderTransform}px)`;
        sliderStepsCounter--;
        analyzeSliderSteps();
    } else {
        sliderTransform -= Math.abs(stepSize);
        slider.style.transform = `translateX(${sliderTransform}px)`;
        sliderStepsCounter++;
        analyzeSliderSteps();
    }
}

function analyzeSliderSteps(){
    if (sliderSteps === sliderStepsCounter ||  slider.style.transform === `${stepSize*sliderSteps}px`) {
        arrowRight.classList.add('disabled-arrow');
    }
    else if (sliderStepsCounter === 0 || slider.style.transform === `0px`) {
        arrowLeft.classList.add('disabled-arrow');
    }
}



//ТАЙМЕР
let mlsecondsToNewYear = Date.parse('2025-01-01T00:00:00.000-00:00');

function initTimer(){
    setInterval(function(){
        let mlsecondsActuual = Date.parse(new Date());
        let remainingTime = (mlsecondsToNewYear - mlsecondsActuual)/1000; //в секундах
        let days = parseInt(remainingTime / 86400);
        let hours = parseInt((remainingTime - days*86400) / 3600);
        let minutes = parseInt((remainingTime - days*86400 - hours*3600) / 60);
        let seconds = remainingTime - days*86400 - hours*3600 - minutes*60;
        [...timerNumbers][0].innerHTML = days;
        [...timerNumbers][1].innerHTML = hours;
        [...timerNumbers][2].innerHTML = minutes;
        [...timerNumbers][3].innerHTML = seconds;
    },1000);
}



//СЛУЧАЙНЫЕ КАРТОЧКИ
function generateNumberOfRandomCard(){
    let randOfGifts = Math.floor(Math.random() * (arrOfGifts.length-1) + 1);
    return randOfGifts;
}


function createRandomCards(){
    listOfCards.innerHTML = '';
    let numberOfGeneratingCards = 0;
    if(document.title === 'Christmas shop'){
        numberOfGeneratingCards = 4;
    } else{
        numberOfGeneratingCards = 36;
    }
    for (let i = 0; i < numberOfGeneratingCards; i++){
        let numberOfGift = generateNumberOfRandomCard();
        let card = document.createElement('li');
        card.classList.add('cards__list-item');
        card.insertAdjacentHTML('afterbegin', `<img src="./assets/img/gift-for-${arrOfGifts[numberOfGift].superpowers.class}.png"
            alt="gift-for-${arrOfGifts[numberOfGift].superpowers.class}" class="cards__list-img">
            <div class="cards__list-text">
                <p class="cards__list-category ${arrOfGifts[numberOfGift].superpowers.class} h4_title">
                    ${arrOfGifts[numberOfGift].category}
                </p>
                <p class="card__list-title h3_title">
                    ${arrOfGifts[numberOfGift].name}
                </p>
            </div>`);
        listOfCards.appendChild(card);
    }
    let cards = document.querySelectorAll('.cards__list-item');
    [...cards].forEach((item)=> item.addEventListener('click', showPopUp));
}



//РЕАЛИЗАЦИЯ КАТЕГОРИЙ НА СТРАНИЦЕ ПОДАРКОВ

function selectedCategory(event){
    [...allCategories].forEach((category)=> category.classList.remove('active'));
    event.target.classList.add('active');
    const categoryName = event.target.innerHTML;
    console.log(categoryName)
    showCategoriesCards(categoryName);

}


function showCategoriesCards(selectedCategoryName){
    listOfCards.innerHTML = '';
    for(let gift of arrOfGifts){
        if(gift.category.toLowerCase() == selectedCategoryName.toLowerCase()){
            let card = document.createElement('li');
            card.classList.add('cards__list-item');
            card.insertAdjacentHTML('afterbegin', `<img src="./assets/img/gift-for-${gift.superpowers.class}.png"
            alt="gift-for-${gift.superpowers.class}" class="cards__list-img">
            <div class="cards__list-text">
                <p class="cards__list-category ${gift.superpowers.class} h4_title">
                    ${gift.category}
                </p>
                <p class="card__list-title h3_title">
                    ${gift.name}
                </p>
            </div>`);
            listOfCards.appendChild(card);
            card.addEventListener('click', showPopUp);
        } else if(selectedCategoryName.toLowerCase() == 'all') {
            createRandomCards();
        } else {
            continue;
        }
    }
}


//КНОПКА ВВЕРХ
function initTopButton(){
    if(window.innerWidth <= 768 && window.scrollY >= 300){
        top_button.style.visibility = 'visible';
    } else {
        top_button.style.visibility = 'hidden';
    }
}


function toUp(){
    document.documentElement.scrollTop = 0;
}





//ПОП-АП
function findIndexOfClickedCard(event){
    let card = event.target.closest('.cards__list-item');
    let card_title = card.querySelector('.card__list-title').innerHTML;
    for(let item of arrOfGifts){
        if(item.name.toLowerCase() == card_title.trim().toLowerCase()){
            return arrOfGifts.indexOf(item);
        }
    }
}

function showPopUp(event){
    const index = findIndexOfClickedCard(event);
    modal_window.style.display = 'initial';
    document.querySelector('body').classList.toggle('stop-scroll');
    blackout.classList.toggle('blackout-on');
    createPopUpCard(index);
    fixStars();
    top_button.style.visibility = 'hidden';
}


function createPopUpCard(index){
    let popUp = document.createElement('div');
    popUp.classList.add('popUp');
    popUp.insertAdjacentHTML('afterbegin',
        `<div class="popUp__cross">
                </div>
                <div class="popUp__img"></div>
                <div class="popUp__text">
                    <div class="popUp__text-firstParagraph">
                        <p class="popUp_category cards__list-category ${arrOfGifts[index].superpowers.class}work h4_title">${arrOfGifts[index].category}</p>
                        <p class="popUp__card-title card__list-title h3_title">${arrOfGifts[index].name}</p>
                        <p class="popUp_description">${arrOfGifts[index].description}</p>
                    </div>
                    <div class="popUp__text-secondParagraph">
                        <p class="popUp__list-title">Adds superpowers to:</p>
                        <ul class="popUp__list">
                            <li class="popUp__list-item">
                                <p class="list-item-name">Live</p>
                                <p class="list-item-number">${arrOfGifts[index].superpowers.live}</p>
                                <div class="list-item-stars">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                </div>
                            </li>
                            <li class="popUp__list-item">
                                <p class="list-item-name">Create</p>
                                <p class="list-item-number">${arrOfGifts[index].superpowers.create}</p>
                                <div class="list-item-stars">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                </div>
                            </li>
                            <li class="popUp__list-item">
                                <p class="list-item-name">Love</p>
                                <p class="list-item-number">${arrOfGifts[index].superpowers.love}</p>
                                <div class="list-item-stars">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                </div>
                            </li>
                            <li class="popUp__list-item">
                                <p class="list-item-name">Dream</p>
                                <p class="list-item-number">${arrOfGifts[index].superpowers.dream}</p>
                                <div class="list-item-stars">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                    <img src="./assets/img/snowflake.svg" alt="" class="popUp-star">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>`
    )
    modal_window.appendChild(popUp);
    document.querySelector('.popUp__img').style.backgroundImage = `url(./assets/img/gift-for-${arrOfGifts[index].superpowers.class}.png)`;
    document.querySelector('.popUp__cross').addEventListener('click', closePopUp);
    return popUp;
}


function fixStars(){
    let arrOfNumbers = Array.from(document.querySelectorAll('.list-item-number'))
    .map(el => parseInt(el.innerHTML.trim().substring(1, 2)));
    console.log(arrOfNumbers);
    let arrOfStars = Array.from(document.querySelectorAll('.popUp-star'));
    let arrOfStartFour = [];
    for (let i = 0; i < arrOfStars.length; i += 5) {
        arrOfStartFour.push(arrOfStars.slice(i, i + 5));
    }
    for (let i = 0; i < arrOfStartFour.length; i += 1) {
        arrOfStartFour[i].map(function(el,index){
            if(index >= arrOfNumbers[i]){
                return;
            } else{
                el.classList.add('transparent1');
            }
        });
    }
}


function closePopUp(event){
    console.log(event.target.closest('.popUp'))
    if(event.target.closest('.popUp') && event.target !== document.querySelector('.popUp__cross')){
        return
    } else{
        modal_window.innerHTML = '';
        blackout.classList.toggle('blackout-on');
        document.querySelector('body').classList.toggle('stop-scroll');
        modal_window.style.display = 'none';
    }
}




menu__mobile_burger.addEventListener('click', initBurgerMenu);
document.addEventListener('DOMContentLoaded', function(){
    Array.from(menu_items).forEach((item) => item.addEventListener('click', closeBurgerMenu));
    allCategories.forEach((item)=> item.addEventListener('click', selectedCategory));
});
document.addEventListener('DOMContentLoaded', createRandomCards);
blackout.addEventListener('click', closePopUp);
modal_window.addEventListener('click', closePopUp);
window.addEventListener('resize', hideBurgerMenu);
if(document.title === 'Christmas shop'){
    document.addEventListener('DOMContentLoaded', initTimer);
    window.addEventListener('resize', initSlider);
    arrowLeft.addEventListener('click', slide);
    arrowRight.addEventListener('click', slide);
    document.addEventListener('DOMContentLoaded', initSlider);
}
if(document.title !== 'Christmas shop'){
    window.addEventListener('resize', initTopButton);
    window.addEventListener('scroll', initTopButton);
    top_button.addEventListener('click', toUp);
}


