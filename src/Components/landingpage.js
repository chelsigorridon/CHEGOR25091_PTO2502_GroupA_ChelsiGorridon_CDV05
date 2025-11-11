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
          <div>
          <p class="p1">HI, <br>
            THE NAMES <br>
            CHELSI JAIME GORRIDON </p>
          </div>


           <div>
          <div class="Traits">
            <div class="AuraTraits"></div>
            <div class="AuraTraits"></div>
            <div class="AuraTraits"></div>
           </div>

          </div>
        </div>

    `;

    shadow.appendChild(LinkCSS);
    shadow.appendChild(container);
  }
}

customElements.define("landing-page", landingPage);