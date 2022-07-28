const fs = require('fs').promises;

module.exports = (caminhoArquivo, json) => {
    fs.writeFile(caminhoArquivo, json, { flag: 'w', encoding: 'utf8' })
};