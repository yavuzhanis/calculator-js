const input = document.querySelector(".calculate-ınput");
const item = document.querySelector(".calculate-ıtem");
const equal = document.querySelector(".equal");

let ilkDeger = null;
let display = "0";
let bekleyenDeger = false;
let operator = null;

function uptadeScreen() {
    input.value = display;
}
uptadeScreen();

item.addEventListener("click", function (e) {
    const element = e.target;
    if (!element.matches("button")) return;
    if (element.classList.contains("clear")) {
        clear()
        uptadeScreen();
        return;
    }
    if (element.classList.contains("decimal")) {
        forDecimal();
        uptadeScreen();
        return
    }
    if (element.classList.contains("operator")) {
        forOperator(element.value);
        uptadeScreen();
        return
    }
    if (element.classList.contains("delete")) {
        deleteBtn();
        uptadeScreen();
        return
    }
    //windowa keyup ata addeventlistener diye

    inputNumber(element.value);
    uptadeScreen();
    return;
})
function deleteBtn() {
    display = input.value.slice(0,-1);
    if(ilkDeger!=null ){
        ilkDeger = parseFloat(ilkDeger.toString().slice(0,-1))
    }
    if(display.toString().endsWith(".")){
        display = display.toString().slice(0,-1);
    }
}
function forOperator(element) {
    let ıkıncıDeger = parseFloat(display);
    if (operator && bekleyenDeger) {
        operator = element
        return;
    }
    if (ilkDeger === null) {
        ilkDeger = parseFloat(display)
    } else if (operator) {
        const sonuc = calculate(ilkDeger, ıkıncıDeger, operator);
        display = parseFloat(sonuc.toFixed(2));
        ilkDeger = display;
    }
    operator = element;
    bekleyenDeger = true;
}

function inputNumber(num) {
    if (bekleyenDeger) {
        display = num;
        bekleyenDeger = false;
    } else {
        display = display === "0" ? num : display + num;
    }
}
// function forDecimal()
const forDecimal = () => {
    if (!display.includes(".")) {
        display += ".";
    }
}
function clear() {
    ilkDeger = null;
    display = "0";
    bekleyenDeger = false;
    operator = null;
}
function calculate(ilkDeger, ıkıncıDeger, operator) {
    if (operator === "+") {
        return ilkDeger + ıkıncıDeger;
    } else if (operator === "-") {
        return ilkDeger - ıkıncıDeger;
    } else if (operator === "*") {
        return ilkDeger * ıkıncıDeger;
    } else if (operator === "/") {
        return ilkDeger / ıkıncıDeger;
    }
  
}
