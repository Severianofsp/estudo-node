const carrega = function () {
    console.log('teste')
    
const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.sucess(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    })
}}

request( {
    method: 'GET',
    url: 'http://www.google.com',
    sucess(response) {
        console.log(response)
    },
    error(erroText) {
        console.log(erroText)
    }
});
carrega();