const input = document.querySelector('input');

function debounce(fnc, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(timer);

            fnc(...args);
        }, delay);
    };
}


input.addEventListener('input', debounce(function (e) {
    console.log('hey');
    console.log('Final value jo type kiya:', e.target.value);

}, 1000)); // 1000ms = 1 second

