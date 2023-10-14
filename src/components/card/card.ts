import { attributebutton } from "../button/button";
import { attributefigure } from "../figure/figure";

export enum attributecard {
    "fact" = "fact",
    "url" = "url",
    "btn_text" = "btn_text"
}

export default class card extends HTMLElement{
    fact: string = "";
    url: string = "";
    btn_text: string = "";

    static get observedAttributes(){
        const attrs: Record <attributecard,null> = {
            fact: null,
            url: null,
            btn_text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: attributecard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

            const figure = this.ownerDocument.createElement('app-figure');
            figure.setAttribute(attributefigure.fact, this.fact);
            figure.setAttribute(attributefigure.url, this.url);

            const button = this.ownerDocument.createElement('app-button');
            button.setAttribute(attributebutton.btn_text, this.btn_text);

            container.appendChild(figure);
            container.appendChild(button);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-card', Card)