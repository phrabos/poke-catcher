# poke-catcher
## HTML Game Page
- empty div for three images to display

## HTML Results Page
- table element with one table row of table headers:
    1) Names
    2) Seen
    3) Caught
    4) maybe image of the character
- button to reset storage and play again

## app.js
- call renderImages() function
    - adds html image elements

## utils.js
- findById() function
    - find object in array based on its id
- renderImages() function
- makeImages() function
- generateRandomIndex() function
    - use Math.floor and Math.random to generate random index of length of array

## localStorageUtils
- getStorage() function
- setStorage() function
- clearStorage() function
- incrementSeen() function
- incrementCaught() function