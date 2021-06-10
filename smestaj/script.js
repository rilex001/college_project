let d = new Date()
let m = d.getMonth()

const changeImage = (m) => {
    let slika
    
    if(m == 2 || m == 3 || m == 4) {
        slika = "Prolece"
    } else if(m == 5 || m == 6 || m == 7) {
        slika = "Leto"
    } else if(m == 8 || m == 9 || m == 10) {
        slika = "Jesen"
    } else if(m == 11 || m == 0 || m == 1) {
        slika = "Zima"
    }

    return slika
}

let pr = changeImage(m)

if(pr == "Jesen") document.getElementById("promena").src = "./slike/jesen.png";
if(pr == "Prolece") document.getElementById("promena").src = "./slike/prolece.png";
if(pr == "Leto") document.getElementById("promena").src = "./slike/leto.png";
if(pr == "Zima") document.getElementById("promena").src = "./slike/zima.png";


let odrasli, deca, dani, hotel, privatno, wifi, bazen, parking, klima, kuhinja
let ukupnaCena, cenaSmestaja, wifiCena = 0, bazenCena = 0, parkingCena = 0, klimaCena = 0, kuhinjaCena = 0

let form = document.querySelector("#myForm")
let price = document.querySelector(".price")
form.addEventListener('submit', e => {
    e.preventDefault();
    odrasli = form.odrasli.value
    deca = form.deca.value
    dani = form.dani.value
    hotel = form.hotel.checked
    privatno = form.privatno.checked
    wifi = form.wifi.checked
    bazen = form.bazen.checked
    parking = form.parking.checked
    klima = form.klima.checked
    kuhinja = form.kuhinja.checked
    privatno == true ? cenaSmestaja = (((odrasli * 30) + (deca * 15)) * dani) * 0.9 : cenaSmestaja = ((odrasli * 30) + (deca * 15)) * dani
    wifi == true ? wifiCena = dani * 5 : null
    bazen == true ? bazenCena = dani * 5 : null
    parking == true ? parkingCena = dani * 5 : null 
    klima == true ? klimaCena = dani * 5 : null
    kuhinja == true ? kuhinjaCena  = dani * 5 : null

    ukupnaCena = cenaSmestaja + wifiCena + bazenCena + parkingCena + klimaCena + kuhinjaCena

    const content = document.querySelector('.list');
    content.innerHTML =  `<li> Cena smestaja : ${cenaSmestaja} </li>`
    wifi == true ? content.innerHTML +=  `<li> Cena wifi :  ${wifiCena} </li>` : null
    bazen == true ? content.innerHTML +=  `<li> Cena bazena :  ${bazenCena} </li>` : null
    parking == true ? content.innerHTML +=  `<li> Cena parkinga :  ${parkingCena} </li>` : null
    klima == true ? content.innerHTML +=  `<li> Cena klime :  ${klimaCena} </li>` : null
    kuhinja == true ? content.innerHTML +=  `<li> Cena kuhinje :  ${kuhinjaCena} </li>` : null
    content.innerHTML +=  `<h3> Ukupna cela celog smestaja :  ${ukupnaCena} </h3>`

})

const resetButton = document.querySelector(".reset")
let inputs = document.querySelectorAll('input')

resetButton.addEventListener('click', () => {
    inputs.forEach(input => input.value = '')
})




