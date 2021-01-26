import { rawData } from './data.js';

let numberOfTurns = 0;

export function findByID(id, array){
    for (let item of array) {
        if (item.id === id) return item;
    }
    return null;
}

export function generateRandomIndex(){
    const randomIndex = Math.floor(Math.random() * rawData.length);
    return rawData[randomIndex];
}

export function renderImages(){
    numberOfTurns++;

    let randomIndex1 = generateRandomIndex();
    let randomIndex2 = generateRandomIndex();
    let randomIndex3 = generateRandomIndex();
    
    while (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3){
        randomIndex1 = generateRandomIndex();
        randomIndex2 = generateRandomIndex();
        randomIndex3 = generateRandomIndex();
    }
    
    const newImg1 = makeImageEl(randomIndex1);
    const newImg2 = makeImageEl(randomIndex2);
    const newImg3 = makeImageEl(randomIndex3);
    const div = document.getElementById('pokemon');

    div.textContent = '';
    div.append(newImg1, newImg2, newImg3);
}

function makeImageEl(item){
    const newImg1 = document.createElement('img');

    newImg1.src = item.url_image; 

    newImg1.addEventListener('click', () => {
        if (numberOfTurns < 9){
            renderImages();
        } else window.location = './results';
    });
    return newImg1;
}
