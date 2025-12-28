
function throttle(fnc, delay) {
    let timer = 0
    return function (...args) {
        let current = Date.now()
        if (current - timer >= delay)
            {
                timer = current
                fnc(...args)
            }
    }

}

input.addEventListener('input', throttle(function (e) {
    console.log('hey');
    console.log('Final value jo type kiya:', e.target.value);

}, 1000)); // 1000ms = 1 second

