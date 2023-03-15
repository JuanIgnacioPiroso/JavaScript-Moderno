import "./style.css";
import javascriptLogo from "./javascript.svg";
import { enviromentsComponent } from "./src/concepts/01-Enviroments";
import { callbacksComponent } from "./src/concepts/02-Callbacks";
import { promiseComponent } from "./src/concepts/03-Promises";
import { promiseRaceComponent } from "./src/concepts/04-Promise-race";
import { asyncComponent } from "./src/concepts/05-Async";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;

const element = document.querySelector(".card");

//enviromentsComponent(element);
//callbacksComponent(element);
//promiseComponent(element);
//promiseRaceComponent(element);
asyncComponent(element);