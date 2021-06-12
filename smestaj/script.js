


const slika = document.querySelector(".one").href = "https://github.com/rilex001/CS-introduction-to-web-programming-Final-Project-/blob/main/styles.css"

const date = new Date()
const m = date.getMonth();

const pictureShow = m => {
    let slika
    if(m == 2 || m == 3 || m == 4)  {
        slika = "Prolece"
    }
    else if(m == 5 || m == 6 || m == 7)  {
        slika = "Leto"
    }
    else if(m == 8 || m == 9 || m == 10)  {
        slika = "Jesen"
    }
    else if(m == 11 || m == 0 || m == 1)  {
        slika = "Zima"
    }

    return slika
}

let pr = pictureShow(m)

if(pr == "Prolece") document.querySelector(".slika").src = "./slike/prolece.png";
if(pr == "Leto") document.querySelector(".slika").src = "./slike/leto.png";
if(pr == "Jesen") document.querySelector(".slika").src = "./slike/jesen.png";
if(pr == "Zima") document.querySelector(".slika").src = "./slike/zima.png";


const form = document.getElementById("myForm")
const lista = document.querySelector(".lista")

form.addEventListener("submit", e => {

    let odrasli, deca, dani, privatno, wifi, bazen, parking, klima, kuhinja
    let cenaSmestaja, wifiCena, bazenCena, parkingCena, klimaCena, kuhinjaCena, ukupnaCena

    e.preventDefault()

    odrasli = form.odrasli.value
    deca = form.deca.value
    dani = form.dani.value
    privatno = form.privatno.checked
    wifi = form.wifi.checked
    bazen = form.bazen.checked
    parking = form.parking.checked
    klima = form.klima.checked
    kuhinja = form.kuhinja.checked

    privatno == true ? cenaSmestaja = (( odrasli * 30 + deca * 15 ) * dani ) * 0.9 : cenaSmestaja = ( odrasli * 30 + deca * 15 ) * dani 

    lista.innerHTML = ` <li> Cena smestaja ${cenaSmestaja} E  `

    if(wifi == true) {
        wifiCena = 5 * dani
        lista.innerHTML += ` <li> Wifi cena ${wifiCena} E  `
    } 
    if(bazen == true) {
        bazenCena = 5 * dani
        lista.innerHTML += ` <li> Bazen cena ${bazenCena} E  `
    }
    if(parking == true) {
        parkingCena = 5 * dani
        lista.innerHTML += ` <li> Parking cena ${parkingCena} E  `
    }
    if(klima == true) {
        klimaCena = 5 * dani
        lista.innerHTML += ` <li> Klima cena ${klimaCena} E  `
    }
    if(kuhinja == true) {
        kuhinjaCena = 5 * dani
        lista.innerHTML += ` <li> Kuhinja cena ${kuhinjaCena} E  `
    }

    ukupnaCena = cenaSmestaja + wifiCena + bazenCena + parkingCena + klimaCena + kuhinjaCena
    lista.innerHTML += ` <li> Ukupna cena ${ukupnaCena} E  `

    







})