//function that evaluates the digit and return result 
function solve() {
    var cal = document.getElementById("result").value;

    try {
        if (cal.indexOf('*') === cal.lastIndexOf('*') && cal.indexOf('%') === cal.lastIndexOf('%') && cal.substr(cal.indexOf('%')) === "%") {
            let num1 = cal.substring(cal.indexOf('*') + 1, cal.indexOf('%'));
            let num2 = cal.substring(0, cal.indexOf('*'));
            if (parseInt(num1) && parseInt(num2)) {
                let ans = percentage(num1, num2);
                document.getElementById("result").value = ans;
            }
            else {
                document.getElementById("result").value = "SYNTAX ERROR";
            }
        }
        else {
            let ans = eval(cal);
            document.getElementById("result").value = ans;
        }
    } catch (e) {
        document.getElementById("result").value = "SYNTAX ERROR";
    }

}

//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}

// function that calculate percentage
function percentage(num, per) {
    return ((num / 100) * per);
}

// function that takes input
function calShow(event) {
    let buttonValue = event.target.innerText;

    switch (buttonValue) {
        case '÷':
            console.log('/');
            buttonValue = '/';
            break;
        case '×':
            console.log('*');
            buttonValue = '*';
            break;
        default:
            console.log(buttonValue);
    }

    document.getElementById("result").value += buttonValue;
}

export default clr;
export { solve, calShow };