
const areaPerrito = document.getElementById("perrito")
const areaGatos = document.getElementById("gatos")


fetch("https://dog.ceo/api/breeds/image/random").then(
(response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    areaPerrito.innerHTML = `
    <p>Mi próximo perrito</p>
    <p>${data.message}"</p>
    <img src="${data.message}" />
    `
})

fetch("https://aws.random.cat/meow") .then(
    (response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        areaGatos.innerHTML =`
        <p>Gatos Ew!</p>
        <p>${data.file}</p>
        <img class="imagen-gato" src="${data.file}" />
        `
})



