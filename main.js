const getAnimals = async () => {
  const request = await fetch("https://6638360f4253a866a24d0a9b.mockapi.io/animal")
  const data = await request.json()

  const list = document.querySelector('.list')

  list.innerHTML = ''

  data.forEach(animal => {
    const item = document.createElement('li')
    item.innerHTML = `${animal.id} - ${animal.nome} (${animal.idade}) - ${animal.raca}`
    list.appendChild(item)
  })
}

getAnimals()

const button = document.querySelector("button")

button.addEventListener("click", async () => {
  fetch("https://6638360f4253a866a24d0a9b.mockapi.io/animal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "Totó",
      idade: "12",
      raca: "Cachorro"
    })
  })
    .then(() => getAnimals())
    .catch(err => console.error(err))
})