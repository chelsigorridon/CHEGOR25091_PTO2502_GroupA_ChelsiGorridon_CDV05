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
     
     <div class="secondPagecontent">
  <div class="LineofProjects">

    <!-- Project 1 -->
    <a href="https://github.com/chelsigorridon/CHEGOR25091_PTO2502_GroupA_ChelsiGorridon_DJS03.git" target="_blank">
      <div class="Projects">
        <img class="Projectimg" src="img/desktop_all_genres_dropdown.png" alt="Picture of Project 1">

        <div class="projectstext">
          <h3>Podcast App</h3>
          <p>
            The Podcast App is a web application that displays a variety of podcasts across different genres. 
            On the landing page, all podcasts are presented as cards showing an image, title, genres, number of seasons, and updated date.
            The app demonstrates the use of React to create reusable, encapsulated custom elements.
          </p>
        </div>
      </div>
    </a>

    <!-- Project 2 -->
    <a href="https://github.com/chelsigorridon/CHEGOR25091_PTO2502_GroupA_ChelsiGorridon_JSL05.git" target="_blank">
      <div class="Projects">
        <img class="Projectimg" src="img/JSL01-Desktop.png" alt="Picture of Project 2">

        <div class="projectstext">
          <h3>Kanban App</h3>
          <p>
            A Task Board with Local Storage and Task Creation is a simple web app that allows users to create tasks with a title, description, and status, and then visually display those tasks in columns like "To Do", "In Progress", and "Done".
            The app uses the browser's local storage to save the tasks so that they remain even after the page is refreshed.
          </p>
        </div>
      </div>
    </a>

    

  </div>
</div>

      
    `;

    shadow.appendChild(LinkCSS);
    shadow.appendChild(secondPage);
  }
}

customElements.define("projects-page", projectsPage);