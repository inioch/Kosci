let player = true
let val = document.getElementById('val')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p1last = document.getElementById('p1last')
let p2last = document.getElementById('p2last')

let table1 = document.getElementById('table1')
let table2 = document.getElementById('table2')

let wp1 = 0
let wp2 = 0

let count =1 

p1last.innerText = 3
p2last.innerText = 3

// losowanie kosci
function dices(){
    let dice = Math.floor(Math.random() *(1 + 5) +1)
    val.innerText = `Wylosowana liczba to: ${dice}`
    if(player == true){
        wp1+= dice
        p1.innerText =wp1
        player = false
        p1last.innerText -=1
        window.confirm("Teraz gracz drugi")
        table2.classList.toggle("border")
        table1.classList.toggle("border")
    }
    else{
        wp2+= dice
        p2.innerText = wp2 
        player = true
        p2last.innerText -=1
        window.confirm("Teraz gracz pierwszy")
        table2.classList.toggle("border")
        table1.classList.toggle("border")
        count +=1 
    }

    //kto wygrał, liczenie punktów
    if(count == 4){
       if(wp1 > wp2)
       {
        window.confirm("Gracz pierwszy wygrał")
        res()
       }
       if(wp2 > wp1)
       {
        window.confirm("Gracz drugi wygrał")
        res()
       }
       if(wp1 == wp2)
       {
        window.confirm("Remis")
        res()
       }
    }

}
// resetoiwanie
function res(){
    p1.innerText=0
    p2.innerText=0
    p1last.innerText = 3
    p2last.innerText = 3
}


const but = document.getElementById('btn').addEventListener ('click', dices)
const reset = document.getElementById('btnr').addEventListener('click', res)

