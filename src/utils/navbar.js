
export class navBar extends HTMLElement {
  constructor () {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const LinkCSS = document.createElement("link");
    LinkCSS.setAttribute("rel", "stylesheet");
    LinkCSS.setAttribute("href", "./styles.css");

    const navigationbar = document.createElement("div");
    navigationbar.classList.add("navigationbar");

    navigationbar.innerHTML = `
     
     <div>
      <nav class="navigationbar"> 
        <ul>
          <button class="LightDarkMode"></button>
          <li><a href="about.html">About Me</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Contact Me</a></li>
        </ul>
      </nav>

      `;

       shadow.appendChild(LinkCSS);
       shadow.appendChild(navigationbar);
  }
}

customElements.define("nav-bar", navBar);