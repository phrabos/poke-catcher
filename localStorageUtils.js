import { rawData } from './data.js';
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
    console.log(poke);
    if (!poke) {
        const rawPokemon = findByID(id, rawData);
        const newStat = {
            id: id,
            name: rawPokemon.pokebase,
            seen: 1,
            caught: 0,
        };
        // console.log(newStat);
        fromStorage.push(newStat);
    } else {

        poke.seen++;
    }
    setStorage(fromStorage);
}
export function incrementCaught(id) {
    const fromStorage = getStorage();

    // check to see if i've seen this before
    const poke = findByID(id, fromStorage);

    poke.caught++;

    setStorage(fromStorage);
}