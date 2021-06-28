 //MySolution


 function MEAlphabeticShift(phrase: string): string {
     let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
         'w', 'x', 'y', 'z'
     ];
     let finalword = '';
     phrase = phrase.toLowerCase();

     for (let i = 0; i < phrase.length; i++) {
         var letterNext = phrase[i] === 'z' ? -1 : abc.findIndex(abc => abc === phrase[i])
         finalword += abc[letterNext + 1];
     }


     return finalword;


 }
 console.log(MEAlphabeticShift("ZAnaz"));