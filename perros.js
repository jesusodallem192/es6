const perritosArea = document.getElementById("perritos")
const perrosDos = document.getElementById("tres-perros")
const botonPerros = document.getElementById("boton-perros")



const botonSeisPerros = () => {
fetch ("https://dog.ceo/api/breed/hound/images").then(
    (response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        perrosDos.innerHTML=`
        <img src="${data.message[0]}" />
        <img src="${data.message[1]}" />
        <img src="${data.message[2]}" />
        <img src="${data.message[3]}" />
        <img src="${data.message[4]}" />
        <img src="${data.message[5]}" />
        `
    })
}

    botonPerros.addEventListener("click", () => {
        botonSeisPerros()
    })