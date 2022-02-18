function areEquallyStrong(yourLeft: number, yourRight:number, friendsLeft: number, friendsRight: numner): boolean {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft: yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsSrtongest = friendsRight >= friendsRight ? friendsLeft: friendsRight;

    return yourStrongest === friendsSrtongest && yourWeakest === friendsWeakest;

}

console.log(areEquallyStrong(10,15,15,10))
console.log(areEquallyStrong(10,15,15,10))
console.log(areEquallyStrong(10,15,15,9))