let form = document.querySelector('form')
let name = document.querySelector('.name')
let email = document.querySelector('.email')
let password = document.querySelector('.password')

form.addEventListener('submit', function (evt) {
    evt.preventDefault()
    fetch('url', {
        method: 'POST',
        body: JSON.stringify({
         
        })
    })
}
)