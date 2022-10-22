// 1) Sa creem functii care ne scad valoarea span-urilor
// 2) Sa creem un algoritm care ne zice ca atunci cand dam run la
//aplicatie sa imi inceapa sa imi scada valoarea secundelor.
// 3) Atunci cand unele dintre valori ajung la 0 sa pun o conditie
// sa mi se modifice si celelalte in functie de caz.

const zile = document.querySelector(".zile");
const ore = document.querySelector(".ore");
const minute = document.querySelector(".minute");
const secunde = document.querySelector(".secunde");
const mesaj = document.querySelector(".mesaj");
let finish = true;

const startCountdown = () => {
  setInterval(() => {
    if (+zile.innerHTML >= 0 && finish) {
      cdSecunde();
    }
  }, 1000);
};

let cdZile = () => {
  zile.innerHTML = +zile.innerHTML - 1;
  if (+zile.innerHTML === -1) {
    zile.innerHTML = 0;
    ore.innerHTML = 0;
    minute.innerHTML = 0;
    secunde.innerHTML = 0;
    finish = false;
    mesaj.innerHTML = "Sunteti gata?";
  }
};
let cdOre = () => {
  ore.innerHTML = +ore.innerHTML - 1;
  if (+ore.innerHTML === 0) {
    ore.innerHTML = 24;
    cdZile();
  }
};
let cdMinute = () => {
  minute.innerHTML = +minute.innerHTML - 1;
  if (+minute.innerHTML === 0) {
    minute.innerHTML = 60;
    cdOre();
  }
};
let cdSecunde = () => {
  secunde.innerHTML = +secunde.innerHTML - 1;
  if (+secunde.innerHTML === 0) {
    secunde.innerHTML = 60;
    cdMinute();
  }
};

startCountdown();
