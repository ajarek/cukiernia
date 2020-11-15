let przyciski = document.querySelectorAll('.sklep_menu');
let ciasta = document.querySelectorAll('.przyklad[data="ciasto"]');
let slodycze = document.querySelectorAll('.przyklad[data="slodycze"]');
let paczki = document.querySelectorAll('.przyklad[data="paczki"]');
let babeczki = document.querySelectorAll('.przyklad[data="babeczki"]');
let diw = document.querySelector('.przyklad');
let szukaj = document.querySelector('#szukaj');


szukaj.addEventListener('click', (e) => {
    if (e.target.value === 'Babeczki') {
        zbiorBabeczki()
    }
    if (e.target.value === 'Ciastka') {
        zbiorCiastka()
    }
    if (e.target.value === 'Słodycze') {
        zbiorSlodycze()
    }
    if (e.target.value === 'Pączki') {
        zbiorPaczki()
    }
    if (e.target.value === 'Wszystko') {
        zbiorWszystko()
    }
})
przyciski.forEach(element => {
    element.addEventListener('click', (e) => {

        if (e.target.textContent === 'Babeczki') {
            zbiorBabeczki();
        }
        if (e.target.textContent === 'Ciastka') {
            zbiorCiastka()
        }
        if (e.target.textContent === 'Słodycze') {
            zbiorSlodycze()
        }
        if (e.target.textContent === 'Pączki') {
            zbiorPaczki()
        }
        if (e.target.textContent === 'Wszystko') {
            zbiorWszystko()
        }
    })
})

const ukryjCiastka = () => {
    ciasta.forEach(elem => {
        elem.style.display = 'none'
    })
}
const pokazCiastka = () => {
    ciasta.forEach(elem => {
        elem.style.display = 'inline-block'
    })
}
const ukryjSlodycze = () => {
    slodycze.forEach(elem => {
        elem.style.display = 'none'
    })
}
const pokazSlodycze = () => {
    slodycze.forEach(elem => {
        elem.style.display = 'inline-block'
    })
}
const ukryjPaczki = () => {
    paczki.forEach(elem => {
        elem.style.display = 'none'
    })
}
const pokazPaczki = () => {
    paczki.forEach(elem => {
        elem.style.display = 'inline-block'
    })
}
const ukryjBabeczki = () => {
    babeczki.forEach(elem => {
        elem.style.display = 'none'
    })
}
const pokazBabeczki = () => {
    babeczki.forEach(elem => {
        elem.style.display = 'inline-block'
    })
}
const zbiorBabeczki = () => {
    pokazBabeczki()
    ukryjCiastka();
    ukryjSlodycze();
    ukryjPaczki();
}
const zbiorCiastka = () => {
    pokazCiastka();
    ukryjBabeczki();
    ukryjSlodycze();
    ukryjPaczki();
}
const zbiorSlodycze = () => {
    pokazSlodycze();
    ukryjBabeczki();
    ukryjCiastka();
    ukryjPaczki();
}
const zbiorPaczki = () => {
    pokazPaczki();
    ukryjBabeczki();
    ukryjSlodycze();
    ukryjCiastka();
}
const zbiorWszystko = () => {
    pokazBabeczki();
    pokazCiastka();
    pokazPaczki();
    pokazSlodycze();
}

