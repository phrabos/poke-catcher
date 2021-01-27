

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
export function seenNotCaughtArray(array){
    const seenNotCaughtData = [];
    for (const item of array) {
        if (item.caught === 0 && item.seen > 0){
            seenNotCaughtData.push(item.name);
        }
    }
    return seenNotCaughtData;
}
export function seenNotCaughtCountArray(array){
    const seenNotCaughtCountArray = [];
    for (const item of array) {
        if (item.caught === 0 && item.seen > 0){
            seenNotCaughtCountArray.push(item.seen);
        }
    }
    return seenNotCaughtCountArray;
}