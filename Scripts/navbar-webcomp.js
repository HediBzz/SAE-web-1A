const template = document.createElement('template');
template.innerHTML = `<link rel="stylesheet" href="../Styles/main.css">
<link rel="stylesheet" href="../Styles/navbar.css">
    <div id='navbar'>
        <p>IUT Lyon 1 : Informatique</p>
        <nav class="basicNav">
            <ul role="barre de naviguation">
                <li> <a href="accueil.html"> Accueil</a> </li>
                <li> <a href="vie_etudiante.html"> Vie étudiante</a> </li>
                <li> <a href="scolarite.html"> Scolarité</a> </li>
                <li> <a href="questionnaire.html"> Questionnaire</a> </li>
            </ul>
        </nav>
        <details>
            <summary></summary>
            <nav class="menu">
                <a href="accueil.html"> Accueil</a>
                <a href="vie_etudiante.html"> Vie étudiante</a>
                <a href="scolarite.html"> Scolarité</a>
                <a href="questionnaire.html"> Questionnaire</a>
            </nav>
        </details>
    </div>
    
`;
class navBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.render()
    }

    render() {
        this.shadowRoot.querySelector('#navbar').addEventListener('scroll', () => {
            this.shadowRoot.querySelector("#navbar").style.top = window.scrollY + "px";
        })
    }



    static get observedAttributes() {
        return
    }

}
customElements.define('nav-bar', navBar);

