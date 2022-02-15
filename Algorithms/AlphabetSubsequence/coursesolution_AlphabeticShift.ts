 //MySolution
 function alphabethSubsequence(s: string): boolean {
   //const alphabeth:String[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   const chars: string[] = s.split('');
   const charValues: number[] = [];

   chars.forEach((char: string) => {
      charValues.push(char.charCodeAt(0))
      console.log(charValues)
   });

   console.log(new Set(charValues));
   console.log(new Set(charValues).size);
   console.log(charValues.length);
   if(new Set(charValues).size !== charValues.length) {
      return false;
   }

   for(let i = 0; i < charValues.length -1; i++){
      if(charValues[i] >= charValues[i + 1]) {
         return false;
      }
   }


   return true;
}

function alphabethSubsequence2(s: string): boolean {
   var isSubsequence = true;
   for (var i = 1; i < s.length; i++) {   
      console.log(s.charCodeAt(i))
      console.log(s.charCodeAt(i - 1))
     if (s.charCodeAt(i) <= s.charCodeAt(i - 1))
       isSubsequence = false;
   }
 
   return isSubsequence;
}/*
console.log(alphabethSubsequence('effg'))
console.log(alphabethSubsequence('cdce'))
console.log(alphabethSubsequence('ace'))
console.log(alphabethSubsequence('bxz'))

console.log(alphabethSubsequence2('ef'))
console.log(alphabethSubsequence2('cdce'))
console.log(alphabethSubsequence2('ace'))
console.log(alphabethSubsequence2('bxz'))*/