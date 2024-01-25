/**
 * MMX / EXAMPLE
 */
class MMX_Example extends MMX_Element {

	static get props () {
		return {
			color: {
				allowAny: true,
				default: 'blue'
			}
		};
	}

	themeResourcePattern = /themes\/my-custom-theme\/(reset|text).css|themes\/another-theme\/headings.css/i;
	styleResourceCodes = ['mmx-base', 'mmx-example'];

	constructor () {
		super();
		this.makeShadow();
	}

	render() {
		return /*html*/`<div class="mmx-example type-display-1">
			<slot></slot>
		</div>`;
	}

	styles () {
		return /*css*/`
			:host {
				--mmx-example__color: ${this.getPropValue('color')};
			}
		`;
	}

	attributeChanged (name, oldValue, newValue) {
		if (name === 'data-color') {
			console.log(`The color was ${oldValue} and now it is ${newValue}`);
		}
	}

	afterRender () {
		console.log('The mmx-example was rendered. This is a great place for event bindings');
	}
}

if (!customElements.get('mmx-example')) {
	customElements.define('mmx-example', MMX_Example);
}
