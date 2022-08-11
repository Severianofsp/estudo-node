// só usar ANY em último caso
function showMensage(msg: any) {
  return msg;
}

console.log(showMensage([1, 2, 3]));
console.log(showMensage('Olá'));
console.log(showMensage(1));
