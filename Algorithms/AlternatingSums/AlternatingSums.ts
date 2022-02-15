function alternatingSums(alts: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    alts.forEach((element, index) => {
        console.log(element)
        console.log(index)
        console.log(index %2)
        if(index % 2 === 0){
            evenSum += element;
        }else{
            oddSum += element
        }
    });

    return [evenSum, oddSum]

    
}

console.log(alternatingSums([50,60,60,45,70]))