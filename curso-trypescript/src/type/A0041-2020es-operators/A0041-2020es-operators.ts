// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Titulo',
  texto: 'Texto',
  // data: new Date(),
};
// Só checa se o valor é null ou undefined
console.log(documento.data?.toDateString() ?? '1 Ixi, não existe Data');
console.log(undefined ?? '2 Ixi, não existe Data');
console.log(null ?? '3 Ixi, não existe Data');
console.log(false ?? '4 Ixi, não existe Data');
console.log(0 ?? '5 Ixi, não existe Data');
console.log('' ?? '6 Ixi, não existe Data');
