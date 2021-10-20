
const zeroPadding = (num: number, zeroCount: number): string => {
    let padding = '';
    for (var i: number = 0; i < zeroCount; i++) {
        padding += '0';
    }
    return (padding + num).slice(-zeroCount);
}

export { zeroPadding };