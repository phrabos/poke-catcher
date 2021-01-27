import { rawData } from '../data.js';
import { getStorage } from '../localStorageUtils.js';
import { findByID } from '../utils.js';
import { caughtDataArray, nameDataArray, seenDataArray } from './mungeUtils.js';
import { renderResults } from './results-utils.js';

const storageArray = getStorage();
const nameArray = nameDataArray(storageArray);
const caughtArray = caughtDataArray(storageArray);
const seenArray = seenDataArray(storageArray);
const table = document.getElementById('table');
const resetButton = document.getElementById('reset');

for (let iterator of storageArray){
    const pokeObject = findByID(iterator.id, rawData);
    let tableRow = renderResults(iterator, pokeObject);
    table.appendChild(tableRow);
}

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});

var ctx = document.getElementById('chart1').getContext('2d');
var cyx = document.getElementById('chart2').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, { 
    type: 'bar',
    data: {
        labels: nameArray,
        datasets: [{
            label: 'Seen',
            data: seenArray,
            backgroundColor:'rgba(153, 102, 255, 0.2)',
            borderColor:'rgba(153, 102, 255, 1)',
            borderWidth: 2
        },
        {
            label: 'Caught',
            data: caughtArray,
            backgroundColor:'rgba(255, 159, 64, 0.2)',
            borderColor:'rgba(255, 159, 64, 1)',
            borderWidth: 2
        }]
    },
        
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});

// eslint-disable-next-line no-undef
new Chart(cyx, { 
    type: 'pie',
    data: {
        labels: ['total seen', 'total caught'],
        datasets: [{
            label: 'Total Seen',
            data: [seenArray.reduce((a, b) =>a + b), caughtArray.reduce((a, b) =>a + b)],
            backgroundColor:['aqua', 'magenta'],
            borderColor:['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 0.2)'],
            borderWidth: 2
        },
        ]
    },
        
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});