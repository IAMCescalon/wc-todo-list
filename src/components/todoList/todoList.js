import todoListTemplate from "./todoList.html";

class TodoList extends HTMLElement {
  constructor() {
    super();

    let template = document.createElement("template");
    template.innerHTML = todoListTemplate;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .getElementById("addButton")
      .addEventListener("click", () => {
        const textField = this.shadowRoot.getElementById("todoField");
        const listElement = document.createElement("li");
        listElement.innerText = textField.value;
        this.shadowRoot.getElementById("todoList").appendChild(listElement);
        textField.value = "";
        textField.focus();
      });
  }
}

window.customElements.define("todo-list", TodoList);
