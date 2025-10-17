import '../utils/navbar.js';

export class projectsPage extends HTMLElement {
  constructor () {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const LinkCSS = document.createElement("link");
    LinkCSS.setAttribute("rel", "stylesheet");
    LinkCSS.setAttribute("href", "./styles.css");

    const secondPage  = document.createElement("div");
    secondPage.classList.add("secondPage");

   secondPage.innerHTML = `
     
     <div>
      </div>

      
    `;

    shadow.appendChild(LinkCSS);
    shadow.appendChild(secondPage);
  }
}

customElements.define("projects-page", projectsPage);