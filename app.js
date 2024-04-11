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
}

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
}

//編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
function isUpperCase(str) {
    Que.innerText = "Q.編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。";
    if (str.length == 0) {
        return false;
    }
    
    return str[0] == str[0].toUpperCase();
}

