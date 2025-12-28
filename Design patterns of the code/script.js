// Design patterns are basically the formats of the code which can easily get understand by any developer

let bankSystem = (function () {
    let bankBalance = 12000
    function checkBalance() {
        console.log(bankBalance);
    }
    function withdraw(val) {
        if (bankBalance >= val) {
            bankBalance -= val
        }
        else{
            console.log("Please deposit some amount as well, don't just withdraw the amount");
            
        }
    }
    function deposit(val) {
        val > 0 ? bankBalance += val : console.log('please enter the positive value')
    }
    return {
         check:checkBalance, draw:withdraw, depo:deposit
    }
})()