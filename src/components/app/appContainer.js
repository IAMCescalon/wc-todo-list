import appTemplate from "./appContainer.html";

import "./appContainer.css";
import "../todoList/todoList";
import "../todoItem/todoItem";

class AppContainer extends HTMLElement {
  constructor() {
    super();

    let template = document.createElement("template");
    template.innerHTML = appTemplate;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("app-container", AppContainer);
