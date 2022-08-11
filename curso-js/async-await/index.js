function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Bad Value')
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

// esperaAi('Frase 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 2', rand(1, 3));
//     }).then(resposta => {
//         return resposta + ' vai para aí';
//     }).then(resposta => {
//         console.log(resposta);
//     }).catch(error => console.log('ERRO:', error));

async function executa() {
    try {
        const fase1 = await esperaAi('Frase 1', rand(1, 3));
        console.log(fase1);

        const fase2 = await esperaAi('Frase 2', rand(1, 3));
        console.log(fase2);

        const fase3 = await esperaAi('Frase 3', rand(1, 3));
        console.log(fase3);

        console.log('Terminando');
    } catch (e) {
        console.log(e);
    }
}
executa();