import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>

    <h1>Hola enrixer!</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
