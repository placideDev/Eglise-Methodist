'use strict'
/* eslint-env node, esc6 */


const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

const REaDOPTION = { encoding: 'UTF-8' };

const INDEXURL = 'E:/code_pld/projet_eglise/calendary.html'
module.exports = async () => {
    //Operation 

    //recuperer le contenu du fichier html eglis.html
    const contenu = await readFileAsync(INDEXURL, REaDOPTION);

    //retourner la page HTML
    return contenu
}