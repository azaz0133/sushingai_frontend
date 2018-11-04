function cartAt(n){
    let sym=['C','D','H','S']
    let num=['2','3','4','5','6','7','8','9','0','J','Q','K','A']
    let x = Math.round(n/13)
    let y = Math.round(n/4)
    let z = {id:num}
    return z
}

console.log(cartAt(1))