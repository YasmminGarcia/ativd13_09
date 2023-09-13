

class Formulario extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `   
        <input type="text" placeholder="Digite aqui..." name="text" class="input">

       `
       this.id =  `cabecalho`
    
    }
}

customElements.define(`chico-seu-puto`, Formulario);