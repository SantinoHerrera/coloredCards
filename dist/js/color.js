const colors = require('./colors.json');
const styles = require('./style.js');

const contentDiv = `<div class="content">${colors
  .map(
    ({ color, category, type, code: { rgba, hex } }) =>
      `<div class="card card-${color}"><h1>color:${color}</h1><h1>category:${category}</h1><h1>type:${
        type ? type : 'N/A'
      }</h1><h1>code-rgba:</h1><h1>${rgba}</h1><h1>code-hex:${hex}</h1></div>`
  )
  .reduce((divString, item) => divString + item, '')}</div>`;

const colorsCSS = `${colors
  .map(
    ({ color, code: { rgba } }) =>
      `.card.card-${color}{background-color: rgba(${rgba})}`
  )
  .reduce((divString, item) => divString + item, '')};}`;

document.body.innerHTML = contentDiv;

const styleCSS = document.createElement('style');

styleCSS.innerHTML = `${styles}${colorsCSS}`;

document.head.appendChild(styleCSS);
