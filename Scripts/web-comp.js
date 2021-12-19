const template = document.createElement('template');
template.innerHTML = `<link rel="stylesheet" href="../Styles/main.css">
<div id="navbar">
                <p>IUT Lyon 1 : Département informatique</p>
                <p> </p>
                <nav>
                    <ul>
                        <li> <a href="accueil.html"> Accueil</a> </li>
                        <li> <a href="vie_etudiante.html"> Vie étudiante</a> </li>
                        <li> <a href="scolarite.html"> Scolarité</a> </li>
                        <li> <a href="questionnaire.html"> Questionnaire</a> </li>
                    </ul>
                <nav>
            </div>
`;
class superWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.render()
    }

    render() {
        this.shadowRoot.querySelector('#navbar').addEventListener("scroll",() => {
            console.log("salutavant");
            this.shadowRoot.querySelector("#navbar").style.top = window.scrollY + "px";
            console.log("salut");
        })
    }
    
    addEventListener("scroll",() => {
        console.log("salutavant");
        this.shadowRoot.querySelector("#navbar").style.top = window.scrollY + "px";
        console.log("salut");
    })

    updateTemplate = () => {
        this.shadowRoot.querySelector('.my-counter').innerHTML = `compteur : ${this.compteur}`
    }


    static get observedAttributes() {
        return ["prop-count", "test"]
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === 'prop-count') {
            this.compteur = Number.parseInt(newVal)
            this.updateTemplate()
        }

        if (prop === 'test') {
            this.shadowRoot.querySelector('section').innerHTML = newVal
        }
    }

    connectedCallback() {
        // setTimeout(this.render);
    }


}
customElements.define('super-web-component', superWebComponent);
