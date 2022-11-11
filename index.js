
// TODO: Incluir los paquetes necesarios para esta aplicación
const fs = require('fs');
const inquirer = require('inquirer');
const  generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Crear una serie de preguntas para la entrada de usuario
const questions = [
    {
        type: 'input',
        message: '¿Cuál es el titulo del README? ',
        name: 'titulo'
    },
    {
        type: 'input',
        message: 'Descripción => Describa cual fué su motivación, ¿Por qué desarrolló este proyecto? ¿Qué problema resuelve?',
        name: 'descripcion'
    },
    {
        type: 'input',
        message: '¿Cuáles son los pasos necesarios para instalar su proyecto? Proporcione una descripción paso a paso de cómo poner en funcionamiento el entorno de desarrollo ',
        name: 'instalacion'
    },
    {
        type: 'input',
        message: 'Describa las instrucciones de uso :',
        name: 'uso'
    },
    {
        type: 'input',
        message: 'Describa ejemplos de uso :',
        name: 'ejemplos'
    },
    {
        type: 'input',
        message: '¿Cuáles son las instrucciones sobre las contribuciones? ',
        name: 'contribuciones'
    },
    {
        type: 'input',
        message: 'Indique las instrucciones para probar su aplicación :  ',
        name: 'pruebas'
    },
    {
        type: 'input',
        message: '¿Cuál es su usuario de GitHub? ',
        name: 'git'
    },
    {
        type: 'input',
        message: '¿Cuál es su correo electrónico? ',
        name: 'email'
    },
    {
        type: 'list',
        message: '¿Bajo qué licencia está cubierta esta aplicación?',
        name: 'licencia',
        choices: [
            'Apache',
            'Boost',
            'GNU: GNU GPL v3',
            'GNU: GNU GPL v2',
            'ISC',
            'MIT',
            'Mozilla',
            'sin licencia',
        ]
    },

];

// TODO: Crear una función para escribir el archivo README
function writeToFile(fileName, readme) {
    fs.writeFileSync(fileName, readme);
 }

// TODO: Crear una función para inicializar la aplicación
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        const readme = generateMarkdown(data);
        const file = 'README.md';
        writeToFile(file, readme);
    });
}

// Llamada de función para inicializar la aplicación
init();