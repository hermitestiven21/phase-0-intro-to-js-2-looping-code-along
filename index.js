const name = ["Guadalupe", "Ollie","Aki"]

function writeCards(name) {
   let messageName = [] 
for(let  i= 0; i < name.length; i ++) {
    messageName.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
}
return messageName
}
writeCards()

function countDown(number) {
    while (number >= 0) {
        console.log (number)
        number --
    }
} 