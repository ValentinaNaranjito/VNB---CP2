export enum attributebutton {
    "btn_text" = "btn_text"
}

export default class button extends HTMLElement {
    btn_text?: string;

    static get observedAttributes(){
        const attrs: Record <attributebutton, null> = {
            btn_text: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: attributebutton,
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
               <button class="boton">NEXT</button>
                </section>
            `
        }
    }
}

customElements.define('app-button',button);