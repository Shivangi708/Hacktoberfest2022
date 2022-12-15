const digitalRoot = n => {
    const sumNums = () => {
        const arr = n.toString().split('');
        const numberArr = arr.map(el => +el);
        const sum = numberArr.reduce((acc, curr) => acc + curr, 0);

        return sum
    }

    while(n.toString().length > 1) {
        const sum = sumNums();
        n = sum;
    }

    return n
}
