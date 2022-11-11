

// TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se pasa
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseBadge(license) {

   return license === 'sin licencia' ? '' : `![Credencial](https://img.shields.io/badge/License-${license}-brightgreen.svg)`

}

// TODO: Crear una función que devuelva el enlace de licencia
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseLink(license) {
   return license === 'sin licencia' ? '' : `- [Licenses](#Licenses)`
}

// TODO: Crear una función que devuelva la sección de licencia de README
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseSection(license) {
   return license !== 'sin licencia' ? ` ## Licenses
     Warning 🔴
    Esta aplicación está cubierta bajo la licencia ${license}.` : "";


}

// TODO: Crear una función para generar un markdown para README
function generateMarkdown(data) {
return `# ${data.titulo}  
${renderLicenseBadge(data.licencia)}

## Description

${data.descripcion}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
${renderLicenseLink(data.licencia)}
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

    ${data.instalacion}

## Uso

### Instruciones De Uso

${data.uso}

### Usage examples

${data.ejemplos}

   
${renderLicenseSection(data.licencia)}

## Contributing

${data.contribuciones}

## Test

  ${data.pruebas}
    
## Preguntas

[GitHub](https://github.com/${data.git}) 

Si tienes preguntas adicionales y deseas contactarme puedes hacerlo por medio del siguiente correo electrónico
[e-mail](${data.email})
`
}

module.exports = generateMarkdown
