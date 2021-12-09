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
        const listElement = document.createElement("todo-item");

        const slot = document.createElement("span");
        slot.innerText = textField.value;
        slot.setAttribute("slot", "todo-content");
        listElement.appendChild(slot);

        this.shadowRoot.getElementById("todoList").appendChild(listElement);
        textField.value = "";
        textField.focus();
      });
  }
}

window.customElements.define("todo-list", TodoList);
