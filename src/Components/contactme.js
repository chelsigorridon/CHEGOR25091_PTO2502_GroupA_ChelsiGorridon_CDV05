import '../utils/navbar.js';

export class ContactMe extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // Link external CSS
    const linkCSS = document.createElement("link");
    linkCSS.setAttribute("rel", "stylesheet");
    linkCSS.setAttribute("href", "./styles.css");

    // Container div
    const thirdPage = document.createElement("div");
    thirdPage.classList.add("thirdpage");

    thirdPage.innerHTML = `
    
      <div class="thirdpagecontent container">
        <div class="contactheading" id="contact-section">
          <h1 class="headingone">CONTACT ME</h1>
        </div>

        <div>
          <button onclick="window.location.href='mailto:chelsijaimegorridon@gmail.com'">Email Me</button>
        </div>

        <div class="contactinfo">
          <h3>Email: chelsijaimegorridon@gmail.com</h3>
          <h3>Phone Number: 083 295 7278</h3>
        </div>

        <div class="social-links">
          <a href="https://www.linkedin.com/in/chelsi-gorridon-54a09621a/" target="_blank" aria-label="LinkedIn">
            <img class="sociallinksimg" src="img/linkedin.jpg" alt="LinkedIn Logo">
          </a>
          <a href="https://github.com/chelsigorridon" target="_blank" aria-label="GitHub">
            <img class="sociallinksimg" src="img/github.png" alt="GitHub Logo">
          </a>
          <a href="https://www.instagram.com/chelsi_jaime_gorridon/" target="_blank" aria-label="Instagram">
            <img class="sociallinksimg" src="img/instagram.png" alt="Instagram Logo">
          </a>
        </div>
      </div>
    `;

    // Append CSS and content
    shadow.appendChild(linkCSS);
    shadow.appendChild(thirdPage);
  }
}

// Define the custom element
customElements.define("third-page", ContactMe);