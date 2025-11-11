import '../utils/navbar.js';

export class aboutMePage extends HTMLElement {
  constructor () {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const LinkCSS = document.createElement("link");
    LinkCSS.setAttribute("rel", "stylesheet");
    LinkCSS.setAttribute("href", "./styles.css");

    const firstPage  = document.createElement("div");
    firstPage.classList.add("firstPage");

   firstPage.innerHTML = `
  
   <div class="firstPagecontent">

   <div class="Headingabout">
   
  <div  class="Mainimg"  >
  <h1 class="headingone"> WHAT CAN I DO? </h1>
   
 
    <div class="whoamI">

          <div class="explanation">
            <p>Hi, I’m Chelsi Jaime Gorridon, a dedicated software development student based in Cape Town, South Africa.<br><br>
             I’m currently studying at Code Space Academy, where I’m growing my skills in HTML, CSS, JavaScript, and React — building dynamic, user-friendly web applications from the ground up.<br><br>
             I’m passionate about both the creative and logical sides of coding — from crafting clean, responsive designs to writing efficient, organized code.<br><br>
              As an INFJ-T personality, I bring empathy, focus, and thoughtful problem-solving into every project I take on.<br><br>
             My goal is to become a front-end developer who builds intuitive, accessible, and beautifully designed digital experiences that make a difference.</p>
          </div>
 
           </div>

           

           </div>

          </div>
       
        </div> 
      

      
    `;

    shadow.appendChild(LinkCSS);
    shadow.appendChild(firstPage );
  }
}

customElements.define("aboutme-page", aboutMePage);