function hitungLuasSegitiga(alas, tinggi) {
  const luas = alas*tinggi/2;
  return luas;
}

const alas = 50,
tinggi = 40;

const totalsegitiga = hitungLuasSegitiga(alas,tinggi);

console.log('luas segitiga berikut = ', totalsegitiga);