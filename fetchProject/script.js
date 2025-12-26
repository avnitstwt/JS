fetch(`https://randomuser.me/api/?results=5`)
  .then(res => res.json())
  .then(data => {

    const container = document.createElement('div')
    container.className =
      'flex gap-5 px-6 py-6 overflow-x-auto bg-gray-900 w-full'

    document.body.appendChild(container)

    data.results.forEach((user) => {

      const card = document.createElement('div')
      card.className =
        'bg-gray-800 w-80 shrink-0 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition border border-gray-700'

      const img = document.createElement('img')
      img.src = user.picture.large
      img.className =
        'w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg'

      const name = document.createElement('h2')
      name.textContent = user.name.first
      name.className = 'mt-4 text-2xl font-bold text-white'

      const role = document.createElement('p')
      role.textContent = user.email
      role.className = 'text-blue-400 font-medium text-sm'

      const btn = document.createElement('button')
      btn.textContent = 'View Profile'
      btn.className =
        'mt-5 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition'

      card.append(img, name, role, btn)
      container.appendChild(card)
    })
  })  

