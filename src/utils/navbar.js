
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

      <div class="menu-toggle" id="menu-toggle"></div>

        <ul>
          <li><a class="navbtn" href="index.html">Home</a></li>
          <li ><a class="navbtn" href="about.html">About Me</a></li>
          <li><a class="navbtn" href="projects.html">Projects</a></li>
        </ul>
      </nav>

      `;

       shadow.appendChild(LinkCSS);
       shadow.appendChild(navigationbar);
  }
}

customElements.define("nav-bar", navBar);