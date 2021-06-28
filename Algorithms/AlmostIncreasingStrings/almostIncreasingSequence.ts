function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;
    
    for(let i = 0; i < sequence.length ; i++){
        if(sequence[i] <= sequence[i - 1]){
            count ++;
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i-1]){
                return false;
            }
        }
    }

    return count <=1;
}

console.log(almostIncreasingSequence([1,2,1]));
console.log(almostIncreasingSequence([1, 3, 2]));


/*
 let count = 0;
    let size = sequence.length;
    if(size == 2) return true;
    for(let i = 0; i < (size-1) ; i++){      
        if(sequence[i + 1] <= sequence[i] ){  
            count++;               
            var skipNeigh = i + 2 < size && sequence[i+2] <= sequence[i];           
            var skipback = i -1 >= 0 && sequence[i+1] <= sequence[i-1];
            if(skipNeigh && skipback || count >=2) return false;
        }
    }

    return true;*/
