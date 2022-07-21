try {

    console.log(naoExiste);
} catch (err) {
    console.log('naoExiste não existe')
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw Error('x e y precisam ser numeros');
    }
    return x + y;
}
try {

    console.log(soma('a', 2));
} catch (error) {
    console.log(error)
}finally{
    console.log('soma finalizada')
}