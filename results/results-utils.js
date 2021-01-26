export function renderResults(storageItem, pokeItem) {
    const tableRow = document.createElement('tr');

    const tdName = document.createElement('td');
    const itemName = pokeItem.pokemon;
    tdName.textContent = itemName;
    tableRow.append(tdName);
    
    const tdSeen = document.createElement('td');
    let seen = storageItem.seen;
    tdSeen.textContent = seen;
    tableRow.append(tdSeen);
    
    const tdCaught = document.createElement('td');
    const caught = storageItem.caught;
    tdCaught.textContent = caught;
    tableRow.append(tdCaught);
    

    return tableRow;
}