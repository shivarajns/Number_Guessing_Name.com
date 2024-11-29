let username;
let number=(Math.random()*10)
number=Math.round(number)
console.log(number)
let guessnum;
let numoftry=0;



document.getElementById("submit").onclick = function () {
    username = document.getElementById("name").value;
    document.getElementById("heading").textContent = `Good Luck ${username}`
}


document.getElementById("numsubmit").onclick = function () {
    let guessnum=parseInt(document.getElementById("inputnum").value)
    if (guessnum==number) {
        document.getElementById("result").textContent = "You Win"
    }
    
    else{
        document.getElementById("result").textContent = "try again"
    }
}

