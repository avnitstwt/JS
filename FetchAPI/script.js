fetch('https://randomuser.me/api/')
    .then((rawData) => {
        return rawData.json()
    }).then((data) => {
        let h1 = document.createElement('h1')
        let rak = data.results[0].name.first
        h1.textContent=rak
        document.body.appendChild(h1)

    })

    .catch((err) => {
        console.log(err);

    })