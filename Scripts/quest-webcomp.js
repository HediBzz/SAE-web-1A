const templateQuest = document.createElement('template');
templateQuest.innerHTML = `<link rel="stylesheet" href="../Styles/main.css">
<div class="question ques-1 2 active">
    <h2>Apprécies-tu de travailler en groupe ?</h2>
    <div class="">
        <label class="q1-1"><input type="radio" name="reponse" checked=><span>Rep1</span></label>
        <label class="q1-2"><input type="radio" name="reponse"><span>Rep2</span></label>
    </div>
                            
    <button class="btn-question">Valider</button>
    </div>
`;
class navBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(templateQuest.content.cloneNode(true));
        this.render()
    }

    render() {
        this.shadowRoot.querySelector('#navbar').addEventListener('scroll',() => {
            console.log("salutavant");
            this.shadowRoot.querySelector("#navbar").style.top = window.scrollY + "px";
            console.log("salut");
        })
    }
    
    

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
        this.render()
    }


}
customElements.define('nav-bar', navBar);