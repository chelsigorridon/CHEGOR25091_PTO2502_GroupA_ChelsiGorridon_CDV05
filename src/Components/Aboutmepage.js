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
  <h1 class="headingone"> WHO AM I? </h1>
   <img src="img/image.png" alt="Picture of Me">
 
    <div class="whoamI">

          <div class="explanation">
            <p>Hi, I’m Chelsi Jaime Gorridon, a dedicated software development student based in Cape Town, South Africa.<br><br>
             I’m currently studying at Code Space Academy, where I’m growing my skills in HTML, CSS, JavaScript, and React — building dynamic, user-friendly web applications from the ground up.<br><br>
             I’m passionate about both the creative and logical sides of coding — from crafting clean, responsive designs to writing efficient, organized code.<br><br>
              As an INFJ-T personality, I bring empathy, focus, and thoughtful problem-solving into every project I take on.<br><br>
             My goal is to become a front-end developer who builds intuitive, accessible, and beautifully designed digital experiences that make a difference.</p>
          </div>
 
           </div>

             <div class="social-links" >

             <div class="contactheading" id="contact-section"  > 
             <h1 class="headingone" >CONTACT ME </h1>
             </div>

           <div>
           <button onclick="window.location.href='mailto:chelsijaimegorridon@gmail.com'">Email Me</button>
           </div>

           <br>

           <div class="contactinfo">
           <h3>Email:chelsijaimegorridon@gmail.com </h3>
           <br>
           <br>
           <br>
           <br>
           <br>
           <h3>Phone Number:083 295 7278</h3>
            </div>

           <div class="sociallinksicons">
            <a href="https://www.linkedin.com/in/chelsi-gorridon-54a09621a/" target="_blank" aria-label="LinkedIn">
           <img class="sociallinksimg" src="img/linkedin.jpg" alt="LinkedIn Logo"> </a>
           <a href="https://github.com/chelsigorridon" target="_blank" aria-label="GitHub">
         <img class="sociallinksimg"  src="img/github.png" alt="GitHub Logo"> </a>
           <a href="https://www.instagram.com/chelsi_jaime_gorridon/" target="_blank" aria-label="Instagram">
           <img class="sociallinksimg"   src="img/instagram.png" alt="Instagram Logo" </a>

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