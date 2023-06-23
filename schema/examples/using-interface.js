/* eslint-disable camelcase, sort-keys */
/**
 * @typedef { import("../../schema/types").FlexComponent } FlexComponent
 */

/** @type {FlexComponent} */
export const foo = {
	code: 'foo',
	name: 'Foobar',
	properties: [
		{
			code: 'foo',
			input_type: 'number',
			name: 'Foobar',
			textsettings: {
				fields: [
					{
						type: 'text',
						size: 'one-third',
						text_type: 'text'
					}
				]
			},
			type: 'text'
		},
		{
			code: 'foo',
			prompt: 'Foobar',
			type: 'category'
		}
	]
};
