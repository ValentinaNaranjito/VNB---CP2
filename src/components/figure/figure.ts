export enum attributefigure {
    "fact" = "fact",
    "url" = "url"
}

export default class figure extends HTMLElement {
    fact?: string;
    url?: string;

    static get observedAttributes(){
        const attrs: Record <attributefigure, null> = {
           fact: null,
           url: null 
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: attributefigure,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section>
               <h1 class="titulo">CATSMEMES</h1>
                <p>${this.fact}</p>
                <img src="${this.url}">
                </section>
            `
        }
    }
}

customElements.define('app-figure',figure);