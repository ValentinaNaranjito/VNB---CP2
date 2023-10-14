import {getData} from '../serve/getData'
import { attributecard } from '../components/card/card';
import { apytype } from "../types/apytype"; 
import "../components/export"

class dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        data.forEach((e: apytype) => {
            const card = this.ownerDocument.createElement('app-card');
            card.setAttribute(attributecard.fact, e.fact);
            card.setAttribute(attributecard.url,e.url);
            card.setAttribute(attributecard.btn_text, "NEXT");
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard',dashboard);