import todoItemTemplate from "./todoItem.html";
import "./todoItem.css";

class TodoItem extends HTMLElement {
  constructor() {
    super();

    let template = document.createElement("template");
    template.innerHTML = todoItemTemplate;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".doneButton")
      .addEventListener("click", (event) => {
        const item = event.target.parentNode;
        const list = item.parentNode;
        list.removeChild(item);
      });
  }
}

window.customElements.define("todo-item", TodoItem);
