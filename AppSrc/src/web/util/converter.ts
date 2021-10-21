
const zeroPadding = (num: number, zeroCount: number): string => {
    let padding = '';
    for (var i: number = 0; i < zeroCount; i++) {
        padding += '0';
    }
    return (padding + num).slice(-zeroCount);
}

const formatSaveData = (target: Record<string, any>):Array<any> => {
    const formatTarget: any[] = [];
    if (typeof target !== 'object' || target === null) {
        return formatTarget;
    }

    const keys:string[] = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        const key = keys[i];
        const item = target[key];
        formatTarget.push(item);
    }

    return formatTarget;
}

export { zeroPadding, formatSaveData};

