import { FlexComponent } from '../../schema/types';

export const foo: FlexComponent = {
	code: 'foo',
	name: 'Foo',
	version: '0.1.1',
	resourcegroup_code: '1.2.2',
	category: 'text-editor',
	properties: [
		{
			code: 'foo',
			prompt: 'Foo',
			type: 'group',
			properties: [
				{
					code: 'foo',
					type: 'textarea',
					prompt: 'Foobar'
				},
				{
					code: 'foo',
					prompt: 'Foo',
					type: 'text',
					textsettings: {
						fields: [
							{
								code: 'foo',
								prompt: 'Foobar',
								type: 'text',
								pseudoclasses: [
									'normal'
								]
							}
						]
					}
				},
				{
					code: 'foo',
					prompt: 'Foo',
					type: 'date'
				}
			]

		}
	]
};
