function tahun(kabisat) {
  const tahunkabisat = kabisat;
  
  return tahunkabisat;
}

const x = 2056;


if (x % 400 == 0){
  console.log('tahun kabisat')
}else if (x % 100 == 0){
  console.log('bukan tahun kabisat')
}else if (x % 4 == 0){
  console.log('bukan tahun kabisat')
}else {
  console.log('bukan tahun kabisat')
}