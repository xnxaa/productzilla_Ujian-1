function angka(positif, netral) {
  const angka = positif >= 1 || netral < 0;
  
  return angka;
}

const angka1 = 3;
const angka2 = 0;

const nilaiangka1 = angka (angka1);
const nilaiangka2 = angka (angka2);

console.log(nilaiangka1);
console.log(nilaiangka2);