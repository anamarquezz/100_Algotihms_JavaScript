function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;
    console.log("isEven:" + isEven)
    var arr = a[a.length / 2 - 1]
    console.log("a[a.length / 2 - 1]:" + arr)
    var arr2 = a[Math.floor(a.length / 2 )]
    console.log("a[a.length / 2 - 1]:" + arr2)
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2 )];
    
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 8]));

 