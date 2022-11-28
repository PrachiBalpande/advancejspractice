

function* fruits(){
    yield "Apple",
    yield "Oranges"
    yield "Pineapple"
    yield "Grapes"
    yield "Banana"
}

let things=fruits()
for(p of things){
    console.log(p)
}