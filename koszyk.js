const obrazki = document.querySelectorAll('img')
const cart = document.querySelector('#cart')
let cena = 0
const koszyk1 = document.querySelector('#woz1')
const koszyk2 = document.querySelector('#woz2')
const koszyk3 = document.querySelector('#woz3')
const koszyk4 = document.querySelector('#woz4')
const koszyk5 = document.querySelector('#woz5')
const koszyk6 = document.querySelector('#woz6')
const koszyk7 = document.querySelector('#woz7')
const koszyk8 = document.querySelector('#woz8')
const koszyk9 = document.querySelector('#woz9')
const koszyk10 = document.querySelector('#woz10')
const koszyk11 = document.querySelector('#woz11')
const koszyk12 = document.querySelector('#woz12')
count1 = 0
count2 = 0
count3 = 0
count4 = 0
count5 = 0
count6 = 0
count7 = 0
count8 = 0
count9 = 0
count10 = 0
count11 = 0
count12 = 0

obrazki.forEach(element => {
    element.addEventListener('click', (e) => {

        if (e.target.name === 'img1') {
            cena = cena + 12
            let il = function () {
                count1++;
                return count1;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk1.innerHTML = `Do zapłaty  ${ilosc*12} PLN za  ${ilosc} szt produktu  `;
            const img1 = document.createElement("img");
            img1.style.width = '80px';
            img1.src = "img/ciasto1.jpg";
            koszyk1.appendChild(img1);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }
        if (e.target.name === 'img2') {
            cena = cena + 12
            let il = () => {
                count2++;
                return count2;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk2.innerHTML = `Do zapłaty  ${ilosc*12} PLN za ${ilosc}  szt produktu   `;
            const img2 = document.createElement("img");
            img2.style.width = '80px';
            img2.src = "img/ciasto2.jpg";
            koszyk2.appendChild(img2);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }
        if (e.target.name === 'img3') {
            cena = cena + 12
            let il = () => {
                count3++;
                return count3;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk3.innerHTML = `Do zapłaty  ${ilosc*12} PLN za ${ilosc}  szt produktu   `;
            const img3 = document.createElement("img");
            img3.style.width = '80px';
            img3.src = "img/ciasto3.jpg";
            koszyk3.appendChild(img3);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }
        if (e.target.name === 'img4') {
            cena = cena + 15
            let il = () => {
                count4++;
                return count4;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk4.innerHTML = `Do zapłaty  ${ilosc*15} PLN za ${ilosc}  szt produktu   `;
            const img4 = document.createElement("img");
            img4.style.width = '80px';
            img4.src = "img/ciasto4.jpg";
            koszyk4.appendChild(img4);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }
        if (e.target.name === 'img5') {
            cena = cena + 15
            let il = () => {
                count5++;
                return count5;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk5.innerHTML = `Do zapłaty  ${ilosc*15} PLN za ${ilosc}  szt produktu   `;
            const img5 = document.createElement("img");
            img5.style.width = '80px';
            img5.src = "img/ciasto5.jpg";
            koszyk5.appendChild(img5);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }
        if (e.target.name === 'img6') {
            cena = cena + 15
            let il = () => {
                count6++;
                return count6;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk6.innerHTML = `Do zapłaty  ${ilosc*15} PLN za ${ilosc}  szt produktu   `;
            const img6 = document.createElement("img");
            img6.style.width = '80px';
            img6.src = "img/ciasto6.jpg";
            koszyk6.appendChild(img6);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }
        if (e.target.name === 'img7') {
            cena = cena + 13
            let il = () => {
                count7++;
                return count7;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk7.innerHTML = `Do zapłaty  ${ilosc*13} PLN za ${ilosc}  szt produktu   `;
            const img7 = document.createElement("img");
            img7.style.width = '80px';
            img7.src = "img/ciasto7.jpg";
            koszyk7.appendChild(img7);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }

        if (e.target.name === 'img8') {
            cena = cena + 13
            let il = () => {
                count8++;
                return count8;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk8.innerHTML = `Do zapłaty  ${ilosc*13} PLN za ${ilosc}  szt produktu   `;
            const img8 = document.createElement("img");
            img8.style.width = '80px';
            img8.src = "img/ciasto8.jpg";
            koszyk8.appendChild(img8);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }

        if (e.target.name === 'img9') {
            cena = cena + 13
            let il = () => {
                count9++;
                return count9;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk9.innerHTML = `Do zapłaty  ${ilosc*13} PLN za ${ilosc}  szt produktu   `;
            const img9 = document.createElement("img");
            img9.style.width = '80px';
            img9.src = "img/ciasto9.jpg";
            koszyk9.appendChild(img9);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }

        if (e.target.name === 'img10') {
            cena = cena + 10
            let il = () => {
                count10++;
                return count10;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk10.innerHTML = `Do zapłaty  ${ilosc*10} PLN za ${ilosc}  szt produktu   `;
            const img10 = document.createElement("img");
            img10.style.width = '80px';
            img10.src = "img/ciasto10.jpg";
            koszyk10.appendChild(img10);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }

      

        if (e.target.name === 'img11') {
            cena = cena + 10
            let il = () => {
                count11++;
                return count11;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk11.innerHTML = `Do zapłaty  ${ilosc*10} PLN za ${ilosc}  szt produktu   `;
            const img11 = document.createElement("img");
            img11.style.width = '80px';
            img11.src = "img/ciasto11.jpg";
            koszyk11.appendChild(img11);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }

        if (e.target.name === 'img12') {
            cena = cena + 10
            let il = () => {
                count12++;
                return count12;
            }
            let ilosc = il();
            cart.innerHTML = `Do zapłaty ${cena} PLN`;
            koszyk12.innerHTML = `Do zapłaty  ${ilosc*10} PLN za ${ilosc}  szt produktu   `;
            const img12 = document.createElement("img");
            img12.style.width = '80px';
            img12.src = "img/ciasto12.jpg";
            koszyk12.appendChild(img12);
            alert(`kupiłeś ciasto do zapłaty razem ${cena} PLN `)
        }

    })
})
const woz = document.querySelector('.woz');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    
    woz.classList.toggle('pokaz-woz');

})
function wyczysc(){
    window.window.location.reload()
}