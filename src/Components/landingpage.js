import '../utils/navbar.js';

export class landingPage extends HTMLElement {
  constructor () {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const LinkCSS = document.createElement("link");
    LinkCSS.setAttribute("rel", "stylesheet");
    LinkCSS.setAttribute("href", "./styles.css");

    const container = document.createElement("div");
    container.classList.add("container");

    container.innerHTML = `
     
      <div class="container2">

        <div class="maininfo">
          <p class="p1">Hi, <br>
            The Names <br>
            Chelsi Jaime Gorridon </p>

          <div class="Traits">
            <div class="AuraTraits"></div>
            <div class="AuraTraits"></div>
            <div class="AuraTraits"></div>
          </div>
        </div>

    `;

    shadow.appendChild(LinkCSS);
    shadow.appendChild(container);
  }
}

customElements.define("landing-page", landingPage);