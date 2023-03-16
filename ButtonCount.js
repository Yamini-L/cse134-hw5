class ButtonCount extends HTMLElement {
    constructor() {
        super();

        const clickButton = document.createElement('button');
        clickButton.innerHTML = 'Times Clicked: 0';

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(clickButton);

        let increment = 0;

        clickButton.addEventListener('click', () => {
            increment++;
            clickButton.innerHTML = 'Times Clicked: ' + increment.toString();
        });
    }
}

customElements.define('button-count', ButtonCount);