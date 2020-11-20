const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");
const pop = document.querySelector("#pop");
// console.log(papanSkor);

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah() {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(200, 700);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.innerHTML = 0;
  munculkanTikus();

  setTimeout(() => {
    selesai = true;
  }, 10000);
  // return selesai;
}

function pukul() {
  skor++;
  pop.play();
  this.parentNode.classList.remove("muncul");
  papanSkor.innerHTML = skor;
  // console.log(this);
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
});
