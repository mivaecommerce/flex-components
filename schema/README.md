# Flex Component Schema Hints in VS Code

1. In VS Code, open the Command Palette (Mac: `⇧⌘P` or Windows: `Ctrl+Shift+P`)
1. Type and select the `Preferences: Open Settings (JSON)`
1. Add the following structure to your list:
	```json
	"json.schemas": [
		{
			"fileMatch": [
				"flex.json",
				"flex-core.json",
				"flex-properties.js",
				"flex-advanced-properties.js",
				"**/flex/*.json"
			],
			"url": "https://cdn.jsdelivr.net/gh/mivaecommerce/flex-components/schema/types.json"
		}
	]
	```
1. Now inside a flex.json file you should see [IntelliSense hints](https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features) for possible keys, values, data-types, and descriptions and you can use the keyboard shortcut to show the quick info too (Mac: `⌃Space` or Windows: `Ctrl+Space`)
