const divParagrafo = document.querySelector('.paragrafos');
const paragrafos = divParagrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of paragrafos){
   p.style.backgroundColor= backgroundColorBody;
   p.style.color = 'white';
}
