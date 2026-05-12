window.onload = function() {
    
    // LES ÉLÉMENTS
    const accueil = document.getElementById("accueil");
    const projets = document.getElementById("projets");
    const contact = document.getElementById("contact");
    const main = document.getElementById("main");

    // VARIABLES
    let activeTab = "accueil";
    let mainContent = `<p>${activeTab}</p>`;
    main.innerHTML = mainContent; // Accueil par défault
    
    // LISTENERS
    accueil.addEventListener("click", () => {
        activeTab = "accueil";
        mainContent = `<div><h2>Présentation</h2>
    <p>
        Ait Assou Abdelkader, autodidacte passionné par le développement web et les
        technologies numériques. Ce cours a pour objectif d’offrir une
        formation académique conçue par des experts afin de développer des
        compétences solides en programmation, conception web et bonnes
        pratiques du développement moderne.
    </p></div>`
        main.innerHTML = mainContent;
    });

    projets.addEventListener("click", () => {
        activeTab = "projets";
        mainContent = `
       
    <div class="projets">
        <div class="projet"></div>
        <div class="projet"></div>
        <div class="projet"></div>
        <div class="projet"></div>
    </div>`
        main.innerHTML = mainContent;
    });

    contact.addEventListener("click", () => {
        activeTab = "contact";
        mainContent = `<div class="contact"><form action="http://www.example.com/review.php" method="post">
        <label>
          Nom:
          <input  type="text" name="name" size="30" maxlength="100" />
        </label>
        <br>

        <label>
          Prénom:
          <input type="text" name="prenom" size="30" maxlength="100" />
        </label>
        <br>

        <label>
          Courriel:
          <input type="email" name="email" size="30" maxlength="100" required />
        </label>
        <br />
        
        <div class="form-group">
            <label for="type">Sujet</label>
            <select id="sujet" name="sujet" required>
                <option  hidden="true" disabled selected>Choisir un sujet</option>
                <option value="demande-infos">Demande d'informations</option>
                <option value="dépense">Feedback</option>
                <option value="autres">Autres</option>
            </select>
        </div>

      
      <br>
        <textarea placeholder="Saisissez votre message" rows="10" cols="40" name="message" id="message"></textarea>

        <br>
        <input type="button" value="Envoyer">
    </form></div>`
        main.innerHTML = mainContent;
    });

}