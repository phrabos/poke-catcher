import { rawData } from '../data.js';
import { getStorage } from '../localStorageUtils.js';
import { findByID } from '../utils.js';
import { renderResults } from './results-utils.js';

const table = document.getElementById('table');
const resetButton = document.getElementById('reset');
const storageArray = getStorage();

for (let iterator of storageArray){
    const pokeObject = findByID(iterator.id, rawData);
    let tableRow = renderResults(iterator, pokeObject);
    table.appendChild(tableRow);
}

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});