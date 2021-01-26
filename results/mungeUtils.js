

export function seenDataArray(array){
    const seenData = [];
    for (let item of array){
        seenData.push(item.seen);
    }

    return seenData;
}
export function caughtDataArray(array){
    const caughtData = [];
    for (let item of array){
        caughtData.push(item.caught);
    }

    return caughtData;
}
export function nameDataArray(array){
    const nameData = [];
    for (let item of array){
        nameData.push(item.name);
    }

    return nameData;
}