import { findByID } from './utils.js';
const POKESTORAGE = 'POKESTORAGE';

export function setStorage(updatedArray){
    localStorage.setItem(POKESTORAGE, JSON.stringify(updatedArray));
}

export function getStorage(){
    let pokeInStorage = JSON.parse(localStorage.getItem(POKESTORAGE));

    if (!pokeInStorage) {
        pokeInStorage = [];
        localStorage.setItem(POKESTORAGE, JSON.stringify(pokeInStorage));
    }
    return pokeInStorage;
}

export function incrementSeen(id) {
    const fromStorage = getStorage();

    const poke = findByID(id, fromStorage);

    if (!poke) {
        const newStat = {
            id: id,
            seen: 1,
            caught: 0,
        };

        fromStorage.push(newStat);
    } else {

        poke.seen++;
    }
    console.log(fromStorage);
    setStorage(fromStorage);
}
export function incrementCaught(id) {
    const fromStorage = getStorage();

    // check to see if i've seen this before
    const poke = findByID(id, fromStorage);

    poke.caught++;

    setStorage(fromStorage);
}