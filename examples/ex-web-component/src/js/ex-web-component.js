class ExampleWebComponent extends HTMLElement {
	constructor () {
		super();
		this.attachShadow({
			mode: 'open'
		});
	}

	connectedCallback () {
		const template = document.getElementById('ex-web-component-template');
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.render();
	}

	render () {
		const text = this.getAttribute('data-text');
		this.shadowRoot.querySelector('.ex-web-component-text').textContent = `The text, "${text}," is ${text.length} characters long.`;
	}

	static get observedAttributes () {
		return ['data-text'];
	}

	attributeChangedCallback () {
		this.render();
	}
}

if (!customElements.get('ex-web-component')) {
	customElements.define('ex-web-component', ExampleWebComponent);
}
