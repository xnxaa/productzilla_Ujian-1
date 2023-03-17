function totalbelanja (baju, celana, tas) {
  const total = baju + celana + tas;

  return total;
}

const bajuAnton = 3*75000,
    celanaAnton = 2*120000,
    tasAnton = 250000;

const totalbelanjaAnton = totalbelanja(bajuAnton, celanaAnton, tasAnton);

console.log('Total Belanja =', totalbelanjaAnton);
