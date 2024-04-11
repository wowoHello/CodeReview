let Que = document.querySelector("#que");
console.log(Que);
let Ans = document.getElementById("ans");

//編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。
function printEvery3() {
    Que.innerText = "Q.編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。";
    Ans.innerHTML = "";

    for (let i = 1; i <= 88; i += 3) {        
        Ans.innerHTML += "Ans: " + i + "<br />";        
    };    
};

//編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
function table9to9() {
    Que.innerText = "Q.編寫一個名為table9to9的函式，它打印出九九乘法表的內容。";
    Ans.innerHTML = "";
    
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++){
            Ans.innerHTML += i + "x" + j + "=" +  i*j + "<br />";
        };
        Ans.innerHTML += "<br />";
    };
};

