 //MySolution
 function AlphabeticShift(inputString: string): string {
    const alphabeth:String[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let inputShifted = inputString.split('');
    console.log(inputShifted)
    for(let i = 0 ; i < inputShifted.length; i++){
        let index = 0;

        if(inputShifted[i] !== 'z') {
            index = alphabeth.indexOf(inputShifted[i]) + 1;         
        }

        inputShifted[i] = alphabeth[index];
        
    }
        return  inputShifted.join('');

   
}
console.log(AlphabeticShift("crazy"));