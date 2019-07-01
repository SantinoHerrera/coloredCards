(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./colors.json":2,"./style.js":3}],2:[function(require,module,exports){
module.exports=[
  {
    "color": "black",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [0, 0, 0, 1],
      "hex": "#000"
    }
  },
  {
    "color": "white",
    "category": "value",
    "code": {
      "rgba": [255, 255, 255, 1],
      "hex": "#FFF"
    }
  },
  {
    "color": "red",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 0, 0, 1],
      "hex": "#FF0"
    }
  },
  {
    "color": "blue",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [0, 0, 255, 1],
      "hex": "#00F"
    }
  },
  {
    "color": "yellow",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 255, 0, 1],
      "hex": "#FF0"
    }
  },
  {
    "color": "green",
    "category": "hue",
    "type": "secondary",
    "code": {
      "rgba": [0, 255, 0, 1],
      "hex": "#0F0"
    }
  }
]

},{}],3:[function(require,module,exports){
const styleCss = `
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.card{
  height: 15rem;
  width: 10rem;
  border-radius: 3rem;
  margin: 1rem 1rem;
  overflow: hidden;
  font-size: 10px;
  text-align: center;
  box-shadow: 1rem 1rem 0.3rem 0.2rem rgba(0, 0, 0, 0.3);
  border: 3px solid black;
}
.card.card-black{
  color: white;
}`;

module.exports = styleCss;

},{}]},{},[1]);
