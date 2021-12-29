const templateFooter = document.createElement('template');
templateFooter.innerHTML = `<link rel="stylesheet" href="../Styles/main.css"><link rel="stylesheet" href="../Styles/footer.css">
<footer>
            <section id="social">
                <div class="social_line">
                    <a><img src="../Medias/insta.png" height="50" width="50"></a>
                </div>
                <div class="social_line">
                    <a><img src="../Medias/linkedin.png" height="50" width="50"></a>
                </div>
                <div class="social_line">
                    <a><img src="../Medias/linkedin.png" height="50" width="50"></a>
                </div>
            </section>
            <section id="contact">
                <a href=""> Site de Lyon 1 </a>
            </section>
        </footer>
`;
class footer extends HTMLElement {
    constructor() {
        super();
        console.log("ok");
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(templateFooter.content.cloneNode(true));
        this.render()
    }

    render() {
        this.shadowRoot.querySelector('footer').addEventListener('scroll',() => {
            console.log("salutavant");
            this.shadowRoot.querySelector("#footer").style.top = window.scrollY + "px";
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
customElements.define('footer-webcomp', footer);

